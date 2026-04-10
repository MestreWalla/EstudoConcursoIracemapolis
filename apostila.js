/* apostila.js — Conteúdo da Apostila Auxiliar Administrativo (PRONATEC/IFPR)
 * Adaptado do livro: "Auxiliar Administrativo" — Alencar Garcia Bacarji, IFPR, 2012
 * Organizado por tópicos relevantes ao Edital 001/2026 — Iracemápolis
 */

const apostilaCapitulos = [
    // ═══════════════════════════════════════════════════════════════
    // UNIDADE 1 — FUNDAMENTOS DE ADMINISTRAÇÃO
    // ═══════════════════════════════════════════════════════════════
    {
        id: "apo_u1_intro",
        unidade: 1,
        icon: "🏢",
        title: "O que é Administração e Organização?",
        content: `
            <h3>🏢 O que é uma Organização?</h3>
            <p>Toda sociedade é composta por <strong>organizações</strong> — instituições que precisam ser administradas. Uma organização pode ser definida como:</p>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "Um agrupamento humano composto por especialistas que trabalham em uma atividade comum." (Drucker, 1994)
            </blockquote>
            <p>Toda organização é constituída por:</p>
            <ul>
                <li>Recursos humanos</li>
                <li>Recursos materiais e físicos</li>
                <li>Recursos financeiros</li>
                <li>Recursos mercadológicos</li>
            </ul>

            <h3>📖 O que significa Administrar?</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                A palavra vem do latim: <strong>"ad"</strong> (direção) + <strong>"minister"</strong> (subordinação) = aquele que realiza uma função sob o comando de outrem, prestando serviço a outro.
            </div>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "A administração é o processo de consecução dos objetivos organizacionais de maneira eficiente, eficaz e efetiva, por meio do <strong>planejamento, organização, liderança e controle</strong> dos recursos organizacionais." (Caravantes, 2005)
            </blockquote>

            <h3>⚙️ Evolução Histórica</h3>
            <ul>
                <li><strong>Antiguidade:</strong> Pirâmides do Egito (3.000 a.C.) — primeiro exemplo de organização e supervisão do trabalho</li>
                <li><strong>Revolução Industrial (séc. XVIII):</strong> Máquina a vapor → produção em escala → necessidade de administrar grandes grupos de pessoas</li>
                <li><strong>Teoria Clássica (Taylor / Fayol):</strong> Foco na eficiência, divisão do trabalho, hierarquia</li>
                <li><strong>Escola das Relações Humanas (Mayo):</strong> O ser humano como fator central da produção</li>
                <li><strong>Administração Moderna:</strong> Foco em resultados, gestão estratégica, inovação</li>
            </ul>
        `
    },
    {
        id: "apo_u1_habilidades",
        unidade: 1,
        icon: "🎯",
        title: "Habilidades do Administrador e Recursos Organizacionais",
        content: `
            <h3>🎯 3 Habilidades Essenciais do Administrador</h3>
            <div style="display:grid;gap:10px;margin:12px 0;">
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>🔧 Habilidade Técnica</strong><br>
                    Uso de conhecimentos, procedimentos, técnicas e equipamentos para realizar tarefas específicas.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>🤝 Habilidade Humana</strong><br>
                    Capacidade e discernimento para trabalhar <em>com pessoas</em> e <em>em equipe</em>. Envolve empatia, comunicação e liderança.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>💡 Habilidade Conceitual</strong><br>
                    Capacidade de lidar com ideias e conceitos abstratos, compreendendo a complexidade da organização como um todo.
                </div>
            </div>

            <h3>📦 Recursos Organizacionais</h3>
            <p>Recursos são os meios ou ativos de que dispõem as organizações para atingir seus objetivos:</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Materiais:</strong> Prédios, máquinas, equipamentos, matérias-primas</li>
                    <li><strong>Financeiros:</strong> Capital, dinheiro, créditos, investimentos</li>
                    <li><strong>Humanos:</strong> Toda atividade humana — mental, manual, braçal</li>
                    <li><strong>Mercadológicos:</strong> Vendas, propaganda, distribuição, pesquisa de mercado</li>
                    <li><strong>Administrativos:</strong> Planejamento, organização, direção e controle</li>
                </ul>
            </div>

            <h3>🏆 Eficiência vs. Eficácia vs. Efetividade</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Eficiência:</strong> Fazer certo — otimizar o uso dos recursos (meios)</li>
                    <li><strong>Eficácia:</strong> Fazer a coisa certa — alcançar os objetivos (fins)</li>
                    <li><strong>Efetividade:</strong> Fazer certo a coisa certa — impacto real e duradouro</li>
                </ul>
                <p style="margin-top:8px;">💡 <em>Exemplo:</em> Um servidor eficiente processa 100 documentos por dia (usa bem o tempo). Eficaz: processa os documentos corretos. Efetivo: o trabalho gera resultado real para o cidadão.</p>
            </div>
        `
    },
    {
        id: "apo_u1_tipos_org",
        unidade: 1,
        icon: "🏛️",
        title: "Tipos de Organizações e Trabalho em Equipe",
        content: `
            <h3>🏛️ Tipos de Organizações</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Não Lucrativas:</strong> Objetivos de natureza social. Sobrevivem de doações ou verbas governamentais.
                <ul>
                    <li>Exército, Polícia</li>
                    <li>Igrejas, ONGs</li>
                    <li>Fundações, Prefeituras</li>
                </ul>
            </div>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Lucrativas:</strong> Criadas para gerar bens/serviços com margem de lucro.
                <ul>
                    <li><strong>S.A. (Sociedade Anônima):</strong> Capital dividido em ações; obrigadas a divulgar balanços em jornais</li>
                    <li><strong>Ltda. (Limitada):</strong> Não obrigada a divulgar publicamente; responsabilidade limitada ao capital</li>
                </ul>
            </div>

            <h3>👥 Trabalho em Equipe</h3>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "Equipe é um pequeno grupo de pessoas com habilidades complementares que trabalham juntas visando atingir um propósito comum."
            </blockquote>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Para trabalhar bem em equipe é necessário:</strong>
                <ul>
                    <li>✅ Respeitar o próximo e saber ouvir</li>
                    <li>✅ Ser cooperativo e compartilhar ideias</li>
                    <li>✅ Comprometimento com objetivos comuns</li>
                    <li>✅ Respeitar a opinião dos outros</li>
                    <li>✅ Normas bem definidas</li>
                </ul>
            </div>

            <h3>💬 Relacionamento Interpessoal</h3>
            <p>O relacionamento interpessoal é a base do trabalho em equipe. Envolve:</p>
            <ul>
                <li>Conhecer seus próprios sentimentos e emoções (inteligência emocional)</li>
                <li>Comunicar-se com clareza e respeito</li>
                <li>Ser capaz de se colocar no lugar do outro (empatia)</li>
                <li>Contribuir para um ambiente de respeito e aprendizado</li>
            </ul>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "Se me conheço, consigo estabelecer relacionamentos saudáveis e reconhecer o outro."
            </blockquote>
        `
    },

    // ═══════════════════════════════════════════════════════════════
    // UNIDADE 2 — NOÇÕES DE GESTÃO DE EMPRESAS
    // ═══════════════════════════════════════════════════════════════
    {
        id: "apo_u2_depto_pessoal",
        unidade: 2,
        icon: "👤",
        title: "Departamento Pessoal e Recursos Humanos",
        content: `
            <h3>👤 O que é Departamento Pessoal?</h3>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "O departamento pessoal é a unidade de execução vinculada ao departamento de recursos humanos incumbida da administração do cadastro e da folha de pagamento do pessoal."
            </blockquote>

            <h3>📋 3 Setores do Departamento Pessoal</h3>
            <div style="display:grid;gap:10px;margin:12px 0;">
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>1️⃣ Admissão</strong><br>
                    Processo de integração do funcionário: registro em carteira, exame admissional, documentação legal (CLT).
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>2️⃣ Compensação</strong><br>
                    Controle de frequência, pagamento de salários e benefícios, recolhimento de impostos e contribuições.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>3️⃣ Desligamento</strong><br>
                    Rescisão de contrato de trabalho, cálculo de verbas rescisórias, homologação, baixa na CTPS.
                </div>
            </div>

            <h3>💰 Administração Financeira e Orçamentária</h3>
            <p>Cuida dos assuntos financeiros das organizações, visando <strong>maximizar o retorno sobre o capital investido</strong>.</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Conceitos financeiros essenciais:</strong>
                <ul>
                    <li><strong>Gasto:</strong> Valor dos insumos adquiridos (ex: compra de material)</li>
                    <li><strong>Despesa:</strong> Valor dos insumos consumidos no funcionamento (ex: salários administrativos)</li>
                    <li><strong>Custo:</strong> Valor dos insumos usados na fabricação do produto</li>
                    <li><strong>Desembolso:</strong> Valor efetivamente pago pelos insumos</li>
                    <li><strong>Caixa:</strong> Registro de toda disponibilidade da empresa (dinheiro, aplicações, bancos)</li>
                    <li><strong>Capital Social:</strong> Valor investido pelos sócios/acionistas</li>
                </ul>
            </div>
        `
    },
    {
        id: "apo_u2_contabilidade",
        unidade: 2,
        icon: "📊",
        title: "Noções de Contabilidade e Patrimônio",
        content: `
            <h3>📊 O que é Contabilidade?</h3>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "A contabilidade é a ciência que estuda e controla o patrimônio em suas variações quantitativas e qualitativas."
            </blockquote>

            <h3>🔧 Técnicas Contábeis</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Escrituração:</strong> Registro cronológico das ocorrências que afetam o patrimônio</li>
                    <li><strong>Demonstrações Contábeis:</strong> Relatórios que apresentam resultados do período (Balanço Patrimonial, DRE)</li>
                    <li><strong>Auditoria:</strong> Verificação e validação da exatidão dos registros contábeis</li>
                    <li><strong>Análise:</strong> Interpretação das informações financeiras para tomada de decisão</li>
                </ul>
            </div>

            <h3>🏦 Patrimônio = Bens + Direitos – Obrigações</h3>
            <div style="background:var(--primary-container);color:var(--on-primary-container);border-radius:8px;padding:16px;margin:8px 0;text-align:center;">
                <strong>Patrimônio Líquido = Ativo – Passivo</strong><br>
                <small>ou: Bens + Direitos – Obrigações</small>
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Tipos de Bens:</strong>
                <ul>
                    <li><strong>Móveis:</strong> Podem ser deslocados sem dano (veículos, máquinas, estoques)</li>
                    <li><strong>Imóveis:</strong> Não podem ser deslocados sem dano (terrenos, imóveis)</li>
                    <li><strong>Tangíveis:</strong> Têm corpo físico (máquinas, imóveis)</li>
                    <li><strong>Intangíveis:</strong> Sem corpo físico (marcas, patentes, direitos autorais)</li>
                </ul>
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Situação líquida:</strong>
                <ul>
                    <li>✅ <strong>Positiva (Superávit):</strong> Ativo > Passivo</li>
                    <li>⚠️ <strong>Nula:</strong> Ativo = Passivo</li>
                    <li>❌ <strong>Negativa (Déficit):</strong> Ativo < Passivo</li>
                </ul>
            </div>
        `
    },
    {
        id: "apo_u2_custos",
        unidade: 2,
        icon: "💰",
        title: "Noções de Produção, Custos e Matemática Financeira",
        content: `
            <h3>🏭 Teoria da Produção</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Produção:</strong> Processo de transformação de insumos em produtos/serviços</li>
                    <li><strong>Fatores variáveis:</strong> Quantidade muda conforme o volume (matéria-prima, mão de obra)</li>
                    <li><strong>Fatores fixos:</strong> Quantidade não muda (infraestrutura, equipamentos)</li>
                </ul>
                <p><strong>Lucro Total (LT) = Receita Total (RT) – Custo Total (CT)</strong></p>
                <p><strong>CT = Custo Fixo (CF) + Custo Variável (CV)</strong></p>
            </div>

            <h3>💹 Juros Simples</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;font-family:monospace;">
                <strong>Fórmula: J = C × i × n</strong><br><br>
                J = juros | C = capital | i = taxa | n = tempo<br><br>
                <em>Exemplo: C = R$1.000 | i = 10% a.a. | n = 3 anos</em><br>
                J = 1.000 × 0,10 × 3 = <strong>R$ 300,00</strong><br>
                M = C + J = 1.000 + 300 = <strong>R$ 1.300,00</strong>
            </div>
            <p>⚠️ No juros simples, o juro é <strong>sempre calculado sobre o capital inicial</strong> — ou seja, é igual em todos os períodos.</p>

            <h3>📈 Juros Compostos (Juros sobre Juros)</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;font-family:monospace;">
                <strong>Fórmula: M = C × (1 + i)ⁿ</strong><br>
                <strong>J = M – C</strong><br><br>
                <em>Exemplo: C = R$1.000 | i = 10% a.a. | n = 3 anos</em><br>
                M = 1.000 × (1,10)³ = 1.000 × 1,331 = <strong>R$ 1.331,00</strong><br>
                J = 1.331 – 1.000 = <strong>R$ 331,00</strong>
            </div>
            <p>💡 Nos compostos, o juro do período anterior é incorporado ao capital e também rende juros no próximo período.</p>

            <h3>💸 Desconto</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <p>Operação de abatimento de dívida paga <strong>antecipadamente</strong>.</p>
                <p><strong>Desconto Simples: D = N × i × n</strong></p>
                <p><strong>Valor Atual: A = N – D</strong></p>
                <em>onde N = valor do título, i = taxa, n = período antecipado</em>
            </div>
        `
    },
    {
        id: "apo_u2_informatica",
        unidade: 2,
        icon: "💻",
        title: "Hardware, Software e Sistema Operacional",
        content: `
            <h3>💻 Hardware — A Parte Física</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Dispositivos de Entrada:</strong> teclado, mouse, scanner, câmera digital<br>
                <strong>Processamento:</strong> processador (CPU), memória RAM, placa-mãe<br>
                <strong>Dispositivos de Saída:</strong> monitor, impressora, caixas de som<br>
                <strong>Armazenamento (não volátil):</strong> HD, SSD, pen drive, CD/DVD
            </div>

            <h3>⌨️ Funções do Teclado</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;font-family:monospace;font-size:0.85rem;">
                <strong>ESC</strong> → Cancela uma operação<br>
                <strong>F1</strong> → Abre ajuda (no Windows)<br>
                <strong>TAB</strong> → Move cursor (texto) / muda célula (planilha)<br>
                <strong>CAPS LOCK</strong> → Trava letras em MAIÚSCULA<br>
                <strong>SHIFT</strong> → Letra maiúscula temporária / símbolos superiores<br>
                <strong>CTRL</strong> → Combinado com outra tecla: atalho de comando<br>
                <strong>ALT</strong> → Combinado com letra: acessa menu<br>
                <strong>WIN</strong> → Abre menu Iniciar<br>
                <strong>PRINT SCREEN</strong> → Captura a tela<br>
                <strong>DELETE</strong> → Apaga o texto à direita do cursor<br>
                <strong>HOME</strong> → Vai ao início da linha<br>
                <strong>END</strong> → Vai ao final da linha<br>
                <strong>PAGE UP / DOWN</strong> → Sobe/desce a página
            </div>

            <h3>📦 Unidades de Medida</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Bit:</strong> Menor unidade (0 ou 1)</li>
                    <li><strong>Byte:</strong> 8 bits = 1 caractere</li>
                    <li><strong>KiloByte (KB):</strong> 1.024 Bytes</li>
                    <li><strong>MegaByte (MB):</strong> 1.024 KB</li>
                    <li><strong>GigaByte (GB):</strong> 1.024 MB</li>
                </ul>
            </div>

            <h3>🖥️ Software — A Parte Lógica</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Sistema Operacional:</strong> Interface entre usuário e hardware. Gerencia todos os recursos. Ex: Windows, Linux</li>
                    <li><strong>Aplicativos de Escritório:</strong> Word, Excel, PowerPoint (Microsoft Office) / Writer, Calc, Impress (LibreOffice)</li>
                    <li><strong>Aplicativos de Gestão:</strong> ERP, sistemas específicos de empresas</li>
                </ul>
            </div>

            <h3>🔒 Segurança da Informação</h3>
            <div style="background:var(--error-container);color:var(--on-error-container);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Vírus:</strong> Programa malicioso que infecta arquivos e sistemas</li>
                    <li><strong>Antivírus:</strong> Programa que detecta e elimina vírus (Norton, AVG, Avast)</li>
                    <li><strong>Criptografia:</strong> Transforma mensagem em código ilegível usando "chave secreta"</li>
                    <li><strong>Firewall:</strong> Barreira que controla o tráfego entre redes, bloqueando acessos não autorizados</li>
                    <li><strong>Segurança da Informação:</strong> Garante integridade, confiabilidade e disponibilidade das informações</li>
                </ul>
            </div>
        `
    },

    // ═══════════════════════════════════════════════════════════════
    // UNIDADE 3 — GESTÃO ORGANIZACIONAL: PAPEL DO AUXILIAR ADMIN
    // ═══════════════════════════════════════════════════════════════
    {
        id: "apo_u3_rotinas",
        unidade: 3,
        icon: "🗂️",
        title: "Rotinas de Escritório e Organização",
        content: `
            <h3>🗂️ Rotinas de Escritório</h3>
            <p>A rotina de escritório é fundamental para o bom funcionamento administrativo. As principais atividades do Auxiliar Administrativo incluem:</p>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li>✅ Preparar expedientes administrativos sob orientação dos superiores</li>
                    <li>✅ Operar equipamentos: telefones, fax, computadores, copiadoras, projetores</li>
                    <li>✅ Controlar entrada e saída de materiais e sua distribuição</li>
                    <li>✅ Manter arquivos e documentos organizados</li>
                    <li>✅ Contribuir para manter o ambiente de trabalho limpo e saudável</li>
                    <li>✅ Redigir cartas, memorandos, ofícios e declarações</li>
                    <li>✅ Organizar agendas, receber visitantes, realizar atendimento</li>
                </ul>
            </div>

            <h3>⚖️ Ética Profissional</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <p><strong>Ética</strong> é um conjunto de regras, princípios e maneiras de pensar e expressar que envolvem integridade, tolerância e honestidade.</p>
                <p>A ética <strong>não se confunde com moral</strong>: a moral é a regulação dos valores de determinada sociedade; a ética é a <em>reflexão crítica sobre a moralidade</em>.</p>
            </div>
            <div style="background:var(--primary-container);color:var(--on-primary-container);border-radius:8px;padding:12px;margin:8px 0;">
                <strong>Ser profissional ético significa:</strong>
                <ul>
                    <li>Ser profissional mesmo em situações indesejáveis</li>
                    <li>Ter coragem para assumir seus erros</li>
                    <li>Agir com integridade em qualquer situação</li>
                    <li>Respeitar o sigilo das informações</li>
                </ul>
            </div>
        `
    },
    {
        id: "apo_u3_comunicacao",
        unidade: 3,
        icon: "📡",
        title: "Comunicação Empresarial — Processo e Canais",
        content: `
            <h3>📡 O que é Comunicação Empresarial?</h3>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "A comunicação empresarial consiste num processo de gerenciamento que integra todas as atividades orientadas para o relacionamento entre uma organização e os ambientes interno e externo."
            </blockquote>
            <p>A comunicação só é eficaz quando <strong>a compreensão do receptor coincide com o significado pretendido pelo emissor</strong>.</p>

            <h3>🔄 3 Etapas do Processo de Comunicação</h3>
            <div style="display:grid;gap:10px;margin:12px 0;">
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>1. EMISSOR (Fonte)</strong><br>
                    Quem envia a mensagem. Possui o significado que deseja transmitir e codifica a mensagem.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>2. MENSAGEM (Canal)</strong><br>
                    A ideia transmitida através de um canal. O <em>ruído</em> é qualquer perturbação que distorce ou prejudica a mensagem.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;">
                    <strong>3. RECEPTOR (Destino)</strong><br>
                    Quem recebe e decodifica a mensagem. O <em>feedback</em> é a resposta que o receptor envia ao emissor confirmando o entendimento.
                </div>
            </div>

            <h3>📶 Canais de Comunicação na Empresa</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Verticais Descendentes:</strong> De cima para baixo — chefe para subordinados (ordens, instruções)</li>
                    <li><strong>Verticais Ascendentes:</strong> De baixo para cima — subordinado para chefe (relatórios, feedbacks)</li>
                    <li><strong>Horizontais:</strong> Entre setores ou cargos do mesmo nível hierárquico (memorandos interdepartamentais)</li>
                </ul>
            </div>
        `
    },
    {
        id: "apo_u3_redacao",
        unidade: 3,
        icon: "✍️",
        title: "Redação Empresarial — Documentos Oficiais",
        content: `
            <h3>✍️ Tipos de Documentos Empresariais/Oficiais</h3>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📬 Carta Comercial</strong><br>
                Texto empresarial de simples organização e envio. Estrutura: <em>local e data, destinatário, vocativo, assunto/contexto, despedida, assinatura.</em>
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📑 Memorando</strong><br>
                Comunicação <strong>interna</strong>, entre setores de uma mesma organização. Usado para encaminhar, solicitar ou distribuir informações.
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📨 Ofício</strong><br>
                Correspondência <strong>oficial</strong>, originalmente usada em órgãos públicos. Comunicação entre autoridades ou órgão e o cidadão. Estrutura: número, local/data, destinatário, assunto, corpo, fecho ("Atenciosamente"), assinatura.
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📝 Requerimento</strong><br>
                Pedido escrito feito por um <strong>cidadão ou servidor a uma autoridade pública</strong>. Redigido na 3ª pessoa. Estrutura: invocação, preâmbulo (identificação), texto (pedido), fecho ("Nestes termos, pede deferimento."), data, assinatura.
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📋 Ata</strong><br>
                Registro do que ocorreu em uma <strong>reunião</strong>. Não pode ter rasuras (erros: "digo" ou "em tempo"). Escrita em seguida, sem espaços em branco. Verbo no pretérito (passado). Assinada por todos os presentes.
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📊 Relatório</strong><br>
                Exposição de como foi realizado um trabalho ou ocorreu um fato. Estrutura: folha de rosto (título, autor, destinatário), sumário, introdução, desenvolvimento, conclusão.
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📜 Declaração</strong><br>
                Instrumento que afirma a veracidade de um fato. Usada para certificar dados sobre uma pessoa.
            </div>

            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:10px 0;">
                <strong>📃 Procuração</strong><br>
                Documento pelo qual uma pessoa (outorgante) <strong>transfere poderes a outra (procurador)</strong> para praticar atos em seu nome.
            </div>

            <div style="margin-top:12px;background:var(--primary-container);color:var(--on-primary-container);border-radius:8px;padding:12px;">
                <strong>💡 Tabela comparativa:</strong><br>
                Ofício → entre autoridades / órgão ↔ cidadão<br>
                Memorando → interno (mesmo órgão, setores diferentes)<br>
                Requerimento → cidadão/servidor → autoridade<br>
                Ata → registro de reunião
            </div>
        `
    },
    {
        id: "apo_u3_arquivos",
        unidade: 3,
        icon: "🗃️",
        title: "Sistemas de Documentação e Arquivo",
        content: `
            <h3>🗃️ Definição de Arquivo</h3>
            <blockquote style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 12px 0; font-style: italic;">
                "Arquivo é o conjunto de documentos que, independentemente da natureza ou do suporte, são reunidos por acumulação ao longo das atividades de pessoas físicas ou jurídicas, públicas ou privadas." (AAB)
            </blockquote>

            <h3>📁 Ciclo Vital dos Documentos (3 Fases)</h3>
            <div style="display:grid;gap:10px;margin:12px 0;">
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;border-left:4px solid #4CAF50;">
                    <strong>1ª Fase — Arquivo Corrente (Ativo)</strong><br>
                    Documentos em uso <strong>frequente</strong>, consultados regularmente. Ficam no próprio setor produtor.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;border-left:4px solid #FF9800;">
                    <strong>2ª Fase — Arquivo Intermediário (Semiativo)</strong><br>
                    Documentos de uso <strong>eventual</strong>. Aguardam prazo legal antes de decisão final. Podem ser transferidos para depósitos mais distantes.
                </div>
                <div style="background:var(--surface-variant);border-radius:8px;padding:12px;border-left:4px solid #9C27B0;">
                    <strong>3ª Fase — Arquivo Permanente (Inativo)</strong><br>
                    Documentos de <strong>valor histórico e cultural</strong>. Guardados definitivamente. Ex.: documentos fundadores da cidade.
                </div>
            </div>

            <h3>📂 Métodos de Arquivamento</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Alfabético:</strong> por nome — mais simples e direto</li>
                    <li><strong>Numérico:</strong> por número — precisa de índice auxiliar</li>
                    <li><strong>Cronológico:</strong> por data — contratos, correspondências</li>
                    <li><strong>Geográfico:</strong> por local — estado, cidade, região</li>
                    <li><strong>Temático (Assunto):</strong> por conteúdo/tema</li>
                    <li><strong>Alfanumérico (Misto):</strong> combina letras e números</li>
                </ul>
            </div>

            <h3>📌 Destinação Final dos Documentos</h3>
            <div style="background:var(--surface-variant);border-radius:8px;padding:12px;margin:8px 0;">
                <ul>
                    <li><strong>Eliminação:</strong> Descarte após prazo legal expirado</li>
                    <li><strong>Recolhimento:</strong> Transferência para arquivo permanente</li>
                </ul>
            </div>

            <h3>🏢 Classificação dos Arquivos por Origem</h3>
            <ul>
                <li><strong>Públicos:</strong> Federal, Estadual, Municipal</li>
                <li><strong>Institucionais:</strong> Escolas, igrejas, associações</li>
                <li><strong>Comerciais:</strong> Empresas, corporações</li>
                <li><strong>Pessoais:</strong> Fotos de família, trabalhos</li>
                <li><strong>Especializados:</strong> Arquivos médicos, de imprensa, literários</li>
            </ul>
        `
    }
];
