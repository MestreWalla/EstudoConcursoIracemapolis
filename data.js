/* Banco de Dados: Agente Comunitário de Saúde - Edital 001/2026 */

// GERAIS = 'gerais'
// ESPECIFICOS = 'especificos'
// PORTUGUES = 'portugues'
// MATEMATICA = 'matematica'

const summaries = [
    // ESPECÍFICOS
    {
        id: "esp_sus",
        subject: "especificos",
        title: "Princípios do SUS",
        content: `
            <h3>Diretrizes (Art. 198 CF)</h3>
            <ul>
                <li><strong>Descentralização</strong>: Direção única em cada esfera de governo.</li>
                <li><strong>Atendimento Integral</strong>: Prioridade para atividades preventivas, sem prejuízo dos serviços assistenciais.</li>
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
                <li>Visitas domiciliares periódicas e exclusivas na área de atuação.</li>
                <li>Cadastramento de todas as pessoas da microárea.</li>
                <li>Acompanhamento de gestantes, idosos e doentes crônicos.</li>
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
                <li><strong>Notificação Compulsória</strong>: Obrigação legal de comunicar aos governos os casos suspeitos (ex: Dengue, Sarampo).</li>
            </ul>
        `,
        relevance: "baixa"
    },
    // GERAIS
    {
        id: "ger_hist_origem",
        subject: "gerais",
        title: "Fundação e Nomes Antigos",
        content: `
            <p>Considera-se o ano de <strong>1891 como a fundação</strong> do povoado de <strong>Santa Cruz da Boa Vista</strong>, apelidado de <strong>"Bate Pau"</strong> (uma alusão à dança de escravos no Morro Azul).</p>
            <ul>
                <li><strong>1912:</strong> Primeira escola, com a chegada da professora Dona Constantina Vaz.</li>
                <li><strong>1915:</strong> Família Simões (Capitão Paulo Simões inaugurou a famosa "Farmácia Veado").</li>
                <li><strong>1918:</strong> Família Ometto compra a Fazenda Aparecida, trazendo a energia elétrica para a vila.</li>
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
                <li><strong>Gaudino Gonçalves de Lima:</strong> Em 1930, reivindicou um cemitério para de não precisarem levar corpos de carroça, que teve terras doadas por José Levy.</li>
                <li><strong>José Chinellato:</strong> Primeiro professor de adultos (1937) e viria a ser o <u>primeiro prefeito</u> da cidade.</li>
                <li><strong>Dona Quininha e Eunice:</strong> Protagonistas do primeiro casamento de Iracemápolis no cartório em 1924.</li>
            </ul>
        `,
        relevance: "média"
    },
    {
        id: "ger_hist_nome",
        subject: "gerais",
        title: "Significado do Nome",
        content: `
            <p>Em 1923, o Governador Washington Luís eleva o local a Distrito de Paz, nomeado <strong>Iracemápolis</strong> (em homenagem à Fazenda Iracema do Coronel José Levy).</p>
            <ul>
                <li><strong>Iracema:</strong> Lábios de mel (indígena).</li>
                <li><strong>Polis:</strong> Cidade (grego).</li>
                <li>O adjetivo pátrio correto seria <em>Iracemapolitano</em>, mas popularizou-se <strong>Iracemapolense</strong>.</li>
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
                <li><strong>Data da Lei (Nº 2.456):</strong> 31 de dezembro de 1953.</li>
                <li><strong>Instalação Oficial:</strong> 1º de janeiro de 1954, data em que passa a ter governo próprio desmembrado de Limeira.</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "ger_lei2",
        subject: "gerais",
        title: "Lei: Poder Executivo",
        content: `
            <p>O Poder Executivo é exercido pelo Prefeito de Iracemápolis. O mandato é de 4 anos e para concorrer precisa ter o mínimo de 21 anos completos.</p>
        `,
        relevance: "baixa"
    },
    // PORTUGUÊS
    {
        id: "por_crase",
        subject: "portugues",
        title: "Regras de Crase (À)",
        content: `
            <h3>Quando NÃO usar a Crase:</h3>
            <ul>
                <li>Antes de palavras masculinas (ex: andar a pé).</li>
                <li>Antes de verbos (ex: começar a cantar).</li>
                <li>Entre palavras repetidas (ex: dia a dia).</li>
                <li>Antes de pronomes no geral.</li>
            </ul>
        `,
        relevance: "alta"
    },
    {
        id: "por_ort",
        subject: "portugues",
        title: "Uso dos Porquês",
        content: `
            <ul>
                <li><strong>Por que</strong>: Pergunta no início/meio ou motivo ("pelo qual").</li>
                <li><strong>Por quê</strong>: Pergunta no final da frase.</li>
                <li><strong>Porque</strong>: Resposta, explicação ou causa.</li>
                <li><strong>Porquê</strong>: Substantivo ("o motivo"), vem acompanhado de artigo (O/Um).</li>
            </ul>
        `,
        relevance: "alta"
    },
    // MATEMÁTICA
    {
        id: "mat_regra3",
        subject: "matematica",
        title: "Regra de Três Simples",
        content: `
            <p>Se as grandezas aumentam iguais, são <strong>Diretas</strong> (multiplica em cruz).</p>
            <p>Se uma aumenta e a outra diminui, são <strong>Inversas</strong> (multiplica reto horizontametne). Ex: Trabalhadores vs Tempo.</p>
        `,
        relevance: "alta"
    },
    {
        id: "mat_juros",
        subject: "matematica",
        title: "Porcentagem Rápidas",
        content: `
            <p>Dicas práticas:</p>
            <ul>
                <li>10% = Ande com a vírgula 1 casa para a esquerda.</li>
                <li>1% = Ande 2 casas.</li>
                <li>50% = Dividir na metade exata.</li>
            </ul>
        `,
        relevance: "alta"
    }
];

const quizDb = [
    // ESPECÍFICOS
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
        explanation: "O diagnóstico e o cadastramento das famílias é a função primária do ACS para identificar necessidades."
    },
    {
        id: "q_esp2",
        subject: "especificos",
        question: "Os princípios doutrinários do Sistema Único de Saúde (SUS) englobam:",
        options: [
            "Regionalização, Hierarquização e Decentralização.",
            "Universalidade, Integralidade e Equidade.",
            "Centralização, Participação e Fundo Privado.",
            "Eficácia, Previdência e Eficiência."
        ],
        correctIndex: 1,
        explanation: "Esses 3 (UIE) são a base filosófica. Todos têm direito (U), por completo (I), dando mais a quem precisa mais (E)."
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
        explanation: "A convivência do agente com a própria comunidade é a força motriz do programa ACS, logo é pré-requisito residencial."
    },
    {
        id: "q_esp4",
        subject: "especificos",
        question: "Doença de Notificação Compulsória (Imediata) significa que:",
        options: [
            "O agente de saúde deve guardar segredo absoluto e não avisar o SUS.",
            "O profissional de saúde é obrigado a reportar à secretaria de saúde qualquer suspeita para rápida ação.",
            "Não precisa ser avisado se já tem em outra cidade.",
            "Só deve ser avisada após a morte do paciente."
        ],
        correctIndex: 1,
        explanation: "É uma obrigação legal comunicar (notificar) rapidamente para evitar expansão da epidemia."
    },
    
    // GERAIS
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
        explanation: "A Lei Orgânica é a constituição da cidade."
    },
    {
        id: "q_g2",
        subject: "gerais",
        question: "Antes de tornar-se oficialmente o distrito de Iracemápolis e se separar de Limeira, qual era o nome do antigo bairro rural e seu famoso apelido?",
        options: [
            "Bairro da Cachoeirinha, apelidado Terra Doce.",
            "Bairro de Santa Cruz da Boa Vista, apelidado de Bate Pau.",
            "Fazenda Iracema, apelidada de Lábios de Mel.",
            "Vila das Oliveiras, apelidada de Poli."
        ],
        correctIndex: 1,
        explanation: "No fim do século 19 o lugarejo de 200 habitantes se chamava Santa Cruz e o apelido 'Bate Pau' remetia a uma dança dos escravos alojados no Morro Azul."
    },
    {
        id: "q_g3",
        subject: "gerais",
        question: "A figura política que encaminhou a moção requerendo a independência de Iracemápolis enquanto ainda era um distrito de Limeira e lutou pela emancipação foi:",
        options: [
            "Coronel José Levy",
            "José Chinellato",
            "Governador Washington Luís",
            "Paulo Aparecido Simões"
        ],
        correctIndex: 3,
        explanation: "Paulo Aparecido Simões era vereador em Limeira e foi a grande figura de importância que encampou o processo político da emancipação até a lei de Dez/1953."
    },
    {
        id: "q_g5",
        subject: "gerais",
        question: "Considerado oficialmente o ano de fundação do povoado de Santa Cruz da Boa Vista (o embrião de Iracemápolis), marque a alternativa correta:",
        options: [
            "1891",
            "1923",
            "1953",
            "1912"
        ],
        correctIndex: 0,
        explanation: "1891 é a data marco da fundação do povoado de Santa Cruz da Boa Vista. 1923 foi a elevação à Distrito e 1953 a Emancipação do Munícipio."
    },
    {
        id: "q_g6",
        subject: "gerais",
        question: "Na primeira metade do século XX, muitas figuras foram pioneiras em serviços de Iracemápolis. Qual foi o nome do primeiro professor de alfabetização de adultos e o primeiro prefeito da cidade?",
        options: [
            "Gaudino Gonçalves de Lima",
            "Constante Ometto",
            "Paulo Aparecido Simões",
            "José Chinellato"
        ],
        correctIndex: 3,
        explanation: "O Sr. José Chinellato foi o primeiro professor de adultos em 1937 e, mais tarde após a emancipação, consagrou-se também como o primeiro prefeito de Iracemápolis."
    },
    
    // PORTUGUÊS
    {
        id: "q_p1",
        subject: "portugues",
        question: "Assinale a alternativa em que o uso da crase está CORRETO no padrão culto:",
        options: [
            "João gosta de andar à pé nos finais de semana.",
            "Vou à Brasília todos os meses trabalhar.",
            "Entreguei os exames à Assistente Social do posto.",
            "Assistimos à muitos filmes naquela noite."
        ],
        correctIndex: 2,
        explanation: "'Assistente' aceita o artigo 'a', e o verbo entrega pede a preposição 'a'. (Pé é masculino, Brasília não aceita artigo exceto especificada e 'muitos' é masculino e plural)."
    },
    {
        id: "q_p2",
        subject: "portugues",
        question: "Como se escreve corretamente a lacuna: '- Você não vai ao postinho hoje ____?'",
        options: [
            "por que",
            "porque",
            "porquê",
            "por quê"
        ],
        correctIndex: 3,
        explanation: "Pergunta no final absoluto da frase exige por quê separado e com acento circunflexo para forte entonação."
    },
    
    // MATEMÁTICA
    {
        id: "q_m1",
        subject: "matematica",
        question: "Em uma UBS, 10 agentes aplicam vacinas num mutirão e demoram 8 horas. Se houvesse 16 agentes, trabalhando com o mesmo ritmo, em quantas horas fariam o mesmo serviço?",
        options: [
            "12,8 horas",
            "4 horas",
            "5 horas",
            "6 horas"
        ],
        correctIndex: 2,
        explanation: "Regra de 3 inversamente proporcional. Agentes(10) * Horas(8) = Agentes(16) * Horas(X). 80 = 16X. X = 5 horas."
    },
    {
        id: "q_m2",
        subject: "matematica",
        question: "Um frasco do medicamento X custa R$ 150,00 no sistema particular e sofreu 20% de desconto. Qual o preço final com desconto?",
        options: [
            "R$ 130,00",
            "R$ 120,00",
            "R$ 140,00",
            "R$ 110,00"
        ],
        correctIndex: 1,
        explanation: "10% de 150 é 15 (corta o zero). 20% é 15x2 = 30. Desconto: 150 - 30 = R$ 120,00."
    }
];
