// Estado da Aplicação
const appState = {
    currentView: 'summaries',
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0
    },
    stats: {
        correct: 0,
        wrong: 0
    }
};

// Áudio e Vibração 
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSound(type) {
    if(audioCtx.state === 'suspended') audioCtx.resume();
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const now = audioCtx.currentTime;
        
        if (type === 'tick') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
            if(navigator.vibrate) navigator.vibrate(15);
        } else if (type === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.setValueAtTime(659.25, now + 0.1);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
            if(navigator.vibrate) navigator.vibrate([30, 50, 30]);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
            if(navigator.vibrate) navigator.vibrate([150]);
        } else if (type === 'finish') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.setValueAtTime(554.37, now + 0.1);
            osc.frequency.setValueAtTime(659.25, now + 0.2);
            osc.frequency.setValueAtTime(880, now + 0.3);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
            osc.start(now);
            osc.stop(now + 0.8);
            if(navigator.vibrate) navigator.vibrate([50, 50, 50, 50, 200]);
        }
    } catch(e) {}
}

// Elementos do DOM
const appContent = document.getElementById('app-content');
const navItems = document.querySelectorAll('.nav-item');
const themeBtn = document.getElementById('theme-toggle');

// Inicializando Tema Escuro
function initTheme() {
    const saved = localStorage.getItem('agentHealthTheme');
    if (saved === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeBtn.addEventListener('click', () => {
        playSound('tick');
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('agentHealthTheme', 'light');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('agentHealthTheme', 'dark');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Filtro Multimatéria Global
let currentSubject = 'all';

function bindChips() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            playSound('tick');
            
            // Remove active dos irmãos no mesmo container
            const container = e.currentTarget.closest('.chip-container');
            if (container) {
                 container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                 e.currentTarget.classList.add('active');
            }
            
            currentSubject = e.currentTarget.getAttribute('data-subject');
            
            // Recarrega a view de acordo com o lugar onde estavamos
            if (document.getElementById('summaries-list')) {
                initSummaries();
                const subtitles = {
                    'all': 'Exibindo todas as matérias exigidas.',
                    'especificos': 'Conhecimentos Específicos do ACS.',
                    'portugues': 'Língua Portuguesa para o Edital.',
                    'matematica': 'Matemática e Raciocínio (Edital).',
                    'gerais': 'Lei e História de Iracemápolis.'
                };
                const sub = document.getElementById('subtitle-summaries');
                if (sub) sub.textContent = subtitles[currentSubject] || subtitles['all'];
            }
            
            if (document.getElementById('quiz-container')) {
                initQuiz();
            }
        });
    });
}

const templates = {
    summaries: document.getElementById('tpl-summaries').innerHTML,
    quiz: document.getElementById('tpl-quiz').innerHTML,
    lei: document.getElementById('tpl-lei').innerHTML,
    cidade: document.getElementById('tpl-cidade').innerHTML
};

// Inicialização
function init() {
    initTheme();
    loadStats();
    setupNavigation();
    renderView('summaries');
}

// Navegação
function setupNavigation() {
    navItems.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            playSound('tick');
            if (appState.currentView === target) return;
            
            navItems.forEach(n => n.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            appState.currentView = target;
            renderView(target);
        });
    });
}

function renderView(view) {
    appContent.innerHTML = templates[view];
    window.scrollTo(0,0);
    
    currentSubject = 'all'; // Reseta ao trocar de View para All 
    bindChips();
    
    if (view === 'summaries') initSummaries();
    if (view === 'quiz') initQuiz();
    if (view === 'stats') renderStats();
    if (view === 'lei') initLei();
}

// Resumos
function initSummaries() {
    const list = document.getElementById('summaries-list');
    list.innerHTML = '';
    
    // Filtro!
    let filteredSummaries = summaries;
    if (currentSubject !== 'all') {
        filteredSummaries = summaries.filter(s => s.subject === currentSubject);
    }
    
    if (filteredSummaries.length === 0) {
        list.innerHTML = '<p style="text-align:center; margin-top: 20px;">Nenhum resumo nesta matéria ainda.</p>';
        return;
    }
    
    filteredSummaries.forEach(item => {
        const div = document.createElement('div');
        div.className = 'summary-card';
        div.innerHTML = `
            <div class="summary-header">
                <div>
                    <span class="badge ${item.relevance || 'baixa'}">${item.relevance || 'baixa'} probabilidade</span>
                    <h3 style="margin-top: 5px;">${item.title}</h3>
                </div>
                <i class="fas fa-chevron-down toggle-icon"></i>
            </div>
            <div class="summary-content">
                ${item.content}
            </div>
        `;
        
        div.addEventListener('click', () => {
            playSound('tick');
            div.classList.toggle('expanded');
        });
        list.appendChild(div);
    });
}

// Lei na Íntegra (Banco de Dados)
function initLei() {
    const list = document.getElementById('lei-content');
    const input = document.getElementById('lei-search');
    
    function isHeadingName(line) {
        // Retorna true se a linha é um nome descritivo (não um marcador nem artigo)
        return line
            && !line.startsWith('Art.')
            && !line.startsWith('TÍTULO')
            && !line.startsWith('CAPÍTULO')
            && !line.startsWith('Seção')
            && !line.startsWith('§')
            && !line.startsWith('PREÂMBULO')
            && !line.startsWith('I -')
            && !line.startsWith('I–')
            && line.length < 80;
    }

    function renderBlocks(filterText = "") {
        list.innerHTML = "";
        const termo = filterText.toLowerCase();
        
        let cont = 0;
        let skipNext = false;

        for (let i = 0; i < leiCompleta.length; i++) {
            if (skipNext) { skipNext = false; continue; }

            const par = leiCompleta[i];
            const nextPar = leiCompleta[i + 1] || '';

            // Verifica se deve mesclar com a próxima linha (nome descritivo)
            const shouldMerge = isHeadingName(nextPar);

            // Filtro de busca: considera o bloco inteiro (rótulo + nome)
            const fullText = shouldMerge ? par + ' ' + nextPar : par;
            if (termo && !fullText.toLowerCase().includes(termo)) continue;

            const div = document.createElement('div');
            div.className = 'lei-block';

            if (par.startsWith('TÍTULO')) {
                div.classList.add('destaque', 'lei-titulo');
                div.innerHTML = shouldMerge
                    ? `<span class="lei-label">TÍTULO</span> ${par.replace('TÍTULO', '').trim()} <span class="lei-nome">${nextPar}</span>`
                    : `<span class="lei-label">TÍTULO</span> ${par.replace('TÍTULO', '').trim()}`;
                if (shouldMerge) skipNext = true;

            } else if (par.startsWith('CAPÍTULO')) {
                div.classList.add('destaque', 'lei-capitulo');
                div.innerHTML = shouldMerge
                    ? `<span class="lei-label">CAPÍTULO</span> ${par.replace('CAPÍTULO', '').trim()} <span class="lei-nome">${nextPar}</span>`
                    : `<span class="lei-label">CAPÍTULO</span> ${par.replace('CAPÍTULO', '').trim()}`;
                if (shouldMerge) skipNext = true;

            } else if (par.startsWith('Seção')) {
                div.classList.add('lei-secao');
                div.innerHTML = shouldMerge
                    ? `<em><strong>${par}</strong> — ${nextPar}</em>`
                    : `<em><strong>${par}</strong></em>`;
                if (shouldMerge) skipNext = true;

            } else if (par.startsWith('Art.')) {
                div.classList.add('destaque');
                div.textContent = par;

            } else {
                div.textContent = par;
            }

            list.appendChild(div);

            if (termo) {
                cont++;
                if (cont > 150) break;
            }
        }
    }
    
    // Constrói o Índice Estrutural Rápido M3
    const indexContainer = document.getElementById('lei-index');
    if (indexContainer && indexContainer.children.length === 0) {
        let indexHtml = '';
        leiCompleta.forEach((par, idx) => {
            // Pega o nome descritivo da linha seguinte (ex: "DA ORGANIZAÇÃO MUNICIPAL")
            const nextLine = leiCompleta[idx + 1] || '';
            const nome = (!nextLine.startsWith('Art.')
                       && !nextLine.startsWith('CAPÍTULO')
                       && !nextLine.startsWith('TÍTULO')
                       && !nextLine.startsWith('Seção')
                       && !nextLine.startsWith('§')
                       && nextLine.length < 80)
                       ? nextLine : '';

            if (par.startsWith('TÍTULO')) {
                const label = nome ? `${par} — ${nome}` : par;
                indexHtml += `<a href="#" class="index-item titulo" data-idx="${idx}">${label}</a>`;
            } else if (par.startsWith('CAPÍTULO')) {
                const label = nome ? `${par} — ${nome}` : par;
                indexHtml += `<a href="#" class="index-item" data-idx="${idx}">&bull; ${label}</a>`;
            }
        });
        indexContainer.innerHTML = indexHtml;
        
        indexContainer.querySelectorAll('.index-item').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetIdx = parseInt(e.target.dataset.idx);
                // Como não usamos paginação se não tiver busca, os nós no lei-content baterão quase com leiCompleta
                // Para ser seguro, garantimos que o render não está filtrado
                input.value = '';
                renderBlocks('');
                const blocks = list.querySelectorAll('.lei-block');
                if (blocks[targetIdx]) {
                    const y = blocks[targetIdx].getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            });
        });
    }
    
    renderBlocks(); // Carrega tudo inicialmente
    
    // Busca em tempo real
    input.addEventListener('input', (e) => {
        renderBlocks(e.target.value);
    });
}

// Simulado
function initQuiz() {
    renderStats(); // Monta a barra de progresso M3 dentro da pagina de Simulado
    
    let pool = quizDb;
    
    if (currentSubject !== 'all') {
        pool = quizDb.filter(q => q.subject === currentSubject);
    } else {
        // Mocking Proporcional: Pega 15 específicos, 5 gerais, 5 port, 5 mat (mas do que temos)
        // Isso pode ser aprimorado com lógica complexa, por enquanto misturamos tudo
        pool = [...quizDb];
    }
    
    // Embaralhar e pegar 10 questões
    appState.quiz.questions = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
    appState.quiz.currentIndex = 0;
    appState.quiz.score = 0;
    
    const container = document.getElementById('quiz-container');
    if (appState.quiz.questions.length === 0) {
        container.innerHTML = '<p style="text-align:center;">Não há questões suficientes para esta classe ainda no banco.</p>';
        return;
    }
    
    const restartBtn = document.getElementById('restart-quiz-btn');
    if (restartBtn) {
        const newRestart = restartBtn.cloneNode(true);
        restartBtn.parentNode.replaceChild(newRestart, restartBtn);
        newRestart.addEventListener('click', () => { playSound('tick'); initQuiz(); });
    }
    
    const nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', () => { playSound('tick'); nextQuestion(); });
    }
    
    const dStatsBtn = document.getElementById('reset-stats-btn');
    if (dStatsBtn) {
        const newReset = dStatsBtn.cloneNode(true);
        dStatsBtn.parentNode.replaceChild(newReset, dStatsBtn);
        newReset.addEventListener('click', () => {
            if (confirm("Deseja realmente apagar seu histórico?")) {
                appState.stats = { correct: 0, wrong: 0 };
                saveStats();
                renderStats();
            }
        });
    }
    
    showQuestion();
}

function showQuestion() {
    const qData = appState.quiz.questions[appState.quiz.currentIndex];
    const container = document.getElementById('quiz-container');
    const feedback = document.getElementById('quiz-feedback');
    const result = document.getElementById('quiz-result');
    const progressBar = document.getElementById('quiz-progress-bar');
    
    container.classList.remove('hidden');
    feedback.classList.add('hidden');
    result.classList.add('hidden');
    container.innerHTML = '';
    
    // Animar a barra de progresso (calcula o preenchimento do simulado)
    const progPercent = (appState.quiz.currentIndex / appState.quiz.questions.length) * 100;
    progressBar.style.width = `${progPercent}%`;
    
    const h3 = document.createElement('h3');
    h3.className = 'quiz-question';
    h3.textContent = qData.question;
    container.appendChild(h3);
    
    const optsDiv = document.createElement('div');
    optsDiv.className = 'quiz-options';
    
    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleAnswer(index, btn, optsDiv));
        optsDiv.appendChild(btn);
    });
    
    container.appendChild(optsDiv);
}

function handleAnswer(selectedIndex, btnElement, optsDiv) {
    const qData = appState.quiz.questions[appState.quiz.currentIndex];
    const isCorrect = selectedIndex === qData.answerIndex;
    
    // Desabilitar botões
    const btns = optsDiv.querySelectorAll('button');
    btns.forEach((b, i) => {
        b.disabled = true;
        if (i === qData.answerIndex) b.classList.add('correct');
        else if (i === selectedIndex && !isCorrect) b.classList.add('wrong');
    });
    
    // Atualizar stats gbobais
    if (isCorrect) {
        playSound('correct');
        appState.quiz.score++;
        appState.stats.correct++;
        showFeedback(true, "Excelente! " + qData.explanation);
    } else {
        playSound('wrong');
        appState.stats.wrong++;
        showFeedback(false, "Incorreto. A lei diz que: " + qData.explanation);
    }
    
    saveStats();
}

function showFeedback(isCorrect, text) {
    const fb = document.getElementById('quiz-feedback');
    const fbTitle = fb.querySelector('.feedback-title');
    const fbText = fb.querySelector('.feedback-text');
    const fbIcon = fb.querySelector('.feedback-icon i');
    
    fb.className = `feedback-card ${isCorrect ? 'success' : 'error'}`;
    fbTitle.textContent = isCorrect ? 'Correto!' : 'Ops, você errou!';
    fbText.textContent = text;
    fbIcon.className = isCorrect ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    
    fb.classList.remove('hidden');
}

function nextQuestion() {
    appState.quiz.currentIndex++;
    if (appState.quiz.currentIndex < appState.quiz.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-feedback').classList.add('hidden');
    
    const result = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');
    const message = document.getElementById('score-message');
    
    const total = appState.quiz.questions.length;
    const percentage = Math.round((appState.quiz.score / total) * 100);
    
    result.classList.remove('hidden');
    scoreText.textContent = `${percentage}%`;
    playSound('finish');
    
    if (percentage === 100) message.textContent = "Gabaritou! Pronto para a posse!";
    else if (percentage >= 70) message.textContent = "Ótimo desempenho! Continue revisando.";
    else message.textContent = "Precisa estudar mais. Foco nos resumos de alta probabilidade!";
}

// Estatísticas
function loadStats() {
    const saved = localStorage.getItem('agentHealthStats');
    if (saved) {
        appState.stats = JSON.parse(saved);
    }
}

function saveStats() {
    localStorage.setItem('agentHealthStats', JSON.stringify(appState.stats));
}

function renderStats() {
    const tc = appState.stats.correct;
    const tw = appState.stats.wrong;
    const total = tc + tw;
    const acc = total > 0 ? Math.round((tc / total) * 100) : 0;
    
    const sc = document.getElementById('stat-correct');
    const sw = document.getElementById('stat-wrong');
    const sa = document.getElementById('stat-accuracy');
    const mini = document.getElementById('mini-stats');
    
    if (sc && sw && sa) {
        sc.textContent = tc;
        sw.textContent = tw;
        sa.textContent = acc + '%';
    }
    
    if (mini) {
        if (total > 0) {
            mini.innerHTML = `<span class="color-green">${tc} ✔</span>  <span class="color-red">${tw} ✖</span>  <span class="color-blue">${acc}%</span>`;
        } else {
            mini.innerHTML = `<span style="font-weight: 400;">(Sem dados)</span>`;
        }
    }
}

// Iniciar app
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // FAB Scroll Top
    const fab = document.getElementById('fab-top');
    window.addEventListener('scroll', () => {
        if (!fab) return;
        if ((appState.currentView === 'lei' || appState.currentView === 'cidade') && window.scrollY > 300) {
            fab.classList.remove('hidden');
        } else {
            fab.classList.add('hidden');
        }
    });

    if (fab) {
        fab.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
