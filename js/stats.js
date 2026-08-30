/**
 * DETRAN QUIZ — Módulo de Estatísticas
 * Cálculos e formatação de dados de desempenho
 */

const Stats = (() => {

    // Retorna dados formatados para a tela de estatísticas
    function getFullStats() {
        const overall = Storage.getOverallStats();
        const categories = Storage.getCategoryStats();
        const reviewCount = Storage.getReviewCount();

        return {
            overall,
            categories,
            reviewCount,
            hasData: Storage.hasData()
        };
    }

    // Retorna emoji e label baseado no desempenho por categoria
    function getCategoryIcon(category) {
        const icons = {
            "Legislação de trânsito": "📖",
            "Sinalização": "🚦",
            "Direção defensiva": "🛡️",
            "Primeiros socorros": "🚑",
            "Meio ambiente": "🌱",
            "Mecânica básica": "🔧",
            "Cidadania e relacionamento interpessoal": "🤝"
        };
        return icons[category] || "📚";
    }

    // Retorna cor baseada no percentual
    function getPercentageColor(percentage) {
        const pct = parseFloat(percentage);
        if (pct >= 80) return "var(--success)";
        if (pct >= 60) return "var(--warning)";
        return "var(--error)";
    }

    // Retorna label de desempenho
    function getPerformanceLabel(percentage) {
        const pct = parseFloat(percentage);
        if (pct >= 90) return "Excelente";
        if (pct >= 80) return "Muito bom";
        if (pct >= 70) return "Bom";
        if (pct >= 60) return "Regular";
        return "Precisa melhorar";
    }

    // Formata número com separador
    function formatNumber(num) {
        return num.toLocaleString("pt-BR");
    }

    // Retorna dados para o resumo na home
    function getHomeSummary() {
        if (!Storage.hasData()) return null;

        const overall = Storage.getOverallStats();
        return {
            answered: overall.totalAnswered,
            correct: overall.totalCorrect,
            wrong: overall.totalWrong,
            percentage: overall.percentage,
            reviewCount: Storage.getReviewCount()
        };
    }

    return {
        getFullStats,
        getCategoryIcon,
        getPercentageColor,
        getPerformanceLabel,
        formatNumber,
        getHomeSummary
    };
})();
