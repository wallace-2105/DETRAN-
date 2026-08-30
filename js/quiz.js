/**
 * DETRAN QUIZ — Lógica do Quiz
 * Gerencia sorteio, modos de estudo/simulado/revisão e fluxo de questões
 */

const Quiz = (() => {
    // Configurações
    const QUESTIONS_PER_ROUND = 30;
    const PASSING_SCORE = 21;

    // Estado do quiz atual
    let currentQuestions = [];
    let currentIndex = 0;
    let answers = []; // { questionId, selectedAnswer, isCorrect }
    let mode = "study"; // "study" | "exam" | "review"
    let isAnswered = false;

    // Fisher-Yates shuffle
    function shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Seleciona questões evitando repetição excessiva
    function selectQuestions(pool, count) {
        const recent = Storage.getRecentQuestions();
        const recentSet = new Set(recent);

        // Separa em não-recentes e recentes
        const notRecent = pool.filter(q => !recentSet.has(q.id));
        const isRecent = pool.filter(q => recentSet.has(q.id));

        let selected = [];

        if (notRecent.length >= count) {
            // Tem questões suficientes não-recentes
            selected = shuffle(notRecent).slice(0, count);
        } else {
            // Usa todas as não-recentes + complementa com recentes
            selected = [...shuffle(notRecent), ...shuffle(isRecent)].slice(0, count);
        }

        // Embaralha a ordem final
        selected = shuffle(selected);

        // Salva como recentes
        const selectedIds = selected.map(q => q.id);
        Storage.saveRecentQuestions(selectedIds);

        return selected;
    }

    // Filtra questões por categoria
    function filterByCategory(category) {
        if (!category || category === "all") return questions;
        return questions.filter(q => q.category === category);
    }

    // Inicia novo quiz
    function start(quizMode, category) {
        mode = quizMode;
        currentIndex = 0;
        answers = [];
        isAnswered = false;

        if (mode === "review") {
            // Modo revisão: apenas questões erradas
            const reviewIds = Storage.getReviewQuestionIds();
            const reviewQuestions = questions.filter(q => reviewIds.includes(q.id));

            if (reviewQuestions.length === 0) {
                currentQuestions = [];
                return false;
            }

            currentQuestions = shuffle(reviewQuestions).slice(0, QUESTIONS_PER_ROUND);
        } else {
            // Modo estudo ou simulado
            const pool = filterByCategory(category);
            const count = Math.min(QUESTIONS_PER_ROUND, pool.length);
            currentQuestions = selectQuestions(pool, count);
        }

        return currentQuestions.length > 0;
    }

    // Retorna questão atual
    function getCurrentQuestion() {
        if (currentIndex >= currentQuestions.length) return null;
        return currentQuestions[currentIndex];
    }

    // Retorna índice atual (0-based)
    function getCurrentIndex() {
        return currentIndex;
    }

    // Retorna total de questões na rodada
    function getTotalQuestions() {
        return currentQuestions.length;
    }

    // Retorna modo atual
    function getMode() {
        return mode;
    }

    // Verifica se a questão atual já foi respondida
    function isCurrentAnswered() {
        return isAnswered;
    }

    // Responde a questão atual
    function answerCurrent(selectedIndex) {
        if (isAnswered) return null;

        const question = getCurrentQuestion();
        if (!question) return null;

        const isCorrect = selectedIndex === question.correctAnswer;
        isAnswered = true;

        const result = {
            questionId: question.id,
            questionIndex: currentIndex,
            selectedAnswer: selectedIndex,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect,
            question: question
        };

        answers.push(result);

        // Registra no localStorage
        Storage.recordAnswer(question.id, question.category, isCorrect);

        return result;
    }

    // Avança para próxima questão
    function next() {
        if (currentIndex < currentQuestions.length - 1) {
            currentIndex++;
            isAnswered = false;
            return true;
        }
        return false;
    }

    // Verifica se é a última questão
    function isLastQuestion() {
        return currentIndex >= currentQuestions.length - 1;
    }

    // Retorna resultados finais
    function getResults() {
        const total = currentQuestions.length;
        const correct = answers.filter(a => a.isCorrect).length;
        const wrong = total - correct;
        const percentage = total > 0 ? ((correct / total) * 100).toFixed(1) : 0;
        const passed = correct >= PASSING_SCORE;

        // Separa erros e acertos
        const wrongAnswers = answers.filter(a => !a.isCorrect);
        const correctAnswers = answers.filter(a => a.isCorrect);

        // Registra sessão
        Storage.recordSession(mode, correct, total, currentQuestions.map(q => q.id));

        return {
            total,
            correct,
            wrong,
            percentage,
            passed,
            passingScore: PASSING_SCORE,
            wrongAnswers,
            correctAnswers,
            answers,
            mode
        };
    }

    // Retorna a resposta dada para uma questão pelo índice
    function getAnswerForIndex(index) {
        return answers.find(a => a.questionIndex === index) || null;
    }

    // Retorna progresso (para barra de progresso)
    function getProgress() {
        return {
            current: currentIndex + 1,
            total: currentQuestions.length,
            percentage: ((currentIndex + 1) / currentQuestions.length * 100).toFixed(0)
        };
    }

    return {
        QUESTIONS_PER_ROUND,
        PASSING_SCORE,
        start,
        getCurrentQuestion,
        getCurrentIndex,
        getTotalQuestions,
        getMode,
        isCurrentAnswered,
        answerCurrent,
        next,
        isLastQuestion,
        getResults,
        getAnswerForIndex,
        getProgress
    };
})();
