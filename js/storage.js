/**
 * DETRAN QUIZ — Gerenciamento do localStorage
 * Persiste desempenho, histórico e preferências do usuário
 */

const Storage = (() => {
    const STATS_KEY = "detranQuizStats";
    const THEME_KEY = "detranQuizTheme";
    const RECENT_KEY = "detranQuizRecent";

    // Estrutura padrão dos dados
    function getDefaultData() {
        return {
            totalAnswered: 0,
            totalCorrect: 0,
            totalWrong: 0,
            questionStats: {},
            sessions: []
        };
    }

    // Carrega dados do localStorage
    function loadStats() {
        try {
            const raw = localStorage.getItem(STATS_KEY);
            if (!raw) return getDefaultData();
            const parsed = JSON.parse(raw);
            // Merge com defaults para garantir todas as chaves
            return { ...getDefaultData(), ...parsed };
        } catch (e) {
            console.warn("Erro ao carregar dados do localStorage:", e);
            return getDefaultData();
        }
    }

    // Salva dados no localStorage
    function saveStats(data) {
        try {
            localStorage.setItem(STATS_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn("Erro ao salvar dados no localStorage:", e);
        }
    }

    // Registra resposta de uma questão
    function recordAnswer(questionId, category, isCorrect) {
        const data = loadStats();
        data.totalAnswered++;

        if (isCorrect) {
            data.totalCorrect++;
        } else {
            data.totalWrong++;
        }

        // Atualiza estatísticas da questão individual
        if (!data.questionStats[questionId]) {
            data.questionStats[questionId] = {
                answered: 0,
                correct: 0,
                wrong: 0,
                category: category,
                needsReview: false,
                consecutiveCorrect: 0,
                lastAnswered: null
            };
        }

        const qs = data.questionStats[questionId];
        qs.answered++;
        qs.category = category;
        qs.lastAnswered = new Date().toISOString();

        if (isCorrect) {
            qs.correct++;
            qs.consecutiveCorrect++;
            // Remove da revisão se acertou 2 vezes seguidas
            if (qs.consecutiveCorrect >= 2) {
                qs.needsReview = false;
            }
        } else {
            qs.wrong++;
            qs.consecutiveCorrect = 0;
            qs.needsReview = true;
        }

        saveStats(data);
    }

    // Registra uma sessão completa (simulado ou estudo)
    function recordSession(mode, score, total, questionIds) {
        const data = loadStats();
        data.sessions.push({
            date: new Date().toISOString(),
            mode: mode,
            score: score,
            total: total,
            questionIds: questionIds
        });

        // Limitar a 50 sessões salvas
        if (data.sessions.length > 50) {
            data.sessions = data.sessions.slice(-50);
        }

        saveStats(data);
    }

    // Retorna IDs das questões que precisam revisão
    function getReviewQuestionIds() {
        const data = loadStats();
        const ids = [];
        for (const [id, stat] of Object.entries(data.questionStats)) {
            if (stat.needsReview) {
                ids.push(parseInt(id));
            }
        }
        return ids;
    }

    // Retorna estatísticas gerais
    function getOverallStats() {
        const data = loadStats();
        return {
            totalAnswered: data.totalAnswered,
            totalCorrect: data.totalCorrect,
            totalWrong: data.totalWrong,
            percentage: data.totalAnswered > 0
                ? ((data.totalCorrect / data.totalAnswered) * 100).toFixed(1)
                : 0
        };
    }

    // Retorna estatísticas por categoria
    function getCategoryStats() {
        const data = loadStats();
        const categories = {};

        for (const [id, stat] of Object.entries(data.questionStats)) {
            const cat = stat.category;
            if (!cat) continue;

            if (!categories[cat]) {
                categories[cat] = { answered: 0, correct: 0, wrong: 0 };
            }
            categories[cat].answered += stat.answered;
            categories[cat].correct += stat.correct;
            categories[cat].wrong += stat.wrong;
        }

        // Calcula percentual
        const result = {};
        for (const [cat, stats] of Object.entries(categories)) {
            result[cat] = {
                ...stats,
                percentage: stats.answered > 0
                    ? ((stats.correct / stats.answered) * 100).toFixed(1)
                    : 0
            };
        }

        return result;
    }

    // Retorna quantidade de questões para revisão
    function getReviewCount() {
        return getReviewQuestionIds().length;
    }

    // Salva IDs de questões recentes para evitar repetição
    function saveRecentQuestions(ids) {
        try {
            localStorage.setItem(RECENT_KEY, JSON.stringify(ids));
        } catch (e) {
            console.warn("Erro ao salvar questões recentes:", e);
        }
    }

    // Carrega IDs de questões recentes
    function getRecentQuestions() {
        try {
            const raw = localStorage.getItem(RECENT_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    // Salva tema (dark/light)
    function saveTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            console.warn("Erro ao salvar tema:", e);
        }
    }

    // Carrega tema salvo
    function getTheme() {
        try {
            return localStorage.getItem(THEME_KEY) || "dark";
        } catch (e) {
            return "dark";
        }
    }

    // Limpa todos os dados do quiz
    function clearAll() {
        try {
            localStorage.removeItem(STATS_KEY);
            localStorage.removeItem(RECENT_KEY);
            // Não remove tema
        } catch (e) {
            console.warn("Erro ao limpar dados:", e);
        }
    }

    // Verifica se há dados salvos
    function hasData() {
        const data = loadStats();
        return data.totalAnswered > 0;
    }

    return {
        recordAnswer,
        recordSession,
        getReviewQuestionIds,
        getOverallStats,
        getCategoryStats,
        getReviewCount,
        saveRecentQuestions,
        getRecentQuestions,
        saveTheme,
        getTheme,
        clearAll,
        hasData,
        loadStats
    };
})();
