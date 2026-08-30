/**
 * DETRAN QUIZ — App Controller
 * Gerencia navegação, renderização de telas e interações
 */

const App = (() => {
    // Referências DOM
    const screens = {
        home: document.getElementById("screen-home"),
        categories: document.getElementById("screen-categories"),
        quiz: document.getElementById("screen-quiz"),
        result: document.getElementById("screen-result"),
        stats: document.getElementById("screen-stats")
    };

    let currentScreen = "home";
    let pendingMode = "study"; // modo selecionado antes de categorias
    let selectedAnswer = null;

    // ============================================================
    // NAVEGAÇÃO
    // ============================================================

    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove("active"));
        if (screens[name]) {
            screens[name].classList.add("active");
            currentScreen = name;
            window.scrollTo(0, 0);
        }
    }

    function goHome() {
        updateHomeSummary();
        showScreen("home");
    }

    // ============================================================
    // TEMA
    // ============================================================

    function initTheme() {
        const theme = Storage.getTheme();
        applyTheme(theme);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        const btn = document.getElementById("btn-theme");
        btn.textContent = theme === "dark" ? "☀️" : "🌙";
        // Update theme-color meta
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = theme === "dark" ? "#0c0c18" : "#f4f5f9";
        }
    }

    function toggleTheme() {
        const current = Storage.getTheme();
        const next = current === "dark" ? "light" : "dark";
        Storage.saveTheme(next);
        applyTheme(next);
    }

    // ============================================================
    // HOME
    // ============================================================

    function updateHomeSummary() {
        const summary = Stats.getHomeSummary();
        const statsEl = document.getElementById("home-stats");
        const reviewEl = document.getElementById("home-review");

        if (summary) {
            document.getElementById("home-total").textContent = Stats.formatNumber(summary.answered);
            document.getElementById("home-correct").textContent = Stats.formatNumber(summary.correct);
            document.getElementById("home-wrong").textContent = Stats.formatNumber(summary.wrong);
            document.getElementById("home-percentage").textContent = summary.percentage + "%";
            statsEl.style.display = "";

            if (summary.reviewCount > 0) {
                document.getElementById("home-review-count").textContent = summary.reviewCount;
                reviewEl.style.display = "";
            } else {
                reviewEl.style.display = "none";
            }
        } else {
            statsEl.style.display = "none";
            reviewEl.style.display = "none";
        }
    }

    // ============================================================
    // CATEGORIAS
    // ============================================================

    function showCategories(mode) {
        pendingMode = mode;
        const container = document.getElementById("category-list");
        const subtitle = document.getElementById("categories-subtitle");

        subtitle.textContent = mode === "study"
            ? "Selecione uma categoria para o modo estudo ou estude todas."
            : "Selecione uma categoria para o simulado ou faça com todas.";

        // Contar questões por categoria
        const counts = {};
        let total = 0;
        questions.forEach(q => {
            counts[q.category] = (counts[q.category] || 0) + 1;
            total++;
        });

        let html = `
            <button class="category-card" data-category="all" aria-label="Todas as categorias">
                <span class="category-icon">📚</span>
                <span class="category-name">Todas as categorias</span>
                <span class="category-count">${total} questões</span>
            </button>
        `;

        const categoryOrder = [
            CATEGORIES.LEGISLACAO,
            CATEGORIES.SINALIZACAO,
            CATEGORIES.DIRECAO_DEFENSIVA,
            CATEGORIES.PRIMEIROS_SOCORROS,
            CATEGORIES.MECANICA,
            CATEGORIES.MEIO_AMBIENTE,
            CATEGORIES.CIDADANIA
        ];

        categoryOrder.forEach(cat => {
            if (counts[cat]) {
                const icon = Stats.getCategoryIcon(cat);
                html += `
                    <button class="category-card" data-category="${cat}" aria-label="${cat}">
                        <span class="category-icon">${icon}</span>
                        <span class="category-name">${cat}</span>
                        <span class="category-count">${counts[cat]} questões</span>
                    </button>
                `;
            }
        });

        container.innerHTML = html;
        showScreen("categories");
    }

    function handleCategorySelect(category) {
        const cat = category === "all" ? null : category;
        startQuiz(pendingMode, cat);
    }

    // ============================================================
    // QUIZ
    // ============================================================

    function startQuiz(mode, category) {
        const success = Quiz.start(mode, category);

        if (!success) {
            if (mode === "review") {
                // Sem questões para revisar
                showScreen("home");
                return;
            }
            alert("Não há questões suficientes nesta categoria.");
            return;
        }

        selectedAnswer = null;
        updateQuizUI();
        showScreen("quiz");
    }

    function updateQuizUI() {
        const question = Quiz.getCurrentQuestion();
        if (!question) return;

        const progress = Quiz.getProgress();
        const mode = Quiz.getMode();

        // Mode badge
        const badge = document.getElementById("quiz-mode-badge");
        if (mode === "study") {
            badge.textContent = "📖 MODO ESTUDO";
        } else if (mode === "exam") {
            badge.textContent = "📝 SIMULADO";
        } else {
            badge.textContent = "📕 REVISÃO";
        }

        // Progress
        document.getElementById("quiz-progress-text").textContent = `Questão ${progress.current} de ${progress.total}`;
        document.getElementById("quiz-progress-pct").textContent = `${progress.percentage}%`;
        document.getElementById("quiz-progress-fill").style.width = `${progress.percentage}%`;

        // Question image
        const imageContainer = document.getElementById("question-image");
        if (question.image && SIGN_IMAGES[question.image]) {
            imageContainer.innerHTML = SIGN_IMAGES[question.image];
            imageContainer.style.display = "";
        } else {
            imageContainer.innerHTML = "";
            imageContainer.style.display = "none";
        }

        // Category
        const catIcon = Stats.getCategoryIcon(question.category);
        document.getElementById("question-category").textContent = `${catIcon} ${question.category}`;

        // Question text
        document.getElementById("question-text").textContent = question.question;

        // Options
        const letters = ["A", "B", "C", "D"];
        let optionsHtml = "";
        question.options.forEach((opt, i) => {
            optionsHtml += `
                <button class="option-btn" data-index="${i}" aria-label="Alternativa ${letters[i]}: ${opt}">
                    <span class="option-letter">${letters[i]}</span>
                    <span class="option-text">${opt}</span>
                </button>
            `;
        });
        document.getElementById("options-list").innerHTML = optionsHtml;

        // Reset state
        selectedAnswer = null;
        document.getElementById("btn-answer").disabled = true;
        document.getElementById("btn-answer").style.display = "";
        document.getElementById("quiz-nav").style.display = "none";
        document.getElementById("feedback-container").innerHTML = "";

        // Animate question card
        const card = document.getElementById("question-card");
        card.style.animation = "none";
        card.offsetHeight; // trigger reflow
        card.style.animation = "slideUp 0.3s ease";
    }

    function selectOption(index) {
        if (Quiz.isCurrentAnswered()) return;

        selectedAnswer = index;
        const options = document.querySelectorAll(".option-btn");
        options.forEach(opt => {
            opt.classList.remove("selected");
            if (parseInt(opt.dataset.index) === index) {
                opt.classList.add("selected");
            }
        });
        document.getElementById("btn-answer").disabled = false;
    }

    function submitAnswer() {
        if (selectedAnswer === null || Quiz.isCurrentAnswered()) return;

        const result = Quiz.answerCurrent(selectedAnswer);
        if (!result) return;

        const mode = Quiz.getMode();
        const letters = ["A", "B", "C", "D"];

        // Disable all options visually
        const options = document.querySelectorAll(".option-btn");
        options.forEach(opt => {
            const idx = parseInt(opt.dataset.index);
            opt.classList.add("disabled");

            if (mode === "exam") {
                // Exam mode: keep selected highlighted, no correct/wrong reveal
                if (idx !== result.selectedAnswer) {
                    opt.classList.remove("selected");
                    opt.classList.add("neutral");
                }
            } else {
                // Study/Review mode: show correct/wrong feedback
                opt.classList.remove("selected");
                if (idx === result.correctAnswer) {
                    opt.classList.add("correct");
                    opt.innerHTML += `<span class="option-icon" aria-hidden="true">✓</span>`;
                } else if (idx === result.selectedAnswer && !result.isCorrect) {
                    opt.classList.add("wrong");
                    opt.innerHTML += `<span class="option-icon" aria-hidden="true">✕</span>`;
                } else {
                    opt.classList.add("neutral");
                }
            }
        });

        // Hide answer button
        document.getElementById("btn-answer").style.display = "none";

        // Show feedback in study/review mode
        if (mode === "study" || mode === "review") {
            const question = result.question;
            let feedbackHtml = "";

            if (result.isCorrect) {
                feedbackHtml = `
                    <div class="feedback-card correct">
                        <div class="feedback-status correct">✓ CORRETO!</div>
                        <div class="feedback-detail">
                            <strong>Resposta correta:</strong> ${letters[result.correctAnswer]}) ${question.options[result.correctAnswer]}
                        </div>
                        <div class="feedback-explanation">
                            <div class="feedback-explanation-title">💡 POR QUÊ?</div>
                            <div class="feedback-explanation-text">${question.explanation}</div>
                        </div>
                    </div>
                `;
            } else {
                feedbackHtml = `
                    <div class="feedback-card wrong">
                        <div class="feedback-status wrong">✕ INCORRETO</div>
                        <div class="feedback-detail">
                            <strong>Você respondeu:</strong> ${letters[result.selectedAnswer]}) ${question.options[result.selectedAnswer]}
                        </div>
                        <div class="feedback-detail">
                            <strong>Resposta correta:</strong> ${letters[result.correctAnswer]}) ${question.options[result.correctAnswer]}
                        </div>
                        <div class="feedback-explanation">
                            <div class="feedback-explanation-title">💡 POR QUÊ?</div>
                            <div class="feedback-explanation-text">${question.explanation}</div>
                        </div>
                    </div>
                `;
            }

            document.getElementById("feedback-container").innerHTML = feedbackHtml;
        }

        // Show navigation
        const navEl = document.getElementById("quiz-nav");
        const nextBtn = document.getElementById("btn-next");

        if (Quiz.isLastQuestion()) {
            nextBtn.textContent = "Ver Resultado →";
        } else {
            nextBtn.textContent = "Próxima Questão →";
        }

        navEl.style.display = "";
    }

    function nextQuestion() {
        if (Quiz.isLastQuestion()) {
            showResult();
        } else {
            Quiz.next();
            updateQuizUI();
        }
    }

    // ============================================================
    // RESULTADO
    // ============================================================

    function showResult() {
        const results = Quiz.getResults();
        const letters = ["A", "B", "C", "D"];

        // Hero
        let heroHtml = `
            <span class="result-icon" aria-hidden="true">🎯</span>
            <div class="result-score">${results.correct} / ${results.total}</div>
            <div class="result-percentage">${results.percentage}%</div>
        `;

        if (results.mode === "exam") {
            if (results.passed) {
                heroHtml += `
                    <div class="result-badge passed">✓ APROVADO</div>
                    <div class="result-passing-info">Mínimo para aprovação: ${results.passingScore} acertos</div>
                    <div class="result-message">Parabéns! Você está evoluindo. Continue revisando seus erros para garantir sua aprovação.</div>
                `;
            } else {
                heroHtml += `
                    <div class="result-badge failed">✕ NÃO APROVADO</div>
                    <div class="result-passing-info">Mínimo para aprovação: ${results.passingScore} acertos</div>
                    <div class="result-message">Você ainda não chegou ao mínimo, mas seus erros mostram exatamente o que precisa estudar. Continue praticando!</div>
                `;
            }
        } else {
            // Study / review mode
            const pct = parseFloat(results.percentage);
            if (pct >= 80) {
                heroHtml += `<div class="result-message">Excelente desempenho! Continue revisando os erros para dominar o conteúdo.</div>`;
            } else if (pct >= 60) {
                heroHtml += `<div class="result-message">Bom progresso! Revise as questões que errou para melhorar ainda mais.</div>`;
            } else {
                heroHtml += `<div class="result-message">Continue estudando! Revise seus erros e tente novamente.</div>`;
            }
        }

        document.getElementById("result-hero").innerHTML = heroHtml;

        // Wrong answers section
        const errorsSection = document.getElementById("result-errors-section");
        if (results.wrong > 0) {
            let errorsHtml = `
                <button class="result-section-header expanded" id="btn-toggle-errors" aria-expanded="true">
                    <span>🔴 Questões que você errou</span>
                    <span class="count error-count">${results.wrong}</span>
                    <span class="toggle-icon" aria-hidden="true">▼</span>
                </button>
                <div class="result-items" id="result-errors-list">
            `;

            results.wrongAnswers.forEach(ans => {
                const q = ans.question;
                errorsHtml += `
                    <div class="result-error-item">
                        <div class="result-error-question">Questão ${ans.questionIndex + 1}</div>
                        <div class="result-error-text">${q.question}</div>
                        <div class="result-error-answers">
                            <div class="result-error-your">
                                <span class="label">Sua resposta:</span>
                                <span>${letters[ans.selectedAnswer]}) ${q.options[ans.selectedAnswer]}</span>
                            </div>
                            <div class="result-error-correct">
                                <span class="label">Correta:</span>
                                <span>${letters[ans.correctAnswer]}) ${q.options[ans.correctAnswer]}</span>
                            </div>
                        </div>
                        <div class="result-error-explanation">
                            <strong>💡 Explicação:</strong> ${q.explanation}
                        </div>
                    </div>
                `;
            });

            errorsHtml += `</div>`;
            errorsSection.innerHTML = errorsHtml;
        } else {
            errorsSection.innerHTML = `
                <div style="text-align:center; padding:16px; color:var(--success); font-weight:600;">
                    🎉 Parabéns! Você não errou nenhuma questão!
                </div>
            `;
        }

        // Correct answers section
        const correctSection = document.getElementById("result-correct-section");
        if (results.correct > 0) {
            let correctHtml = `
                <button class="result-section-header" id="btn-toggle-correct" aria-expanded="false">
                    <span>🟢 Questões que você acertou</span>
                    <span class="count success-count">${results.correct}</span>
                    <span class="toggle-icon" aria-hidden="true">▼</span>
                </button>
                <div class="result-items collapsed" id="result-correct-list">
            `;

            results.correctAnswers.forEach(ans => {
                const q = ans.question;
                correctHtml += `
                    <div class="result-correct-item" data-question-id="${q.id}" role="button" tabindex="0" aria-label="Ver detalhes da questão ${ans.questionIndex + 1}">
                        <span class="result-correct-icon" aria-hidden="true">✓</span>
                        <span class="result-correct-text">Q${ans.questionIndex + 1}: ${q.question}</span>
                        <span class="result-correct-expand" aria-hidden="true">›</span>
                    </div>
                `;
            });

            correctHtml += `</div>`;
            correctSection.innerHTML = correctHtml;
        } else {
            correctSection.innerHTML = "";
        }

        // Actions
        let actionsHtml = "";
        if (results.wrong > 0) {
            actionsHtml += `<button class="btn btn-primary btn-block" id="btn-result-review">📕 Revisar Meus Erros</button>`;
        }
        actionsHtml += `
            <button class="btn btn-secondary btn-block" id="btn-result-new">🔄 Novo Quiz</button>
            <button class="btn btn-outline btn-sm btn-block" id="btn-result-home">← Voltar ao Início</button>
        `;
        document.getElementById("result-actions").innerHTML = actionsHtml;

        showScreen("result");
    }

    function showCorrectAnswerDetail(questionId) {
        const q = questions.find(q => q.id === parseInt(questionId));
        if (!q) return;

        const letters = ["A", "B", "C", "D"];
        const icon = Stats.getCategoryIcon(q.category);

        const content = document.getElementById("modal-detail-content");
        content.innerHTML = `
            <div class="detail-card" style="border-color: var(--border);">
                <div class="question-label" style="color: var(--accent-light);">${icon} ${q.category}</div>
                <div class="question-text-small">${q.question}</div>
                <div class="answer-info">
                    <div style="margin-bottom:4px;"><strong style="color:var(--success);">Resposta:</strong> ${letters[q.correctAnswer]}) ${q.options[q.correctAnswer]}</div>
                    <div style="margin-top:10px; padding-top:10px; border-top:1px solid var(--border);">
                        <strong style="color:var(--accent-light);">💡 Explicação:</strong><br>
                        <span style="color:var(--text-secondary);">${q.explanation}</span>
                    </div>
                </div>
            </div>
            <div style="margin-top:16px;">
                <button class="btn btn-secondary btn-block btn-sm" id="btn-close-detail">Fechar</button>
            </div>
        `;

        document.getElementById("modal-detail").classList.add("active");
    }

    // ============================================================
    // ESTATÍSTICAS
    // ============================================================

    function showStats() {
        const data = Stats.getFullStats();
        const container = document.getElementById("stats-content");

        if (!data.hasData) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📊</div>
                    <div class="empty-state-text">
                        Você ainda não respondeu nenhuma questão.<br>
                        Continue estudando para desbloquear suas estatísticas.
                    </div>
                </div>
            `;
            showScreen("stats");
            return;
        }

        const overall = data.overall;
        const perfLabel = Stats.getPerformanceLabel(overall.percentage);
        const perfColor = Stats.getPercentageColor(overall.percentage);

        let html = `
            <div class="stats-hero">
                <div class="stats-hero-value" style="color:${perfColor}">${overall.percentage}%</div>
                <div class="stats-hero-label">de aproveitamento</div>
                <div class="stats-performance-label" style="color:${perfColor}">${perfLabel}</div>
            </div>

            <div class="stats-grid" style="margin-bottom:24px;">
                <div class="stat-item">
                    <div class="stat-value accent">${Stats.formatNumber(overall.totalAnswered)}</div>
                    <div class="stat-label">Respondidas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value success">${Stats.formatNumber(overall.totalCorrect)}</div>
                    <div class="stat-label">Acertos</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value error">${Stats.formatNumber(overall.totalWrong)}</div>
                    <div class="stat-label">Erros</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${data.reviewCount}</div>
                    <div class="stat-label">Para revisar</div>
                </div>
            </div>
        `;

        // Categories
        const categoryOrder = [
            CATEGORIES.LEGISLACAO,
            CATEGORIES.SINALIZACAO,
            CATEGORIES.DIRECAO_DEFENSIVA,
            CATEGORIES.PRIMEIROS_SOCORROS,
            CATEGORIES.MECANICA,
            CATEGORIES.MEIO_AMBIENTE,
            CATEGORIES.CIDADANIA
        ];

        const hasCategoryData = Object.keys(data.categories).length > 0;

        if (hasCategoryData) {
            html += `<h3 class="section-title" style="font-size:1rem;">Desempenho por assunto</h3>`;
            html += `<div class="stats-categories">`;

            categoryOrder.forEach(cat => {
                const catData = data.categories[cat];
                if (!catData) return;

                const icon = Stats.getCategoryIcon(cat);
                const color = Stats.getPercentageColor(catData.percentage);

                html += `
                    <div class="stats-category-item">
                        <div class="stats-category-header">
                            <div class="stats-category-name">
                                <span>${icon}</span>
                                <span>${cat}</span>
                            </div>
                            <div class="stats-category-percentage" style="color:${color}">${catData.percentage}%</div>
                        </div>
                        <div class="stats-category-bar">
                            <div class="stats-category-fill" style="width:${catData.percentage}%; background:${color}"></div>
                        </div>
                        <div class="stats-category-detail">
                            <span>${catData.correct} acertos</span>
                            <span>${catData.wrong} erros</span>
                            <span>${catData.answered} respostas</span>
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        }

        container.innerHTML = html;
        showScreen("stats");
    }

    // ============================================================
    // MODAIS
    // ============================================================

    function showModal(id) {
        document.getElementById(id).classList.add("active");
    }

    function hideModal(id) {
        document.getElementById(id).classList.remove("active");
    }

    // ============================================================
    // EVENT LISTENERS
    // ============================================================

    function initEvents() {
        // Home buttons
        document.getElementById("btn-start-study").addEventListener("click", () => showCategories("study"));
        document.getElementById("btn-start-exam").addEventListener("click", () => showCategories("exam"));
        document.getElementById("btn-start-review").addEventListener("click", () => startQuiz("review"));
        document.getElementById("btn-home-stats").addEventListener("click", showStats);

        // Header
        document.getElementById("logo-home").addEventListener("click", (e) => {
            e.preventDefault();
            if (currentScreen === "quiz") {
                showModal("modal-quit");
            } else {
                goHome();
            }
        });
        document.getElementById("btn-stats").addEventListener("click", showStats);
        document.getElementById("btn-theme").addEventListener("click", toggleTheme);

        // Categories
        document.getElementById("btn-back-categories").addEventListener("click", goHome);
        document.getElementById("category-list").addEventListener("click", (e) => {
            const card = e.target.closest(".category-card");
            if (card) {
                handleCategorySelect(card.dataset.category);
            }
        });

        // Quiz - options (event delegation)
        document.getElementById("options-list").addEventListener("click", (e) => {
            const btn = e.target.closest(".option-btn");
            if (btn && !btn.classList.contains("disabled")) {
                selectOption(parseInt(btn.dataset.index));
            }
        });

        // Quiz - answer
        document.getElementById("btn-answer").addEventListener("click", submitAnswer);

        // Quiz - next
        document.getElementById("btn-next").addEventListener("click", nextQuestion);

        // Quiz - quit
        document.getElementById("btn-quit-quiz").addEventListener("click", () => showModal("modal-quit"));
        document.getElementById("btn-cancel-quit").addEventListener("click", () => hideModal("modal-quit"));
        document.getElementById("btn-confirm-quit").addEventListener("click", () => {
            hideModal("modal-quit");
            goHome();
        });

        // Result actions (event delegation)
        document.getElementById("result-actions").addEventListener("click", (e) => {
            const btn = e.target.closest("button");
            if (!btn) return;
            if (btn.id === "btn-result-review") {
                startQuiz("review");
            } else if (btn.id === "btn-result-new") {
                goHome();
            } else if (btn.id === "btn-result-home") {
                goHome();
            }
        });

        // Result - toggle sections (event delegation)
        document.getElementById("result-errors-section").addEventListener("click", (e) => {
            const header = e.target.closest("#btn-toggle-errors");
            if (header) {
                header.classList.toggle("expanded");
                const list = document.getElementById("result-errors-list");
                list.classList.toggle("collapsed");
                header.setAttribute("aria-expanded", header.classList.contains("expanded"));
            }
        });

        document.getElementById("result-correct-section").addEventListener("click", (e) => {
            const header = e.target.closest("#btn-toggle-correct");
            if (header) {
                header.classList.toggle("expanded");
                const list = document.getElementById("result-correct-list");
                list.classList.toggle("collapsed");
                header.setAttribute("aria-expanded", header.classList.contains("expanded"));
            }

            // Click on correct answer item to see detail
            const item = e.target.closest(".result-correct-item");
            if (item) {
                showCorrectAnswerDetail(item.dataset.questionId);
            }
        });

        // Stats - back
        document.getElementById("btn-back-stats").addEventListener("click", goHome);

        // Clear data
        document.getElementById("btn-clear-data").addEventListener("click", () => showModal("modal-clear"));
        document.getElementById("btn-cancel-clear").addEventListener("click", () => hideModal("modal-clear"));
        document.getElementById("btn-confirm-clear").addEventListener("click", () => {
            Storage.clearAll();
            hideModal("modal-clear");
            showStats();
        });

        // Detail modal
        document.getElementById("modal-detail").addEventListener("click", (e) => {
            if (e.target.id === "modal-detail" || e.target.id === "btn-close-detail") {
                hideModal("modal-detail");
            }
        });

        // Close modals on overlay click
        document.querySelectorAll(".modal-overlay").forEach(overlay => {
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove("active");
                }
            });
        });

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (currentScreen !== "quiz") return;

            // Number keys 1-4 or A-D to select option
            const keyMap = {
                "1": 0, "2": 1, "3": 2, "4": 3,
                "a": 0, "b": 1, "c": 2, "d": 3
            };

            const key = e.key.toLowerCase();

            if (keyMap[key] !== undefined && !Quiz.isCurrentAnswered()) {
                selectOption(keyMap[key]);
            } else if (e.key === "Enter") {
                if (!Quiz.isCurrentAnswered() && selectedAnswer !== null) {
                    submitAnswer();
                } else if (Quiz.isCurrentAnswered()) {
                    nextQuestion();
                }
            }
        });
    }

    // ============================================================
    // INICIALIZAÇÃO
    // ============================================================

    function init() {
        initTheme();
        initEvents();
        updateHomeSummary();
    }

    // Run on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    return { goHome, showStats };
})();
