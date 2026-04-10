# 📱 App de Estudo — Agente de Saúde de Iracemápolis

> **Aplicativo Progressive Web App (PWA)** desenvolvido para estudo do concurso público **Edital 001/2026** do Município de Iracemápolis — SP para o cargo de **Agente Comunitário de Saúde (ACS)**.

---

## 📋 Índice

1. [Visão Geral do Projeto](#-visão-geral-do-projeto)
2. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
3. [Arquitetura e Estrutura de Arquivos](#-arquitetura-e-estrutura-de-arquivos)
4. [Funcionalidades Detalhadas](#-funcionalidades-detalhadas)
   - [Aba: Resumos](#aba-resumos)
   - [Aba: Simulados (Quiz)](#aba-simulados-quiz)
   - [Aba: A Cidade](#aba-a-cidade)
   - [Aba: A Lei](#aba-a-lei)
5. [Design System — Material Design 3](#-design-system--material-design-3)
6. [Banco de Dados de Conteúdo (data.js)](#-banco-de-dados-de-conteúdo-datajs)
7. [Lei Orgânica na Íntegra (LeiOraganicaIracemapolis.js)](#-lei-orgânica-na-íntegra-leioraganicairacemápolisjs)
8. [Lógica da Aplicação (app.js)](#-lógica-da-aplicação-appjs)
9. [Estilo e Animações (styles.css)](#-estilo-e-animações-stylescss)
10. [PWA — Progressive Web App](#-pwa--progressive-web-app)
11. [Conteúdo Pedagógico Coberto](#-conteúdo-pedagógico-coberto)
12. [Histórico de Desenvolvimento](#-histórico-de-desenvolvimento)
13. [Como Executar Localmente](#-como-executar-localmente)
14. [Melhorias Futuras](#-melhorias-futuras)

---

## 🎯 Visão Geral do Projeto

O **App de Estudo — Agente de Saúde** é uma Single Page Application (SPA) responsiva e mobile-first criada para preparação de concurso público. O app organiza todo o conteúdo do edital em uma estrutura de fácil acesso, com técnicas de active recall (memorização ativa) através de quizzes, resumos estruturados e leitura da lei na íntegra.

### Objetivos Pedagógicos
- **Active Recall**: Simulados com 10 questões sorteadas aleatoriamente do banco de dados
- **Spaced Repetition (base)**: Estatísticas persistidas por localStorage para controle de desempenho
- **Organização por relevância**: Cada resumo possui um badge de "alta" ou "baixa" probabilidade de cair na prova
- **Contextualização**: Todos os exemplos de matemática e português usam contexto da área da saúde

### Público-Alvo
Candidatos ao concurso público de **Agente Comunitário de Saúde (ACS)** do Município de Iracemápolis — SP, Edital 001/2026.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão / Fonte | Uso |
|---|---|---|
| **HTML5** | Semântico | Estrutura da aplicação e templates |
| **CSS3 (Vanilla)** | Custom | Design system completo baseado em Material Design 3 |
| **JavaScript** | ES6+ (Vanilla) | Toda a lógica da aplicação (SPA sem framework) |
| **Google Fonts** | Roboto 400/500/700 | Tipografia principal |
| **Font Awesome** | v6.0.0 CDN | Ícones da navegação e interface |
| **Web Audio API** | Nativa do browser | Sons de feedback (acerto/erro/finish/navegação) |
| **Vibration API** | Nativa (mobile) | Feedback háptico complementar ao som |
| **localStorage** | Nativa do browser | Persistência de estatísticas e preferência de tema |
| **Service Worker** | `sw.js` | Cache offline — PWA |
| **Web App Manifest** | `manifest.json` | Instalação como app nativo |

### Decisões de Arquitetura
- **Sem frameworks ou bundlers**: O projeto roda diretamente no browser sem necessidade de build, Node.js ou servidor. Basta abrir o `index.html`.
- **Templates HTML nativos (`<template>`)**: Cada aba da aplicação está definida como um `<template>` no HTML e é injetada dinamicamente no DOM pelo `app.js`, evitando re-fetching de páginas.
- **Dados embutidos como variáveis JS**: `data.js` e `LeiOraganicaIracemapolis.js` expõem constantes globais (`summaries`, `quizDb`, `leiCompleta`) que são consumidas pelo `app.js` por referência direta, sem API REST.

---

## 📂 Arquitetura e Estrutura de Arquivos

```
Estudo/
│
├── index.html                    # Ponto de entrada. Contém o shell da app e todos os <template>s
├── app.js                        # Lógica principal: navegação, quiz, Lei, estatísticas, FAB, tema
├── data.js                       # Banco de dados: resumos (summaries[]) e questões (quizDb[])
├── LeiOraganicaIracemapolis.js   # Lei Orgânica completa como array de strings (leiCompleta[])
├── styles.css                    # Design system completo (Material Design 3, dark mode, animações)
├── manifest.json                 # Manifesto do PWA (nome, ícone, tema, orientação)
├── sw.js                         # Service Worker — cache offline de todos os assets
├── icon.png                      # Ícone do app (512x512px, purpose: any maskable)
│
└── FerramentasFontes/            # Pasta de referências e materiais-fonte utilizados na pesquisa
```

### Fluxo de Dados

```
index.html
  ├── Carrega styles.css (globais e tokens do design system)
  ├── Carrega LeiOraganicaIracemapolis.js → define window.leiCompleta[]
  ├── Carrega data.js → define window.summaries[] e window.quizDb[]
  └── Carrega app.js → lê templates HTML, monta SPA, consome summaries/quizDb/leiCompleta
```

---

## 🔬 Funcionalidades Detalhadas

### Aba: Resumos

**Arquivo de template**: `index.html` → `<template id="tpl-summaries">`  
**Função de inicialização**: `app.js` → `initSummaries()`

- **Filtro por Chips horizontais (scrollable)**: permite filtrar por matéria:
  - `Todas as Matérias` (padrão)  
  - `⚕️ Específicos` — Conteúdo da área de saúde (SUS, ACS, Epidemiologia)
  - `🇧🇷 Português` — Gramática e interpretação
  - `➗ Matemática` — Raciocínio lógico e cálculos
  - `🏛️ Gerais` — Lei e história de Iracemápolis

- **Cards Accordion (expandir/recolher)**: cada resumo é um card clicável que expande para revelar o conteúdo rico:
  - Conteúdo HTML completo (listas, tabelas de exemplo, imagens didáticas externas, blocos de exemplo formatados)
  - Badge de relevância ("alta" = vermelho-alaranjado, "baixa" = verde-acinzentado)
  
- **Subtítulo dinâmico**: um texto abaixo do título muda ao filtrar, descrevendo a matéria ativa.

- **Sem estado externo**: ao trocar de chip o `currentSubject` global é atualizado e `initSummaries()` é chamado novamente, re-renderizando apenas a lista filtrada.

---

### Aba: Simulados (Quiz)

**Arquivo de template**: `index.html` → `<template id="tpl-quiz">`  
**Função de inicialização**: `app.js` → `initQuiz()`

#### Motor do Quiz

1. **Pool de questões filtrado**: ao iniciar, o quiz filtra `quizDb` (≥ 44 questões) pelo chip ativo:
   - `all` → usa todo o banco (mistura de todas as matérias)
   - `especificos`, `portugues`, `matematica`, `gerais` → filtra por `q.subject`
   
2. **Embaralhamento e seleção**: `[...pool].sort(() => 0.5 - Math.random()).slice(0, 10)` — sorteia e seleciona até 10 questões.

3. **Estrutura de dados de uma questão**:
   ```javascript
   {
     id: "q_m1",
     subject: "matematica",        // filtro de matéria
     question: "Texto da questão", // exibido como h3
     options: ["A", "B", "C", "D"], // 4 alternativas
     correctIndex: 2,              // índice 0-based da resposta correta
     explanation: "Texto explicativo após resposta"
   }
   ```

4. **Ciclo de uma questão**:
   - `showQuestion()` renderiza a pergunta e os 4 botões de opção
   - Clicar numa opção chama `handleAnswer(selectedIndex, btn, optsDiv)`
   - Todos os botões são desabilitados imediatamente (evita duplo clique)
   - O botão correto recebe classe `.correct` (fundo verde-teal), o errado recebe `.wrong` (fundo vermelho)
   - `showFeedback(isCorrect, text)` exibe o card de feedback (verde/vermelho) com explicação
   - `nextQuestion()` é chamado pelo botão "Próxima Questão" → se acabar, chama `showResult()`

5. **Barra de progresso animada**: `width: ${(currentIndex / total) * 100}%` com transição CSS suave

6. **Tela de resultado final** (`showResult()`):
   - Percentual correto exibido no "score circle"
   - Mensagem contextualizada: 100% → "Gabaritou!", ≥70% → "Ótimo desempenho!", <70% → "Precisa estudar mais."
   - Som de fanfarra (Web Audio API) ao terminar

#### Painel de Desempenho (Accordion M3)

- Sempre visível no topo da tela de Simulados (estado accordion independente do quiz)
- Exibe: **Acertos**, **Erros**, **Precisão Geral** (%)
- **Mini badge**: resumo inline `X ✔ Y ✖ Z%` visível mesmo com accordion fechado
- **Botão "Zerar Estatísticas"**: limpa `appState.stats` e localStorage após confirmação com `confirm()`
- Estatísticas persistem entre sessões via `localStorage.getItem('agentHealthStats')`

---

### Aba: A Cidade

**Arquivo de template**: `index.html` → `<template id="tpl-cidade">`  
**Renderização**: Conteúdo estático embutido no template (sem função de inicialização dedicada)

- **Hero image**: foto aérea de Iracemápolis hospedada no domínio `refugiosnointerior.com.br` (sem bloqueio CORS), com gradiente escurecido e sobretítulo "Iracemápolis — A Cidade Lábios de Mel"

- **Grade IBGE (2×2 grid)**: 4 cards com dados oficiais do Censo 2022:
  - População: **21.967 habitantes**
  - IDH: **0,776 (Alto)**
  - Área Territorial: **115,1 km²**
  - Densidade: **190,82 hab/km²**

- **História Completa** (6 blocos narrativos sequenciais, fonte: Portal de Serviços de Iracemápolis e IBGE):
  1. **O Começo e o Bate-Pau** — Fundação em 1891 como Santa Cruz da Boa Vista; apelido vem da dança de escravos no Morro Azul
  2. **Lábios de Mel** — Etimologia: "Iracema" (tupi = lábios de mel) + "polis" (grego = cidade); gentílico correto é "iracemapolitano"
  3. **A Década de 1910 e os Pioneiros** — Primeira escola (1912, Profª Constantina Vaz), primeiro telefone (1911), Farmácia Veado (1915), primeiro armazém (1916)
  4. **Crescimento Econômico** — Família Ometto (1918), energia elétrica, elevação a Distrito de Paz em 1923 (Gov. Washington Luís, Lei nº 1.931)
  5. **Costumes, Progresso e a Usina Iracema** — Cartório (1924), Cia Industrial e Agrícola Ometto (1937), curso de alfabetização de adultos (Prof. José Chinellato)
  6. **Enfim, a Emancipação!** — Paulo Aparecido Simões como figura central; Lei nº 2.456 de 31/12/1953; instalação em 01/01/1954

---

### Aba: A Lei

**Arquivo de template**: `index.html` → `<template id="tpl-lei">`  
**Função de inicialização**: `app.js` → `initLei()`

#### Busca em Tempo Real
- Campo de busca com ícone `🔍` (estilo M3 search bar)
- `input.addEventListener('input', ...)` → chama `renderBlocks(filterText)` a cada keystroke
- Filtra no array `leiCompleta[]` por substring case-insensitive
- Limita a 150 resultados quando há filtro ativo (evita travar a UI com buscas amplas)

#### Renderização Hierárquica Inteligente

A função `renderBlocks()` itera sobre `leiCompleta[]` e aplica classes visuais diferentes conforme o conteúdo:

| Prefixo da linha | Classe CSS | Apresentação visual |
|---|---|---|
| `TÍTULO` | `.lei-titulo` | Fundo verde escuro (--primary), texto branco, rótulo "TÍTULO" acima |
| `CAPÍTULO` | `.lei-capitulo` | Fundo verde claro (--primary-container), rótulo "CAPÍTULO" acima |
| `Seção` | `.lei-secao` | Itálico, sem fundo, linha separadora inferior |
| `Art.` | `.destaque` | Fundo secondary-container, texto em negrito |
| Demais linhas | `.lei-block` | Texto padrão, borda sutil |

**Mesclagem de Linhas (merge inteligente)**: quando uma linha TÍTULO/CAPÍTULO/Seção é seguida por uma linha descritiva (ex: "DA ORGANIZAÇÃO MUNICIPAL"), as duas são mescladas num único bloco visual com rótulo + nome descritivo, suprimindo o bloco separado da próxima linha via `skipNext = true`.

#### Índice Estrutural (Accordion M3)
- Construído automaticamente na primeira renderização iterando `leiCompleta[]`
- Lista todos os TÍTULOS e CAPÍTULOs com seus nomes descritivos
- Títulos: em verde/negrito; Capítulos: com `•` prefixo, recuados
- Clique em qualquer item: limpa o filtro de busca, re-renderiza todos os blocos e faz scroll suave até o bloco correspondente usando `getBoundingClientRect().top + window.pageYOffset - 90`

#### FAB (Floating Action Button)
- Botão flutuante "↑ Voltar ao Topo" aparece apenas nas abas "A Lei" e "A Cidade" quando `window.scrollY > 300`
- Animação CSS: `.fab.hidden { opacity: 0; transform: translateY(20px); }`
- Implementado com `window.addEventListener('scroll', ...)` no evento DOMContentLoaded

---

## 🎨 Design System — Material Design 3

O arquivo `styles.css` implementa um design system completo baseado nas diretrizes do **Material Design 3 (M3)** da Google, adaptado com uma paleta personalizada **sage/verde-salva**.

### Paleta de Cores (`:root`)

```css
/* Modo Claro */
--primary:            #296a57;  /* Verde musgo principal */
--on-primary:         #ffffff;
--primary-container:  #b0f1d8;  /* Verde claro / mint */
--on-primary-container: #002015;

--secondary:          #4b635a;
--secondary-container: #cde8de;
--on-secondary-container: #072018;

--error:              #ba1a1a;
--error-container:    #ffdad6;
--on-error-container: #410002;

--surface:            #fbfdf9;  /* Branco levemente verde */
--on-surface:         #191c1b;
--surface-variant:    #dbe5df;
--outline:            #6f7975;
--outline-variant:    #bfc9c4;
```

### Dark Mode (`[data-theme="dark"]`)

Ativado via `data-theme="dark"` no `<body>`. Preferência salva em `localStorage('agentHealthTheme')`.

```css
--primary:    #80d4bd;  /* Verde-água claro para fundo escuro */
--surface:    #191c1b;  /* Fundo quase-preto */
```

Transição suave entre temas: `body * { transition: background-color 0.4s ease, color 0.4s ease, ... }`

### Tokens de Forma

```css
--radius-small:  12px;
--radius-medium: 16px;
--radius-large:  24px;
--radius-full:   9999px; /* Pílula */
```

### Componentes Criados

| Componente | Seletor CSS | Descrição |
|---|---|---|
| Top App Bar | `.app-header` | Sticky, sombra sutil, logo + título + botão tema |
| Bottom Nav Bar | `.bottom-nav` | Fixed, 4 itens, indicador de seleção animado |
| Nav Indicator | `.nav-icon-container` | Pílula expandida com `bounceBubble` ao ativar |
| Chips de Filtro | `.chip`, `.chip.active` | Scrolláveis horizontalmente, sem scrollbar visível |
| Cards de Resumo | `.summary-card` | Accordion com toggle de ícone rotacionado |
| Cards de Quiz | `.option-btn` | Hover com translateY, feedback .correct/.wrong |
| Cards de Feedback | `.feedback-card.success/error` | Animação `slideUp`, ícone e texto contextual |
| Stats Accordion | `.stats-accordion` | `<details>/<summary>` nativo, seta rotacionada |
| Score Circle | `.score-circle` | Círculo 120px com porcentagem centralizada |
| Lei Block | `.lei-block` | Hierarquia visual para TÍTULO/CAPÍTULO/Seção/Art. |
| Search Bar | `.search-box` | Estilo M3 filled search bar |
| Hero da Cidade | `.cidade-hero` | Imagem com gradiente escurecido e texto sobreposto |
| Grade IBGE | `.ibge-grid` | 2 colunas com ícone, número e label |
| FAB | `.fab` | Botão flutuante fixo, 48px, `border-radius: 14px` |

### Animações

| Animação | Gatilho | Efeito |
|---|---|---|
| `viewTransition` | Toda troca de aba | `opacity 0 → 1` + `translateY(12px) → 0` + `scale(0.99 → 1)` |
| `popIn` | Cada card ao renderizar | `opacity 0 → 1` + `translateY(15px) → 0` + `scale(0.95 → 1)` |
| `popIn` staggered | Cards 1 a 4+ | Delays de 0.05s a 0.25s por ordem de aparição |
| `slideUp` | Card de feedback do quiz | `opacity 0 → 1` + `translateY(20px) → 0` |
| `bounceBubble` | Indicador de nav ativo | `scale(0.5) → scale(1.1) → scale(1)` (spring) |
| `fadeIn` | Accordion aberto | `opacity 0 → 1` simples |
| Theme icon | Clique no botão de tema | `rotate(180deg) scale(0.6)` no `:active` |

---

## 📚 Banco de Dados de Conteúdo (data.js)

**Tamanho**: 908 linhas / ~52 KB  
**Versão**: 2.0 — Expansão massiva de Matemática e Português

O arquivo define duas constantes globais:

### `summaries[]` — Resumos de Estudo

Array de objetos com estrutura:
```javascript
{
  id: "string",         // ID único (ex: "esp_sus", "por_crase", "mat_juros")
  subject: "string",    // Matéria: "especificos" | "portugues" | "matematica" | "gerais"
  title: "string",      // Título exibido no card (ex: "Princípios do SUS")
  content: `HTML`,      // HTML completo com h3, ul, li, div estilizados, imagens externas
  relevance: "string"   // "alta" | "baixa" (impacta no badge de cor do card)
}
```

**Distribuição de resumos** (total: 16 resumos):

| Matéria | Qtd | Tópicos principais |
|---|---|---|
| `especificos` | 3 | Princípios do SUS (UIE + Diretrizes), Atribuições do ACS (Lei 11.350), Vigilância Epidemiológica |
| `gerais` | 4 | Fundação e Nomes Antigos (1891–1918), Pioneiros e Primeiros Feitos, Significado do Nome e Dados IBGE, A Emancipação |
| `portugues` | 5 | Regras de Crase com imagem, 4 Porquês completo, Concordância Verbal, Conjunções e Conectivos (Mapa Mental), Interpretação Textual |
| `matematica` | 5 | Regra de Três (Direta/Inversa) com imagem, Porcentagem + Fator Multiplicador com imagem, Juros Simples (J=C×i×t), Média/Moda/Mediana, Probabilidade Simples |

---

### `quizDb[]` — Banco de Questões do Simulado

Array de objetos com estrutura:
```javascript
{
  id: "string",          // ID único (ex: "q_esp1", "q_m7", "q_p14")
  subject: "string",     // Matéria: "especificos" | "gerais" | "portugues" | "matematica"
  question: "string",    // Enunciado completo da questão
  options: ["A","B","C","D"], // Exatamente 4 alternativas
  correctIndex: 0,       // Índice 0-based da resposta correta
  explanation: "string"  // Explicação exibida no feedback após responder
}
```

**Distribuição de questões** (total: 44 questões):

| Matéria | Qtd | Exemplos de tópicos |
|---|---|---|
| `especificos` | 5 | Atribuições do ACS, Princípios do SUS, Residência obrigatória, Notificação compulsória, Endemia/Epidemia/Pandemia |
| `gerais` | 6 | Lei Orgânica, Nome e apelido antigo, Ano de emancipação, Ano de elevação a Distrito, Primeiro prefeito, População IBGE |
| `portugues` | 16 | Crase, 4 Porquês, Haver impessoal, Conjunções, Pronome relativo "cuja", Pontuação, Consequência (tão...que), Sinônimos, Fazer impessoal, Concessão, Prefixos, Sinonímia contextual, Referência pronominal, Ortografia, Figuras de linguagem (Metáfora), Concordância nominal |
| `matematica` | 17 | Regra de 3 inversa, Desconto, Divisão, Média simples, Soma tabela, Porcentagem, Aumento salarial, Juros simples, Porcentagem (60%), Sequência aritmética, Probabilidade, Aumentos sucessivos, Regra de 3 direta, Mediana, Regra de 3 (casas×dias), Moda, Juros (encontrar capital) |

---

## ⚖️ Lei Orgânica na Íntegra (LeiOraganicaIracemapolis.js)

**Tamanho**: 1014 linhas / ~140 KB — o maior arquivo do projeto.  
**Conteúdo**: Transcrição integral da **Lei Orgânica do Município de Iracemápolis** com todas as emendas até a **Emenda nº 27, de 2024**.

Define a constante global:
```javascript
const leiCompleta = [ "linha1", "linha2", ... ]; // Array de strings
```

### Estrutura da Lei Orgânica

| Divisão | Conteúdo principal |
|---|---|
| **PREÂMBULO** | Propósito democrático e promulgação |
| **TÍTULO I** — Da Organização Municipal | Competência privativa, comum e suplementar do Município; vedações tributárias |
| **TÍTULO II** — Das Organizações dos Poderes | Câmara Municipal (composição, sessões, vereadores, processo legislativo, fiscalização orçamentária); Executivo (Prefeito, Vice, atribuições, perda de mandato, servidores públicos) |
| **TÍTULO III** — Da Organização Administrativa | Estrutura administrativa, atos municipais, bens municipais, obras e serviços, tributação e finanças, orçamento |
| *(Títulos seguintes)* | Saúde, Educação, Meio Ambiente, Assistência Social e demais políticas públicas |

### Por que é um array de strings?
Cada elemento do array corresponde a um "parágrafo" ou linha do documento legal. Isso permite ao motor de renderização do `app.js` analisar o prefixo de cada linha (`startsWith('TÍTULO')`, `startsWith('Art.')`) e aplicar formatação visual hierárquica sem precisar de um parser HTML complexo.

---

## ⚙️ Lógica da Aplicação (app.js)

**Tamanho**: 571 linhas / ~21 KB

### Estado Global

```javascript
const appState = {
    currentView: 'summaries',  // View ativa: 'summaries' | 'quiz' | 'lei' | 'cidade'
    quiz: {
        questions: [],          // Questões sorteadas para o simulado atual
        currentIndex: 0,        // Índice da questão sendo exibida
        score: 0                // Acertos no simulado atual
    },
    stats: {
        correct: 0,             // Acertos históricos (persistido)
        wrong: 0                // Erros históricos (persistido)
    }
};

let currentSubject = 'all';    // Chip de filtro ativo ('all' | 'especificos' | ...)
```

### Web Audio API — Feedback Sonoro

A função `playSound(type)` usa a **Web Audio API** para sintetizar sons em tempo real (sem arquivos de áudio externos):

| Tipo | Onda | Frequências | Duração | Vibração |
|---|---|---|---|---|
| `'tick'` | `sine` | 600 → 300 Hz | 100ms | 15ms |
| `'correct'` | `sine` | 523 → 659 Hz (Dó-Mi) | 500ms | `[30, 50, 30]` |
| `'wrong'` | `sawtooth` | 150 → 80 Hz | 300ms | `[150]` |
| `'finish'` | `triangle` | 440→554→659→880 Hz (Lá→Dó#→Mi→Lá oitava) | 800ms | `[50,50,50,50,200]` |

### Ciclo de Navegação

```
Clique no botão do Bottom Nav
  ↓
setupNavigation() → atualiza .active, chama renderView(target)
  ↓
renderView(view)
  → appContent.innerHTML = templates[view]  (injeta o template no DOM)
  → currentSubject = 'all'                  (reseta filtro)
  → bindChips()                             (re-registra events nos chips)
  → initSummaries() | initQuiz() | initLei() (inicializa a view)
```

### Persistência de Dados

| Dado | Chave localStorage | Estrutura |
|---|---|---|
| Tema | `agentHealthTheme` | `"dark"` ou ausente |
| Estatísticas | `agentHealthStats` | `{"correct": N, "wrong": N}` |

---

## 💅 Estilo e Animações (styles.css)

**Tamanho**: 506 linhas / ~19 KB

Destaques técnicos do CSS:

- **CSS Custom Properties** (variáveis) para todo o design system — facilita dark mode total com apenas um `[data-theme="dark"]`
- **`transition` global** em `body *` para troca suave de tema em todos os elementos
- **`@keyframes` staggered** com `nth-child` para animar cards sequencialmente ao renderizar listas
- **`scrollbar-width: none`** + `overflow-x: auto` nos chips para scroll horizontal sem scrollbar visual
- **`position: sticky`** no header e **`position: fixed`** no nav e FAB para layout mobile correto
- **`max-width: 600px`** no `#app-content` e `.header-content` para leitura confortável em tablets
- **`padding-bottom: calc(var(--nav-height) + 20px)`** no body para o conteúdo nunca ficar sob o nav fixo
- **`cubic-bezier(0.34, 1.56, 0.64, 1)`** nas animações de "spring" (ultrapassam antes de assentar)

---

## 📲 PWA — Progressive Web App

O app é instalável como aplicativo nativo em dispositivos Android (e iOS com limitações) graças a:

### `manifest.json`
```json
{
  "name": "Estudo: Agente de Saúde",
  "short_name": "AgenteSaúde",
  "description": "App gamificado para concurso público",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#fbfdf9",
  "theme_color": "#296a57",
  "orientation": "portrait",
  "icons": [{ "src": "./icon.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }]
}
```

### `sw.js` — Service Worker (Cache v2)

**Estratégia**: Cache-First (retorna do cache se disponível, senão busca na rede)

**Arquivos cacheados na instalação**:
```javascript
const urlsToCache = [
  './', './index.html', './styles.css', './app.js',
  './data.js', './LeiOraganicaIracemapolis.js', './icon.png', './manifest.json'
];
```

Isso garante que **o app funciona completamente offline** após a primeira visita, incluindo toda a Lei Orgânica e todos os resumos/questões.

> ⚠️ Imagens externas (Toda Matéria, Brasil Escola) e fontes do Google/Font Awesome requerem conexão.

---

## 📖 Conteúdo Pedagógico Coberto

### 🏥 Conhecimentos Específicos (ACS)
- Princípios Doutrinários do SUS: **Universalidade, Integralidade, Equidade**
- Diretrizes Organizativas (Art. 198 CF): **Descentralização, Atendimento Integral, Participação da Comunidade**
- Participação social: **Lei 8.142** (Conselhos e Conferências de Saúde)
- **Lei 11.350** — Atribuições exclusivas do ACS (visitas domiciliares, cadastramento, acompanhamento de grupos)
- **Pré-requisito de residência** na microárea de atuação desde a data de publicação do edital
- **Vigilância Epidemiológica**: conceito, Notificação Compulsória, distinção Endemia × Epidemia × Pandemia

### 🏛️ Conhecimentos Gerais (Iracemápolis)
- Fundação em **1891** como Santa Cruz da Boa Vista / "Bate Pau"
- Marcos históricos: 1911 (telefone), 1912 (escola), 1915 (farmácia), 1916 (armazém), 1918 (Ometto + eletricidade)
- Elevação a **Distrito de Paz em 1923** (Gov. Washington Luís, Lei nº 1.931)
- Etimologia: "Iracema" (lábios de mel — Tupi) + "polis" (cidade — Grego) → gentílico "iracemapolitano"
- Companhia Industrial e Agrícola Ometto (1937) — Usina Iracema
- **Emancipação: Lei Estadual nº 2.456 de 31/12/1953** → instalação em 01/01/1954
- Primeiro prefeito: **José Chinellato**
- Dados IBGE 2022: **21.967 hab.**, IDH **0,776**, área **115,1 km²**, densidade **190,82 hab/km²**
- **Lei Orgânica do Município**: íntegra completa com todas as emendas até 2024

### 🇧🇷 Língua Portuguesa
- Regras de **Crase** (quando usar/não usar) com imagens didáticas
- Os **4 Porquês** (por que / por quê / porque / porquê) com macetes
- **Concordância Verbal**: verbos impessoais (Haver/Fazer), sujeito composto, coletivos
- **Conjunções e Conectivos**: adição, oposição, conclusão, causa, consequência, concessão
- **Interpretação Textual**: ideia central, inferência, intenção do autor, sinonímia, referência pronominal; armadilhas de banca
- **Pontuação** (uso correto da vírgula)
- **Pronome relativo** "cuja/cujo" (indicação de posse)
- **Figuras de linguagem** (Metáfora, Hipérbole, Antítese, Eufemismo)
- **Prefixos** (pré-, pós-, hiper-, sub-, anti-)
- **Concordância nominal** (gênero e número)
- **Ortografia** (exceção × "excessão")

### ➗ Matemática e Raciocínio
- **Regra de Três Simples**: Direta e Inversa (com exemplos contextualizados de saúde)
- **Porcentagem**: cálculo mental rápido (10%/5%/20%/25%/50%), Fator Multiplicador, Descontos Sucessivos
- **Juros Simples**: J = C × i × t, M = C + J — encontrar qualquer variável
- **Média, Moda, Mediana**: definição, cálculo e quando usar cada uma
- **Probabilidade Simples**: P(A) = casos favoráveis / casos possíveis, eventos complementares
- **Sequência Aritmética**: identificação de razão e próximo termo
- **Divisão e problemas contextualizados** (vacinas, pacientes, máscaras)

---

## 📅 Histórico de Desenvolvimento

| Data | Conversação | Desenvolvimento |
|---|---|---|
| 30/03/2026 | `0a3229e1` | **Criação do app** — estrutura inicial da SPA, design M3 base, primeiros resumos e questões de Específicos e Gerais |
| 30/03/2026 | `72c293e7` | **Hotfix** — correção de erro de sintaxe "Invalid character" em `app.js` linha 162 (template literals com backticks) |
| 30/03/2026 | `dc13b7ce` | **Refatoração da Lei Orgânica** — implementação do índice estrutural dinâmico, hierarquia visual TÍTULO/CAPÍTULO/Seção, sistema de merge de linhas; **correção do mapeamento do quiz** (`correctIndex` vs propriedade incorreta); **expansão massiva do banco** com 16 questões de Português (v1→v16) e 17 de Matemática |

---

## 🚀 Como Executar Localmente

Como o projeto não usa nenhum build tool ou framework, basta:

**Opção 1 — Abrir diretamente (sem Service Worker)**:
```
Abrir index.html no navegador
```
> Note: o Service Worker pode não registrar em `file://`. Para funcionalidade PWA completa, use um servidor local.

**Opção 2 — Servidor local simples (com suporte a PWA)**:
```bash
# Com Python 3
python -m http.server 8080

# Depois abrir: http://localhost:8080
```

**Opção 3 — VS Code Live Server**:
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html` → "Open with Live Server"

**Não há nenhuma dependência de instalação** (`npm install`, `pip install`, etc.) — todos os recursos externos (fontes, ícones) são carregados via CDN.

---

## 🔮 Melhorias Futuras

- [ ] **Spaced Repetition real**: marcar questões erradas com peso maior no sorteio futuro
- [ ] **Modo Flashcard**: exibir apenas o título e o usuário tenta responder antes de revelar
- [ ] **Mais questões de Gerais/Específicos**: expandir banco para ≥ 10 questões por matéria
- [ ] **Temporizador de Prova**: modo cronômetro com tempo máximo por simulado
- [ ] **Histórico de sessões**: ver as últimas N sessões com quais matérias foram praticadas
- [ ] **Busca nos Resumos**: campo de busca também na aba de Resumos
- [ ] **Marcadores/Favoritos**: marcar cards de resumo para revisão posterior
- [ ] **Correção do typo no nome do arquivo**: `LeiOraganicaIracemapolis.js` → `LeiOrganicaIracemapolis.js`
- [ ] **Suporte a iOS PWA**: atualizar `manifest.json` com `apple-touch-icon` e `apple-mobile-web-app-capable`

---

## 📄 Licença e Fontes

| Conteúdo | Fonte |
|---|---|
| Lei Orgânica de Iracemápolis | Portal de Serviços de Iracemápolis (www.iracemapolis.sp.gov.br) |
| História da Cidade | Portal de Serviços de Iracemápolis |
| Dados populacionais | IBGE — Censo 2022 |
| Imagem de crase | Toda Matéria (static.todamateria.com.br) |
| Imagem de porcentagem/juros | Brasil Escola (brasilescola.uol.com.br) |
| Brasão | DWPT CloudFront (dwpt1kkww6vki.cloudfront.net) |
| Foto aérea da cidade | Refúgios no Interior (refugiosnointerior.com.br) |
| Tipografia | Google Fonts — Roboto |
| Ícones | Font Awesome v6.0.0 |

---

*Desenvolvido para uso pessoal de estudo. Conteúdo baseado no Edital 001/2026 do Município de Iracemápolis — SP.*
