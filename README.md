# DETRAN QUIZ

🚗 **Estude. Responda. Aprenda. Passe.**

Site de estudo para a prova teórica de habilitação do Detran (primeira habilitação no Brasil).

## 🎯 Objetivo

Oferecer uma experiência de estudo melhor do que os simuladores tradicionais do Detran, com foco em:

- Interface moderna e responsiva (mobile-first)
- Uma questão por vez, sem rolagem infinita
- Feedback imediato com explicações
- Sorteio aleatório para evitar repetição
- Acompanhamento do desempenho via localStorage

## 🚀 Como Usar

### Opção 1: Abrir diretamente
Abra o arquivo `index.html` no navegador.

### Opção 2: Servidor local
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve .
```

## 📚 Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Modo Estudo** | Feedback imediato, explicações, sem cronômetro |
| **Modo Simulado** | Resultado apenas no final, aprovado/reprovado |
| **Revisão de Erros** | Quiz apenas com questões previamente erradas |
| **Estatísticas** | Desempenho geral e por categoria |
| **Categorias** | Filtro por assunto (legislação, sinalização, etc.) |
| **Modo Escuro/Claro** | Toggle de tema com persistência |
| **Questões Aleatórias** | Fisher-Yates shuffle + anti-repetição |
| **localStorage** | Persistência de todo o histórico |
| **Responsivo** | Mobile-first, funciona em celular, tablet e desktop |
| **Acessibilidade** | Navegação por teclado, contraste, ARIA labels |

## 🗂️ Estrutura de Arquivos

```
├── index.html          # Página única (SPA)
├── css/
│   └── style.css       # Estilos mobile-first com dark/light mode
├── js/
│   ├── questions.js    # Banco de 50 questões com explicações
│   ├── storage.js      # Gerenciamento do localStorage
│   ├── quiz.js         # Lógica do quiz (modos, sorteio, resultado)
│   ├── stats.js        # Cálculos de estatísticas
│   └── app.js          # Controller da SPA (navegação, eventos, UI)
└── README.md
```

## 📝 Banco de Questões

O banco possui **50 questões** distribuídas em 7 categorias:

- 📖 Legislação de trânsito
- 🚦 Sinalização
- 🛡️ Direção defensiva
- 🚑 Primeiros socorros
- 🔧 Mecânica básica
- 🌱 Meio ambiente
- 🤝 Cidadania e relacionamento interpessoal

### Como Adicionar Questões

Abra `js/questions.js` e adicione ao array `questions`:

```javascript
{
    id: 51,                          // ID único
    category: CATEGORIES.LEGISLACAO, // Use as constantes CATEGORIES
    question: "Texto da pergunta",
    options: [
        "Alternativa A",
        "Alternativa B",
        "Alternativa C",
        "Alternativa D"
    ],
    correctAnswer: 2,                // Índice 0-based (0=A, 1=B, 2=C, 3=D)
    explanation: "Explicação da resposta correta.",
    difficulty: "medium"             // "easy", "medium" ou "hard"
}
```

O sistema reconhece automaticamente novas questões — não é necessário alterar nenhum outro arquivo.

## ⚙️ Configurações

No arquivo `js/quiz.js`:

```javascript
const QUESTIONS_PER_ROUND = 30;  // Questões por rodada
const PASSING_SCORE = 21;        // Mínimo para aprovação no simulado
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (custom properties, grid, flexbox)
- JavaScript ES6+ (vanilla, sem frameworks)
- Google Fonts (Inter)

Sem backend, sem banco de dados, sem dependências pesadas.

## 📱 Compatibilidade

- ✅ Chrome (desktop e mobile)
- ✅ Firefox
- ✅ Safari (macOS e iOS)
- ✅ Edge
- ✅ Samsung Internet

## 📄 Licença

Projeto educacional. As questões são baseadas no Código de Trânsito Brasileiro (Lei 9.503/97) e materiais oficiais do Detran.
