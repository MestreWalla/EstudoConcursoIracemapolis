/* Banco de Dados: Agente Comunitário de Saúde - Edital 001/2026 */
/* Versão 2.0 — Expansão massiva de Matemática e Português */

// GERAIS = 'gerais'
// ESPECIFICOS = 'especificos'
// PORTUGUES = 'portugues'
// MATEMATICA = 'matematica'

const summaries = [
    // ─── ESPECÍFICOS ───────────────────────────────────────────────────
    {
        id: "esp_sus",
        subject: "especificos",
        title: "Princípios do SUS",
        content: `
            <h3>Princípios Doutrinários</h3>
            <ul>
                <li><strong>Universalidade</strong>: Todo cidadão tem direito ao SUS.</li>
                <li><strong>Integralidade</strong>: Atendimento completo: prevenção, cura e reabilitação.</li>
                <li><strong>Equidade</strong>: Dar mais a quem precisa mais — tratar diferente os desiguais.</li>
            </ul>
            <h3>Diretrizes Organizativas (Art. 198 CF)</h3>
            <ul>
                <li><strong>Descentralização</strong>: Direção única em cada esfera de governo.</li>
                <li><strong>Atendimento Integral</strong>: Prioridade para atividades preventivas.</li>
                <li><strong>Participação da Comunidade</strong>: Através dos Conselhos e Conferências (Lei 8.142).</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "esp_acs",
        subject: "especificos",
        title: "Atribuições do ACS (Lei 11.350)",
        content: `
            <p>O <strong>Agente Comunitário de Saúde</strong> tem como atribuição o exercício de atividades de prevenção de doenças e promoção da saúde, mediante ações domiciliares ou comunitárias.</p>
            <ul>
                <li>Visitas domiciliares periódicas e <strong>exclusivas na área de atuação</strong>.</li>
                <li>Cadastramento de todas as pessoas da microárea.</li>
                <li>Acompanhamento de gestantes, idosos e doentes crônicos.</li>
                <li><strong>Pré-requisito obrigatório</strong>: residir na área de atuação desde a data de publicação do edital.</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "esp_epi",
        subject: "especificos",
        title: "Vigilância Epidemiológica",
        content: `
            <p>É o conjunto de ações que proporcionam conhecimento da evolução de qualquer doença.</p>
            <ul>
                <li><strong>Notificação Compulsória</strong>: Obrigação legal de comunicar aos governos os casos suspeitos (ex: Dengue, Sarampo, Covid-19).</li>
                <li><strong>Endemia</strong>: Doença constante numa região (ex: malária no AM).</li>
                <li><strong>Epidemia</strong>: Aumento súbito de casos numa região.</li>
                <li><strong>Pandemia</strong>: Epidemia em múltiplos países/continentes.</li>
            </ul>
        `,
        relevance: "alta"
    },

    // ─── GERAIS ────────────────────────────────────────────────────────
    {
        id: "ger_hist_origem",
        subject: "gerais",
        title: "Fundação e Nomes Antigos",
        content: `
            <p>Considera-se o ano de <strong>1891 como a fundação</strong> do povoado de <strong>Santa Cruz da Boa Vista</strong>, apelidado de <strong>"Bate Pau"</strong> (dança de escravos no Morro Azul).</p>
            <ul>
                <li><strong>1911:</strong> Primeiro telefone — Seu Barretinho e Sinhá Silveira.</li>
                <li><strong>1912:</strong> Primeira escola, com a professora Dona Constantina Vaz.</li>
                <li><strong>1915:</strong> Família Simões inaugura a "Farmácia Veado".</li>
                <li><strong>1916:</strong> Primeiro armazém de secos e molhados.</li>
                <li><strong>1918:</strong> Família Ometto traz energia elétrica com a Fazenda Aparecida.</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "ger_hist_pioneiros",
        subject: "gerais",
        title: "Pioneiros e Primeiros Feitos",
        content: `
            <ul>
                <li><strong>Gaudino Gonçalves de Lima:</strong> Em 1930, reivindicou o Cemitério Municipal (terreno doado por José Levy).</li>
                <li><strong>José Chinellato:</strong> Primeiro professor de adultos (1937) e o <u>primeiro prefeito</u> da cidade.</li>
                <li><strong>Dona Quininha e Eunice (1924):</strong> Protagonistas do primeiro casamento registrado no cartório.</li>
                <li><strong>Humberto Ferreira (1924):</strong> Primeiro registro de nascimento no Cartório Municipal.</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "ger_hist_nome",
        subject: "gerais",
        title: "Significado do Nome e Dados IBGE",
        content: `
            <p>Em 1923, o Governador Washington Luís eleva o local a Distrito de Paz, chamado <strong>Iracemápolis</strong>.</p>
            <ul>
                <li><strong>Iracema:</strong> Lábios de mel (língua indígena Tupi).</li>
                <li><strong>Polis:</strong> Cidade (grego). Gentílico correto: <em>Iracemapolitano</em>.</li>
            </ul>
            <h3>Dados IBGE 2022</h3>
            <ul>
                <li>População: <strong>21.967 habitantes</strong></li>
                <li>IDH: <strong>0,776</strong> (Alto)</li>
                <li>Área: <strong>115,1 km²</strong> — Densidade: 190,82 hab/km²</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "ger_hist_emancipacao",
        subject: "gerais",
        title: "A Emancipação",
        content: `
            <p>Com o crescimento focado na Usina (Cia Industrial e Agrícola Ometto, 1937), o vereador limeirense <strong>Paulo Aparecido Simões</strong> lutou pela independência.</p>
            <ul>
                <li><strong>Lei de Emancipação (Nº 2.456):</strong> 31 de dezembro de 1953.</li>
                <li><strong>Instalação Oficial:</strong> 1º de janeiro de 1954 — desmembrada de Limeira.</li>
                <li>O Grupo Escolar foi inaugurado em <strong>1944</strong>, depois chamado de "Antonio Cândido de Camargo".</li>
            </ul>
        `,
        relevance: "alta"
    },

    // ─── PORTUGUÊS ─────────────────────────────────────────────────────
    {
        id: "por_crase",
        subject: "portugues",
        title: "Regras de Crase (À) — Com Imagem",
        content: `
            <img src="https://static.todamateria.com.br/upload/cr/as/crasedica1-cke.jpg" alt="Dica visual de crase" style="width:100%;border-radius:8px;margin-bottom:12px;">
            <h3>🟢 Quando USAR a Crase</h3>
            <p>A crase ocorre quando a preposição <strong>"a"</strong> se funde com o artigo <strong>"a"</strong> ou com o pronome demonstrativo <strong>"a/aquele/aquele"</strong>. O truque clássico é substituir por palavra masculina: se ficar "ao", usa crase; se ficar "a" simples, não usa.</p>
            <ul>
                <li>✅ "Vou <strong>à</strong> farmácia." → "Vou ao posto." (ficou "ao" → usa crase)</li>
                <li>✅ Locuções adverbiais femininas: <strong>às vezes, à toa, à noite, à tarde, à espera</strong></li>
                <li>✅ Locuções prepositivas: "<strong>à</strong> medida que", "<strong>à</strong> frente de", "<strong>à</strong> beira de"</li>
            </ul>
            <h3>🔴 Quando NÃO usar a Crase</h3>
            <ul>
                <li>❌ Antes de palavras <strong>masculinas</strong>: "andar <strong>a</strong> pé", "ir <strong>a</strong> prego"</li>
                <li>❌ Antes de <strong>verbos</strong>: "começar <strong>a</strong> cantar", "aprender <strong>a</strong> ler"</li>
                <li>❌ Entre palavras <strong>repetidas</strong>: "dia <strong>a</strong> dia", "cara <strong>a</strong> cara"</li>
                <li>❌ Antes de <strong>pronomes</strong>: "referi-me <strong>a</strong> ela", "entreguei <strong>a</strong> você"</li>
                <li>❌ Antes de cidades <strong>sem artigo</strong>: "fui <strong>a</strong> Brasília", "fui <strong>a</strong> Campinas" (mas: fui <strong>à</strong> Bahia — pois "a Bahia" leva artigo)</li>
            </ul>
            <img src="https://static.todamateria.com.br/upload/di/ca/dicadecrase-cke.jpg" alt="Dicas rápidas de crase" style="width:100%;border-radius:8px;margin-top:12px;">
        `,
        relevance: "alta"
    },
    {
        id: "por_ort",
        subject: "portugues",
        title: "Uso dos Porquês — Guia Completo",
        content: `
            <p>Os 4 porquês são uma das maiores "pegadinhas" de concursos. A lógica é simples: <strong>pergunta ou resposta?</strong></p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:12px 0;">
                <p>🔵 <strong>Por que</strong> (2 palavras, SEM acento) → <em>Pergunta no início/meio</em> OU equivale a "pelo qual":<br>
                <em>"Por que você não foi à reunião?"</em><br>
                <em>"O motivo por que faltou foi a chuva."</em> (= pelo qual)</p>
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:12px 0;">
                <p>🟣 <strong>Por quê</strong> (2 palavras, COM acento) → <em>Pergunta no FINAL da frase</em>:<br>
                <em>"Você não foi à reunião por quê?"</em><br>
                <em>"Isso aconteceu por quê?"</em></p>
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:12px 0;">
                <p>🟢 <strong>Porque</strong> (1 palavra, SEM acento) → <em>Resposta/causa/explicação</em>:<br>
                <em>"Não fui porque estava doente."</em><br>
                <em>"Fiz isso porque era necessário."</em></p>
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:12px 0;">
                <p>🟡 <strong>Porquê</strong> (1 palavra, COM acento) → <em>Substantivo = "o motivo"</em>. Vem sempre após artigo:<br>
                <em>"Não entendo o <strong>porquê</strong> dessa decisão."</em><br>
                <em>"Existe um <strong>porquê</strong> para tudo."</em></p>
            </div>
            <p>💡 <strong>Macete Ninja:</strong> Tente substituir por "o motivo". Se der certo → é <strong>porquê</strong> (substantivo). Se puder trocar por "pois" → é <strong>porque</strong>. Se for pergunta no fim → <strong>por quê</strong>.</p>
        `,
        relevance: "alta"
    },
    {
        id: "por_concordancia",
        subject: "portugues",
        title: "Concordância Verbal — Armadilhas de Concurso",
        content: `
            <h3>⚠️ Verbos Impessoais — SEMPRE no singular!</h3>
            <p>Esses verbos <strong>não têm sujeito</strong>, portanto nunca concordam com nenhum substantivo:</p>
            <div style="background:var(--error-container);color:var(--on-error-container);border-radius:8px;padding:12px;margin:8px 0;">
                ❌ ERRADO: "Haviam muitas crianças no posto."<br>
                ✅ CERTO: "Havia muitas crianças no posto."
            </div>
            <div style="background:var(--error-container);color:var(--on-error-container);border-radius:8px;padding:12px;margin:8px 0;">
                ❌ ERRADO: "Fazem dois anos que trabalho aqui."<br>
                ✅ CERTO: "Faz dois anos que trabalho aqui."
            </div>
            <ul>
                <li><strong>Haver</strong> (existir): sempre singular → "Havia, Haverá, Haveria, Haja"</li>
                <li><strong>Fazer</strong> (tempo decorrido): sempre singular → "Faz, Fazia, Fez"</li>
                <li>Atenção: "Há" (existe) ≠ "Há" (faz tempo). Ambos são impessoais!</li>
            </ul>
            <h3>🔀 Sujeito Composto</h3>
            <ul>
                <li>Sujeito <strong>antes</strong> do verbo → verbo no <strong>plural</strong>: "O médico e a enfermeira <strong>chegaram</strong>."</li>
                <li>Sujeito <strong>depois</strong> do verbo → pode ficar no <strong>singular</strong>: "<strong>Chegou</strong> o médico e a enfermeira."</li>
                <li>Sujeitos com "ou" (exclusão) → singular: "João <em>ou</em> Maria <strong>será</strong> chamado."</li>
            </ul>
            <h3>👥 Coletivos e Partitivos</h3>
            <ul>
                <li>"A maioria dos pacientes <strong>chegou</strong>." (singular — sujeito = maioria)</li>
                <li>"A maioria dos pacientes <strong>chegaram</strong>." (tb aceito — concordância com o complemento)</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "por_conectivos",
        subject: "portugues",
        title: "Conjunções e Conectivos — Mapa Mental",
        content: `
            <p>Conectivos são o "cimento" do texto. As bancas testam se você sabe identificar a relação lógica e substituir sem alterar o sentido.</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>➕ ADIÇÃO</strong> (e, nem, não só...mas também, bem como)<br>
                Ex: "Vacinou os adultos <em>e também</em> as crianças."
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>⚡ OPOSIÇÃO/ADVERSIDADE</strong> (mas, porém, contudo, entretanto, todavia, no entanto)<br>
                Ex: "Estudou muito, <em>porém</em> não passou." — Todos são intercambiáveis!
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>✅ CONCLUSÃO</strong> (logo, portanto, então, assim, por isso, consequentemente)<br>
                Ex: "Estudou, <em>portanto</em> passou." — Vem sempre após a causa.
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>🔍 CAUSA</strong> (porque, pois, visto que, já que, uma vez que)<br>
                Ex: "Adoeceu <em>porque</em> não se vacinou."
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>💥 CONSEQUÊNCIA</strong> (que — com "tão/tanto", de modo que, de forma que)<br>
                Ex: "Correu tanto <em>que</em> desmaiou."
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>🤝 CONCESSÃO</strong> (embora, ainda que, mesmo que, apesar de que)<br>
                Ex: "<em>Embora</em> doente, trabalhou." (o fato contrário não impediu a ação)
            </div>
            <p>💡 <strong>Dica:</strong> Na prova, quando pedirem para "substituir a conjunção mantendo o sentido", identifique a relação lógica primeiro (oposição? causa? conclusão?) e depois escolha o sinônimo.</p>
        `,
        relevance: "alta"
    },
    {
        id: "por_interpretacao",
        subject: "portugues",
        title: "Interpretação Textual — Estratégias e Armadilhas",
        content: `
            <h3>📌 O que as bancas cobram</h3>
            <ul>
                <li><strong>Ideia Central (Tema):</strong> O assunto principal. Pergunte: "De que trata o texto?" Responda em uma frase.</li>
                <li><strong>Inferência:</strong> O que o texto <em>sugere</em> sem dizer explicitamente? Leia nas entrelinhas com cuidado.</li>
                <li><strong>Intenção do Autor:</strong> Persuadir (convencer)? Informar? Narrar (contar)? Instruir (ensinar a fazer)?</li>
                <li><strong>Sinonímia contextual:</strong> Qual palavra substitui X sem alterar o sentido? O "contexto" manda — não o dicionário.</li>
                <li><strong>Referência pronominal:</strong> O pronome "ele/ela/lhe/o" se refere a quem ou quê no texto?</li>
            </ul>
            <h3>🚨 Armadilhas Clássicas</h3>
            <div style="background:var(--error-container);color:var(--on-error-container);border-radius:8px;padding:12px;margin:8px 0;">
                ❌ Assertivas com "apenas", "somente", "nunca", "sempre", "todos" são frequentemente <strong>erradas</strong> — o texto raramente é tão absoluto.
            </div>
            <div style="background:var(--primary-container);color:var(--on-primary-container);border-radius:8px;padding:12px;margin:8px 0;">
                ✅ O gabarito sempre está no texto. Nunca leve conhecimento externo — mesmo que a alternativa seja "verdadeira" no mundo real, se o <em>texto não sustenta</em>, está errada.
            </div>
            <h3>📖 Tipos de Texto</h3>
            <ul>
                <li><strong>Narrativo:</strong> Conta uma história — há personagens, tempo, espaço.</li>
                <li><strong>Descritivo:</strong> Descreve características — adjetivos abundantes.</li>
                <li><strong>Dissertativo:</strong> Defende uma tese com argumentos — estrutura introdução/desenvolvimento/conclusão.</li>
                <li><strong>Injuntivo:</strong> Dá instruções — verbos no imperativo (bula de remédio, receita, manual do ACS).</li>
            </ul>
        `,
        relevance: "alta"
    },

    // ─── MATEMÁTICA ────────────────────────────────────────────────────
    {
        id: "mat_regra3",
        subject: "matematica",
        title: "Regra de Três — Direta e Inversa",
        content: `
            <img src="https://s2.static.brasilescola.uol.com.br/be/2021/04/regra-de-tres-simples.jpg" alt="Tabela regra de três simples" style="width:100%;border-radius:8px;margin-bottom:12px;">
            <h3>📐 O que é a Regra de Três?</h3>
            <p>Serve para encontrar um valor desconhecido quando se conhece a relação entre outras grandezas. Monte sempre uma tabela com as grandezas nas colunas.</p>
            <h3>🔵 Regra de Três Simples — DIRETA</h3>
            <p>Quando as duas grandezas <strong>crescem ou diminuem juntas</strong>:</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;font-family:monospace;">
                Exemplo: 5 vacinas custam R$50. Quanto custam 12 vacinas?<br><br>
                Vacinas → Custo<br>
                ___5___→_R$50<br>
                __12___→__X<br><br>
                Multiplica "em X" (cruzado): 5 × X = 12 × 50<br>
                5X = 600 → X = <strong>R$120,00</strong>
            </div>
            <h3>🔴 Regra de Três Simples — INVERSA</h3>
            <p>Quando uma grandeza cresce e a outra <strong>diminui</strong> (ex: mais trabalhadores = menos tempo):</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;font-family:monospace;">
                Exemplo: 10 agentes fazem o trabalho em 8h. Com 16 agentes?<br><br>
                Agentes → Horas<br>
                __10___→__8h<br>
                __16___→__X<br><br>
                Inverte uma coluna: 10 × 8 = 16 × X<br>
                80 = 16X → X = <strong>5 horas</strong>
            </div>
            <p>💡 <strong>Como saber se é direta ou inversa?</strong> Pergunte: "Se a primeira grandeza aumentar, a segunda vai aumentar também?" → SIM = direta | NÃO = inversa.</p>
        `,
        relevance: "alta"
    },
    {
        id: "mat_porcentagem",
        subject: "matematica",
        title: "Porcentagem — Do Zero ao Avançado",
        content: `
            <img src="https://static.todamateria.com.br/upload/57/21/57211c30d15e0-porcentagem.jpg" alt="Conceito de porcentagem" style="width:100%;border-radius:8px;margin-bottom:12px;">
            <h3>⚡ Cálculos Mentais Rápidos</h3>
            <ul>
                <li><strong>10%</strong> → Divida por 10 (mova vírgula 1 casa). Ex: 10% de 350 = 35</li>
                <li><strong>5%</strong> → Ache 10% e divida por 2. Ex: 5% de 350 = 17,5</li>
                <li><strong>20%</strong> → Ache 10% e multiplique por 2. Ex: 20% de 350 = 70</li>
                <li><strong>25%</strong> → Divida por 4. Ex: 25% de 200 = 50</li>
                <li><strong>50%</strong> → Divida por 2. Ex: 50% de 240 = 120</li>
                <li><strong>1%</strong> → Divida por 100 (mova vírgula 2 casas)</li>
            </ul>
            <img src="https://static.todamateria.com.br/upload/po/rc/porcentagemexemplo1.jpg" alt="Exemplo de cálculo de porcentagem" style="width:100%;border-radius:8px;margin:12px 0;">
            <h3>📊 Fator Multiplicador (Método Profissional)</h3>
            <p>Em vez de calcular o percentual e somar/subtrair, multiplique direto:</p>
            <ul>
                <li>Aumento de 20% → valor × <strong>1,20</strong></li>
                <li>Desconto de 20% → valor × <strong>0,80</strong></li>
                <li>Aumento de 15% → valor × <strong>1,15</strong></li>
                <li>Desconto de 35% → valor × <strong>0,65</strong></li>
            </ul>
            <h3>⚠️ PEGADINHA: Descontos Sucessivos</h3>
            <div style="background:var(--error-container);color:var(--on-error-container);border-radius:8px;padding:12px;margin:8px 0;">
                ❌ Dois descontos de 10% NÃO equivalem a 20%!<br>
                ✅ Dois descontos de 10%: 0,90 × 0,90 = 0,81 → desconto real de <strong>19%</strong>
            </div>
        `,
        relevance: "alta"
    },
    {
        id: "mat_juros",
        subject: "matematica",
        title: "Juros Simples — Fórmulas e Exemplos",
        content: `
            <img src="https://s5.static.brasilescola.uol.com.br/be/2022/06/juro-simples.jpg" alt="Diagrama de juros simples" style="width:100%;border-radius:8px;margin-bottom:12px;">
            <h3>📋 As 3 Fórmulas Essenciais</h3>
            <div style="background:var(--primary-container);color:var(--on-primary-container);border-radius:8px;padding:16px;margin:8px 0;text-align:center;">
                <strong style="font-size:1.2rem;">J = C × i × t</strong><br>
                <strong style="font-size:1.1rem;">M = C + J</strong><br>
                <small>J=Juros | C=Capital | i=taxa | t=tempo | M=Montante</small>
            </div>
            <p>⚠️ <strong>Atenção com as unidades!</strong> A taxa e o tempo devem estar na mesma unidade (meses com meses, anos com anos).</p>
            <h3>✏️ Exemplo Passo a Passo</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                R$2.000 aplicados a 3% ao mês durante 6 meses.<br><br>
                i = 3% = 3/100 = <strong>0,03</strong><br>
                J = 2000 × 0,03 × 6 = <strong>R$360,00</strong><br>
                M = 2000 + 360 = <strong>R$2.360,00</strong>
            </div>
            <h3>🔄 Encontrando o Capital (C)</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                Se J = R$360, i = 3%/mês, t = 6 meses → Qual é o Capital?<br><br>
                J = C × i × t → 360 = C × 0,03 × 6<br>
                360 = C × 0,18 → C = 360 ÷ 0,18 = <strong>R$2.000,00</strong>
            </div>
            <h3>🔄 Encontrando o Tempo (t)</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                Se J = R$240, C = R$2.000, i = 2%/mês → Por quantos meses?<br><br>
                240 = 2000 × 0,02 × t → 240 = 40t → t = 240÷40 = <strong>6 meses</strong>
            </div>
        `,
        relevance: "alta"
    },
    {
        id: "mat_media",
        subject: "matematica",
        title: "Média, Moda e Mediana — Estatística Básica",
        content: `
            <h3>📊 Média Aritmética Simples</h3>
            <p>Soma todos os valores e divide pela quantidade de elementos.</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                Notas de um agente na capacitação: 7, 8, 6, 9, 5<br>
                Média = (7+8+6+9+5) ÷ 5 = 35 ÷ 5 = <strong>7,0</strong>
            </div>
            <h3>🎯 Moda</h3>
            <p>O valor que aparece com <strong>maior frequência</strong>. Pode não existir (se todos são iguais) ou ter mais de uma.</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                Visitas por dia: {4, 6, 6, 7, 8, 6, 5} → Moda = <strong>6</strong> (aparece 3 vezes)<br>
                {3, 5, 7, 9} → Sem moda (todos aparecem 1 vez)
            </div>
            <h3>📏 Mediana</h3>
            <p>Valor central após <strong>ordenar do menor ao maior</strong>.</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Quantidade ímpar</strong> → elemento do meio<br>
                {3, 5, <strong>7</strong>, 9, 11} → Mediana = <strong>7</strong><br><br>
                <strong>Quantidade par</strong> → média dos dois elementos centrais<br>
                {3, 5, <strong>7, 9</strong>, 11, 13} → Mediana = (7+9)÷2 = <strong>8</strong>
            </div>
            <h3>💡 Quando cada um é usado?</h3>
            <ul>
                <li><strong>Média:</strong> Quando os dados são homogêneos (sem valores extremos).</li>
                <li><strong>Mediana:</strong> Quando há valores extremos que distorceriam a média (ex: salários).</li>
                <li><strong>Moda:</strong> Quando se quer saber o valor mais comum (ex: tamanho mais vendido).</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "mat_probabilidade",
        subject: "matematica",
        title: "Probabilidade Simples — Teoria e Prática",
        content: `
            <h3>📐 A Fórmula Fundamental</h3>
            <div style="background:var(--primary-container);color:var(--on-primary-container);border-radius:8px;padding:16px;margin:8px 0;text-align:center;">
                <strong style="font-size:1.1rem;">P(A) = Nº de casos favoráveis ÷ Nº de casos possíveis (total)</strong>
            </div>
            <p>O resultado pode ser expresso como <strong>fração, decimal ou porcentagem</strong>.</p>
            <h3>✏️ Exemplo Resolvido</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                Em uma urna: 4 bolas <span style="color:green">verdes</span>, 6 bolas <span style="color:blue">azuis</span>. Total = 10 bolas.<br><br>
                P(verde) = 4/10 = 2/5 = <strong>0,40 = 40%</strong><br>
                P(azul) = 6/10 = 3/5 = <strong>0,60 = 60%</strong><br>
                P(verde) + P(azul) = 1 ✅ (probabilidades complementares somam 1)
            </div>
            <h3>📌 Conceitos Importantes</h3>
            <ul>
                <li><strong>Pmin = 0:</strong> Evento impossível (retirar bola amarela de urna sem amarelas)</li>
                <li><strong>Pmax = 1:</strong> Evento certo (retirar qualquer bola da urna)</li>
                <li><strong>Evento complementar:</strong> P(não A) = 1 - P(A)</li>
            </ul>
            <h3>🏥 Exemplo Contextualizado (ACS)</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                Numa microárea de 200 pessoas, 50 são idosas. Se escolhermos 1 pessoa ao acaso, qual a probabilidade de ser idosa?<br><br>
                P = 50/200 = 1/4 = <strong>0,25 = 25%</strong>
            </div>
        `,
        relevance: "media"
    }
];

const quizDb = [
    // ══════════════════════════════════════════════════════════════════
    // ESPECÍFICOS
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q_esp1",
        subject: "especificos",
        question: "De acordo com a Lei nº 11.350, qual destas é uma atribuição exclusiva do Agente Comunitário de Saúde?",
        options: [
            "Aplicar injeções de antibióticos nas UBS.",
            "Realizar cirurgias de pequeno porte no domicílio.",
            "O cadastramento familiar e territorializado.",
            "Distribuir medicamentos de alto custo na farmácia."
        ],
        correctIndex: 2,
        explanation: "O cadastramento das famílias é a função primária do ACS para identificar necessidades e organizar o território de saúde."
    },
    {
        id: "q_esp2",
        subject: "especificos",
        question: "Os princípios DOUTRINÁRIOS do Sistema Único de Saúde (SUS) englobam:",
        options: [
            "Regionalização, Hierarquização e Descentralização.",
            "Universalidade, Integralidade e Equidade.",
            "Centralização, Participação e Fundo Privado.",
            "Eficácia, Previdência e Eficiência."
        ],
        correctIndex: 1,
        explanation: "UIE são a base filosófica. Todos têm direito (U), por completo (I), dando mais a quem precisa mais (E). Descentralização é diretriz organizativa, não princípio doutrinário."
    },
    {
        id: "q_esp3",
        subject: "especificos",
        question: "É permitido ao ACS atuar em uma microárea diferente daquela em que possui residência?",
        options: [
            "Sim, se o Prefeito assinar decreto.",
            "Não, a lei obriga que o ACS resida na área da comunidade desde a data de publicação do edital.",
            "Sim, a transferência é um direito irrestrito.",
            "Não existe restrição geográfica no edital."
        ],
        correctIndex: 1,
        explanation: "A convivência do agente com a própria comunidade é a força motriz do programa ACS, logo é pré-requisito residencial obrigatório."
    },
    {
        id: "q_esp4",
        subject: "especificos",
        question: "Doença de Notificação Compulsória significa que:",
        options: [
            "O agente de saúde deve guardar segredo absoluto.",
            "O profissional de saúde é obrigado a reportar à secretaria de saúde qualquer suspeita rapidamente.",
            "Não precisa ser avisada se já há casos em outra cidade.",
            "Só deve ser comunicada após a morte do paciente."
        ],
        correctIndex: 1,
        explanation: "É uma obrigação legal comunicar (notificar) rapidamente para evitar expansão da epidemia."
    },
    {
        id: "q_esp5",
        subject: "especificos",
        question: "Qual a diferença CORRETA entre endemia, epidemia e pandemia?",
        options: [
            "Pandemia é exclusiva de países tropicais.",
            "Endemia é quando a doença ocorre constantemente numa região; epidemia é o aumento súbito; pandemia é em múltiplos países.",
            "Epidemia e endemia são sinônimos — apenas a escala difere por prefixo.",
            "Pandemia ocorre apenas em animais selvagens."
        ],
        correctIndex: 1,
        explanation: "Endemia = constante numa região. Epidemia = aumento súbito numa região. Pandemia = epidemia em vários países/continentes simultaneamente."
    },

    // ══════════════════════════════════════════════════════════════════
    // GERAIS
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q_g1",
        subject: "gerais",
        question: "Como se chama a lei máxima que rege o Município de Iracemápolis?",
        options: [
            "Decreto-Lei Municipal Administrativo",
            "Constituição Cidadã Primitiva",
            "Lei Orgânica do Município",
            "Código de Posturas Urbanas"
        ],
        correctIndex: 2,
        explanation: "A Lei Orgânica é a constituição da cidade, a norma hierarquicamente mais alta no âmbito municipal."
    },
    {
        id: "q_g2",
        subject: "gerais",
        question: "Antes de tornar-se oficialmente o distrito de Iracemápolis, qual era o nome e o famoso apelido do antigo bairro rural?",
        options: [
            "Bairro da Cachoeirinha, apelidado Terra Doce.",
            "Bairro de Santa Cruz da Boa Vista, apelidado de Bate Pau.",
            "Fazenda Iracema, apelidada de Lábios de Mel.",
            "Vila das Oliveiras, apelidada de Poli."
        ],
        correctIndex: 1,
        explanation: "O apelido 'Bate Pau' remetia à dança dos escravos alojados no Morro Azul — não tem relação com brigas."
    },
    {
        id: "q_g3",
        subject: "gerais",
        question: "Em que ano Iracemápolis foi emancipada e tornou-se Município independente, deixando de ser distrito de Limeira?",
        options: [
            "1923",
            "1945",
            "1953",
            "1960"
        ],
        correctIndex: 2,
        explanation: "A Lei Estadual nº 2.456, de 31 de dezembro de 1953, criou o Município de Iracemápolis, desmembrando-o de Limeira. José Chinellato tornou-se o primeiro prefeito."
    },
    {
        id: "q_g5",
        subject: "gerais",
        question: "Em que ano Iracemápolis foi elevada à categoria de Distrito, separando-se de Limeira?",
        options: ["1891", "1923", "1953", "1937"],
        correctIndex: 1,
        explanation: "Em 1923 o núcleo de Santa Cruz da Boa Vista foi oficialmente elevado a Distrito de Limeira, com o nome de Iracemápolis. A emancipação como Município veio em 31/12/1953."
    },
    {
        id: "q_g6",
        subject: "gerais",
        question: "Quem foi o primeiro professor de alfabetização de adultos de Iracemápolis e também o primeiro prefeito da cidade?",
        options: [
            "Gaudino Gonçalves de Lima",
            "Constante Ometto",
            "Paulo Aparecido Simões",
            "José Chinellato"
        ],
        correctIndex: 3,
        explanation: "José Chinellato foi professor de adultos em 1937 e, após a emancipação, tornou-se o primeiro prefeito de Iracemápolis."
    },
    {
        id: "q_g7",
        subject: "gerais",
        question: "Segundo os dados do IBGE 2022, qual é a população estimada de Iracemápolis?",
        options: ["15.450 habitantes", "21.967 habitantes", "30.012 habitantes", "18.320 habitantes"],
        correctIndex: 1,
        explanation: "O Censo IBGE 2022 registrou 21.967 habitantes em Iracemápolis, com IDH de 0,776 (Alto)."
    },

    // ══════════════════════════════════════════════════════════════════
    // PORTUGUÊS — 16 questões
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q_p1",
        subject: "portugues",
        question: "Assinale a alternativa em que o uso da crase está CORRETO:",
        options: [
            "João gosta de andar à pé nos finais de semana.",
            "Vou à Brasília todos os meses trabalhar.",
            "Entreguei os exames à Assistente Social do posto.",
            "Assistimos à muitos filmes naquela noite."
        ],
        correctIndex: 2,
        explanation: "'Assistente' aceita o artigo 'a', e o verbo entrega pede a preposição 'a'. 'Pé' é masculino (sem crase), Brasília não aceita artigo e 'muitos' é plural masculino (sem crase)."
    },
    {
        id: "q_p2",
        subject: "portugues",
        question: "Como se preenche corretamente a lacuna: 'Você não vai ao postinho hoje ____?'",
        options: ["por que", "porque", "porquê", "por quê"],
        correctIndex: 3,
        explanation: "No final absoluto de uma frase interrogativa usa-se 'por quê' — duas palavras e com acento circunflexo."
    },
    {
        id: "q_p3",
        subject: "portugues",
        question: "Leia o trecho: 'Haviam muitas crianças esperando vacina no corredor.' O verbo 'haver' foi usado de forma:",
        options: [
            "Correta, pois concorda com 'crianças' (plural).",
            "Correta, pois verbos impessoais sempre vão ao plural.",
            "Incorreta, pois 'haver' no sentido de 'existir' é impessoal e fica no singular: 'Havia'.",
            "Incorreta, pois deveria ser 'hão de haver'."
        ],
        correctIndex: 2,
        explanation: "'Haver' com sentido de existir é verbo impessoal e SEMPRE fica no singular. Correto: 'Havia muitas crianças'."
    },
    {
        id: "q_p4",
        subject: "portugues",
        question: "Em 'O agente cumpriu suas visitas; a comunidade, porém, desconhecia os resultados.' A conjunção 'porém' indica:",
        options: ["Conclusão", "Causa", "Adição", "Oposição/Adversidade"],
        correctIndex: 3,
        explanation: "'Porém' é conjunção adversativa — introduz uma oposição ou contraste em relação à ideia anterior. Sinônimos: mas, contudo, entretanto, todavia."
    },
    {
        id: "q_p5",
        subject: "portugues",
        question: "Leia: 'A profissional, cuja dedicação era exemplar, recebeu elogios.' A palavra 'cuja' é um pronome relativo que se refere a:",
        options: [
            "Elogios (o que foi recebido)",
            "A dedicação pertence à profissional",
            "Quem recebeu elogios",
            "O local onde trabalha"
        ],
        correctIndex: 1,
        explanation: "'Cuja' = de quem / do qual. 'A profissional, cuja dedicação' = a dedicação DA profissional. 'Cujo/cuja' sempre indica posse."
    },
    {
        id: "q_p6",
        subject: "portugues",
        question: "Assinale a frase com pontuação CORRETA:",
        options: [
            "O agente de saúde visitou a família, e, tomou todas as informações.",
            "O agente de saúde, visitou a família e tomou todas as informações.",
            "O agente de saúde visitou a família e tomou todas as informações.",
            "O agente de saúde visitou, a família e tomou todas as informações."
        ],
        correctIndex: 2,
        explanation: "Não se separa sujeito de predicado com vírgula, nem se insere vírgula antes de 'e' que liga dois verbos com o mesmo sujeito."
    },
    {
        id: "q_p7",
        subject: "portugues",
        question: "No texto: 'O profissional era tão comprometido que nunca faltava às reuniões.' Qual a relação lógica expressa pela conjunção 'que'?",
        options: ["Causa", "Conclusão", "Consequência", "Concessão"],
        correctIndex: 2,
        explanation: "A estrutura 'tão... que' indica CONSEQUÊNCIA: o grau de comprometimento (causa) gerou o resultado de nunca faltar (consequência)."
    },
    {
        id: "q_p8",
        subject: "portugues",
        question: "Qual palavra é sinônimo de 'diligente' no contexto profissional?",
        options: ["Negligente", "Trabalhador e cuidadoso", "Indisponível", "Autoritário"],
        correctIndex: 1,
        explanation: "'Diligente' significa aplicado, cuidadoso, trabalhador. O antônimo seria 'negligente' (descuidado)."
    },
    {
        id: "q_p9",
        subject: "portugues",
        question: "Qual das frases abaixo está CORRETA quanto ao uso de verbo impessoal de tempo?",
        options: [
            "Fazem dois anos que não visito aquele bairro.",
            "Faziam muitos dias que ela não aparecia.",
            "Faz dois anos que não visito aquele bairro.",
            "Há de fazer dois meses que chegamos."
        ],
        correctIndex: 2,
        explanation: "'Fazer' indicando tempo decorrido é verbo impessoal — sempre no singular: 'Faz dois anos'. 'Fazem' e 'Faziam' (plural) estão errados nesse sentido. 'Haver' tb é impessoal: 'Há dois anos'."
    },

    {
        id: "q_p10",
        subject: "portugues",
        question: "Leia: 'Embora estivesse cansada, a agente concluiu todas as visitas.' A conjunção 'embora' indica:",
        options: ["Causa", "Conclusão", "Concessão", "Adição"],
        correctIndex: 2,
        explanation: "'Embora' é conjunção concessiva — admite um fato contrário que não impede a ação principal. Sinônimos: ainda que, mesmo que, apesar de que."
    },
    {
        id: "q_p11",
        subject: "portugues",
        question: "Qual alternativa apresenta uso INCORRETO do prefixo?",
        options: [
            "Hipertensão = pressão muito alta",
            "Subnutrição = nutrição abaixo do normal",
            "Antiviral = contra vírus",
            "Pré-natal = após o nascimento"
        ],
        correctIndex: 3,
        explanation: "O prefixo 'pré-' significa 'antes'. Pré-natal = antes do nascimento. O que ocorre após o nascimento é 'pós-natal'."
    },
    {
        id: "q_p12",
        subject: "portugues",
        question: "Em qual alternativa a substituição NÃO mantém o sentido original da frase: 'O trabalho do ACS é fundamental para a saúde pública.'?",
        options: [
            "O trabalho do ACS é essencial para a saúde pública.",
            "O trabalho do ACS é indispensável para a saúde pública.",
            "O trabalho do ACS é supérfluo para a saúde pública.",
            "O trabalho do ACS é crucial para a saúde pública."
        ],
        correctIndex: 2,
        explanation: "'Supérfluo' significa dispensável, desnecessário — o oposto de 'fundamental'. As demais (essencial, indispensável, crucial) são sinônimos."
    },
    {
        id: "q_p13",
        subject: "portugues",
        question: "Leia o texto: 'O agente registrou as visitas no caderno. Ele entregou o documento à supervisora.' O pronome 'ele' retoma:",
        options: [
            "O caderno",
            "As visitas",
            "O agente",
            "O documento"
        ],
        correctIndex: 2,
        explanation: "O pronome 'ele' é anafórico — retoma o último antecedente masculino singular mencionado: 'O agente'."
    },
    {
        id: "q_p14",
        subject: "portugues",
        question: "Qual alternativa está escrita corretamente segundo o acordo ortográfico?",
        options: ["Excessão", "Exceção", "Eceção", "Exeção"],
        correctIndex: 1,
        explanation: "A grafia correta é 'exceção' — com 'x', 'c' e 'ç'. Palavra originada do latim 'exceptio'."
    },
    {
        id: "q_p15",
        subject: "portugues",
        question: "No concurso para Agente de Saúde, a banca apresentou o texto: 'A vacinação é a arma mais eficaz contra doenças evitáveis.' A expressão 'arma mais eficaz' é uma figura de linguagem chamada:",
        options: ["Hipérbole", "Antítese", "Metáfora", "Eufemismo"],
        correctIndex: 2,
        explanation: "Metáfora é a comparação implícita (sem 'como'). A vacinação é chamada de 'arma' — transferindo o sentido de combate de forma implícita."
    },
    {
        id: "q_p16",
        subject: "portugues",
        question: "Assinale a concordância nominal CORRETA:",
        options: [
            "As enfermeiras estavam cansados após o plantão.",
            "Os resultados foram satisfatória.",
            "A equipe estava bem preparada e motivada.",
            "Os agentes chegaram animadas para a reunião."
        ],
        correctIndex: 2,
        explanation: "'Equipe' (feminino singular) + 'preparada e motivada' (feminino singular) — concordância correta. As demais misturam gênero ou número inadequadamente."
    },

    // ══════════════════════════════════════════════════════════════════
    // MATEMÁTICA — 17 questões
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q_m1",
        subject: "matematica",
        question: "Em uma UBS, 10 agentes aplicam vacinas num mutirão e demoram 8 horas. Se houvesse 16 agentes, trabalhando com o mesmo ritmo, em quantas horas fariam o mesmo serviço?",
        options: ["12,8 horas", "4 horas", "5 horas", "6 horas"],
        correctIndex: 2,
        explanation: "Regra de 3 inversamente proporcional: 10 × 8 = 16 × X → X = 80 ÷ 16 = 5 horas."
    },
    {
        id: "q_m2",
        subject: "matematica",
        question: "Um frasco de medicamento custa R$ 150,00 e sofreu desconto de 20%. Qual o preço final?",
        options: ["R$ 130,00", "R$ 120,00", "R$ 140,00", "R$ 110,00"],
        correctIndex: 1,
        explanation: "20% de 150 = 30. Preço final = 150 - 30 = R$ 120,00. Pelo multiplicador: 150 × 0,80 = R$ 120,00."
    },
    {
        id: "q_m3",
        subject: "matematica",
        question: "A secretaria de saúde comprou 240 máscaras para distribuir igualmente entre 6 postos de saúde. Quantas máscaras cada posto recebe?",
        options: ["30 máscaras", "40 máscaras", "50 máscaras", "60 máscaras"],
        correctIndex: 1,
        explanation: "Divisão simples: 240 ÷ 6 = 40 máscaras por posto. Regra de 3 direta: 6 postos → 240 | 1 posto → X = 40."
    },
    {
        id: "q_m4",
        subject: "matematica",
        question: "Uma agente de saúde visitou 5 famílias numa semana. Os números de membros de cada família foram: 3, 5, 4, 6 e 2. Qual é a média de membros por família?",
        options: ["3 membros", "4 membros", "5 membros", "6 membros"],
        correctIndex: 1,
        explanation: "Média = soma ÷ quantidade = (3+5+4+6+2) ÷ 5 = 20 ÷ 5 = 4 membros."
    },
    {
        id: "q_m5",
        subject: "matematica",
        question: "Observe a tabela de vacinação:\n\n| Mês | Vacinados |\n|-----|----------|\n| Jan | 120 |\n| Fev | 150 |\n| Mar | 180 |\n\nQual o total de vacinados no trimestre?",
        options: ["400 pessoas", "420 pessoas", "450 pessoas", "500 pessoas"],
        correctIndex: 2,
        explanation: "Soma total: 120 + 150 + 180 = 450 pessoas vacinadas no trimestre."
    },
    {
        id: "q_m6",
        subject: "matematica",
        question: "De 450 pessoas cadastradas em uma microárea, 30% são idosos. Quantos idosos há na microárea?",
        options: ["100 idosos", "115 idosos", "135 idosos", "150 idosos"],
        correctIndex: 2,
        explanation: "30% de 450 = 450 × 0,30 = 135 idosos. (Ou: 10% de 450 = 45; 30% = 45 × 3 = 135)."
    },
    {
        id: "q_m7",
        subject: "matematica",
        question: "Um agente de saúde recebe salário de R$ 2.200,00 e terá aumento de 15%. Qual será o novo salário?",
        options: ["R$ 2.420,00", "R$ 2.450,00", "R$ 2.530,00", "R$ 2.580,00"],
        correctIndex: 2,
        explanation: "15% de 2.200 = 330. Novo salário: 2.200 + 330 = R$ 2.530,00. Pelo multiplicador: 2.200 × 1,15 = R$ 2.530,00."
    },
    {
        id: "q_m8",
        subject: "matematica",
        question: "Um capital de R$ 2.000,00 foi aplicado a juros simples de 3% ao mês por 4 meses. Qual o valor dos juros?",
        options: ["R$ 180,00", "R$ 200,00", "R$ 240,00", "R$ 260,00"],
        correctIndex: 2,
        explanation: "J = C × i × t = 2.000 × 0,03 × 4 = R$ 240,00. Montante = 2.000 + 240 = R$ 2.240,00."
    },
    {
        id: "q_m9",
        subject: "matematica",
        question: "Uma solução medicamentosa tem 500 ml. O médico prescreveu que 40% deve ser administrado pela manhã. Quantos ml são administrados à tarde (os 60% restantes)?",
        options: ["200 ml", "250 ml", "300 ml", "350 ml"],
        correctIndex: 2,
        explanation: "60% de 500 ml = 300 ml. (Ou: 40% = 200 ml pela manhã; resto = 500 - 200 = 300 ml à tarde)."
    },
    {
        id: "q_m10",
        subject: "matematica",
        question: "Uma sequência numérica segue o padrão: 2, 5, 8, 11, ___. Qual é o próximo número?",
        options: ["12", "13", "14", "15"],
        correctIndex: 2,
        explanation: "A razão (diferença entre termos) é +3. Portanto: 11 + 3 = 14. Sequência aritmética de razão 3."
    },
    {
        id: "q_m11",
        subject: "matematica",
        question: "Em uma urna há 4 bolas verdes e 6 bolas azuis. Qual a probabilidade de retirar uma bola verde ao acaso?",
        options: ["20%", "40%", "50%", "60%"],
        correctIndex: 1,
        explanation: "Total = 10 bolas. P(verde) = 4/10 = 2/5 = 0,40 = 40%."
    },
    {
        id: "q_m12",
        subject: "matematica",
        question: "Um produto custava R$ 80,00 e teve dois aumentos sucessivos de 10% cada. Qual o preço final?",
        options: ["R$ 96,00", "R$ 96,80", "R$ 97,20", "R$ 98,00"],
        correctIndex: 1,
        explanation: "1º aumento: 80 × 1,10 = R$ 88,00. 2º aumento: 88 × 1,10 = R$ 96,80. Dois aumentos de 10% ≠ 20% (seria R$ 96,00)."
    },
    {
        id: "q_m13",
        subject: "matematica",
        question: "Um médico atende 8 pacientes por hora. Em quantas horas ele atende 52 pacientes?",
        options: ["5 horas", "5,5 horas", "6 horas", "6,5 horas"],
        correctIndex: 3,
        explanation: "Regra de 3 direta: 8 pac → 1h | 52 pac → X. X = 52/8 = 6,5 horas."
    },
    {
        id: "q_m14",
        subject: "matematica",
        question: "Ordene o conjunto e identifique a mediana: {11, 3, 7, 9, 5}",
        options: ["Mediana = 5", "Mediana = 7", "Mediana = 9", "Mediana = 6"],
        correctIndex: 1,
        explanation: "Ordenado: {3, 5, 7, 9, 11}. Com 5 elementos (ímpar), a mediana é o elemento central = 7."
    },
    {
        id: "q_m15",
        subject: "matematica",
        question: "Uma agente visitou 18 casas em 3 dias. Mantendo o mesmo ritmo, em quantos dias ela visitará 30 casas?",
        options: ["4 dias", "5 dias", "6 dias", "7 dias"],
        correctIndex: 1,
        explanation: "Regra de 3 direta: 18 casas → 3 dias | 30 casas → X. X = (30 × 3) ÷ 18 = 90 ÷ 18 = 5 dias."
    },
    {
        id: "q_m16",
        subject: "matematica",
        question: "Numa turma de capacitação, as notas foram: 6, 7, 8, 7, 9, 7. Qual é a MODA das notas?",
        options: ["6", "7", "8", "9"],
        correctIndex: 1,
        explanation: "A moda é o valor que mais aparece. O número 7 aparece 3 vezes — todos os outros, apenas 1 vez."
    },
    {
        id: "q_m17",
        subject: "matematica",
        question: "Um capital rende R$ 360,00 de juros simples em 6 meses à taxa de 3% ao mês. Qual é o capital inicial?",
        options: ["R$ 1.800,00", "R$ 2.000,00", "R$ 2.200,00", "R$ 2.400,00"],
        correctIndex: 1,
        explanation: "J = C × i × t → 360 = C × 0,03 × 6 → 360 = C × 0,18 → C = 360 ÷ 0,18 = R$ 2.000,00."
    }
];
