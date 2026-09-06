<div align="center">

# 🚗 DETRAN QUIZ

### A forma mais inteligente de passar na prova teórica do DETRAN

<br>

![Status](https://img.shields.io/badge/status-ativo-00c48c?style=for-the-badge)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0-6c63ff?style=for-the-badge)
![Licença](https://img.shields.io/badge/licen%C3%A7a-educacional-ffc048?style=for-the-badge)
![Questões](https://img.shields.io/badge/quest%C3%B5es-50+-ff4757?style=for-the-badge)

<br>

**Estude. Responda. Aprenda. Passe.**

Site de estudo para a prova teórica de habilitação do DETRAN — projetado para funcionar **perfeitamente no celular**, algo que o sistema oficial não faz.

<br>

### 🌐 [**ACESSAR O SITE AO VIVO →**](https://wallace-2105.github.io/DETRAN-/)

<br>

[🚀 Começar a Estudar](#-como-usar) · [📚 Funcionalidades](#-funcionalidades) · [🤝 Contribuir](#-como-adicionar-questões)

</div>

---

<br>

## 💡 Por que este projeto existe?

> **O sistema oficial do DETRAN é praticamente inutilizável pelo celular.**

Quem já tentou estudar para a prova teórica pelo site do DETRAN sabe: a experiência no celular é **péssima**. Textos cortados, botões que não funcionam, rolagem infinita de questões, e nenhum feedback sobre o que você está errando.

Este projeto nasceu de uma frustração real e de uma pergunta simples:

> *"E se existisse um simulado bonito, rápido e que funcionasse perfeitamente tanto no celular quanto no computador?"*

<br>

## ⚡ DETRAN Quiz vs. Sistema Oficial

<div align="center">

| | 🏛️ **Sistema Oficial** | 🚗 **DETRAN Quiz** |
|:---|:---:|:---:|
| **Funciona no celular?** | ❌ Mal adaptado | ✅ **Mobile-first** |
| **Funciona no desktop?** | ⚠️ Aceitável | ✅ **Perfeito** |
| **Feedback imediato?** | ❌ Só no final | ✅ **A cada questão** |
| **Explicações?** | ❌ Nenhuma | ✅ **Detalhadas** |
| **Rastreia seus erros?** | ❌ Não | ✅ **Automaticamente** |
| **Revisão de erros?** | ❌ Não existe | ✅ **Modo dedicado** |
| **Estatísticas?** | ❌ Nenhuma | ✅ **Por categoria** |
| **Modo escuro?** | ❌ Não | ✅ **Com persistência** |
| **Interface moderna?** | ❌ Desatualizada | ✅ **Glassmorphism + Animações** |
| **Offline?** | ❌ Precisa internet | ✅ **100% offline** |
| **Velocidade** | 🐢 Lento | ⚡ **Instantâneo** |
| **Preço** | 🆓 **Gratuito**  | 🆓 **Gratuito** |

</div>

<br>

## 🎨 Design & Experiência

<div align="center">

```
╔══════════════════════════════════════╗
║  🚗 DETRAN QUIZ              📊 🌙  ║
╠══════════════════════════════════════╣
║                                      ║
║            🚗                        ║
║       DETRAN QUIZ                    ║
║   Estude para sua prova teórica      ║
║                                      ║
║  ┌──────────────────────────────┐    ║
║  │   📖  Começar Estudo         │    ║
║  └──────────────────────────────┘    ║
║  ┌──────────────────────────────┐    ║
║  │   📝  Fazer Simulado         │    ║
║  └──────────────────────────────┘    ║
║                                      ║
║  ✓ Questões aleatórias               ║
║  ✓ Sem limite de tempo               ║
║  ✓ Explicações detalhadas            ║
║  ✓ Acompanhe seu desempenho          ║
║  ✓ Funciona em qualquer tela         ║
║                                      ║
╚══════════════════════════════════════╝
```

</div>

### 🌑 Dark Mode & ☀️ Light Mode

Interface com tema escuro por padrão (reduz cansaço visual durante estudos longos) e tema claro disponível. Sua preferência é **salva automaticamente**.

### 📱 Mobile-First

Cada pixel foi pensado para funcionar no celular primeiro. **Uma questão por vez**, sem rolagem infinita, sem zoom, sem frustração.

<br>

## 📚 Funcionalidades

<div align="center">

| Recurso | Descrição |
|:---:|:---|
| 📖 **Modo Estudo** | Feedback imediato com explicações detalhadas a cada questão |
| 📝 **Modo Simulado** | Simula a prova real — resultado apenas no final (aprovado/reprovado) |
| 📕 **Revisão de Erros** | Quiz gerado automaticamente apenas com questões que você errou |
| 📊 **Estatísticas** | Desempenho geral e por categoria com barras de progresso |
| 🏷️ **Filtro por Assunto** | Escolha estudar apenas legislação, sinalização, primeiros socorros, etc. |
| 🌙 **Tema Escuro/Claro** | Toggle com persistência — perfeito para estudar à noite |
| 🔀 **Questões Aleatórias** | Algoritmo Fisher-Yates + anti-repetição para máxima variedade |
| 💾 **Persistência Local** | Todo histórico salvo no navegador via `localStorage` |
| ⌨️ **Atalhos de Teclado** | Teclas `1-4` ou `A-D` para selecionar, `Enter` para confirmar |
| ♿ **Acessibilidade** | Navegação por teclado, contraste adequado, ARIA labels |

</div>

<br>

## 🚀 Como Usar

### Opção 1: Abrir direto no navegador
```bash
# Simplesmente abra o arquivo no navegador
index.html
```
> Sem instalação. Sem configuração. Sem internet. Abre e funciona.

### Opção 2: Servidor local (para desenvolvimento)
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve .

# Depois acesse:
# http://localhost:8000
```

<br>

## 🧠 Banco de Questões

O banco possui **50+ questões** cuidadosamente elaboradas, distribuídas em **7 categorias** do CTB:

<div align="center">

| Emoji | Categoria | Descrição |
|:---:|:---|:---|
| 📖 | **Legislação de Trânsito** | Código de Trânsito Brasileiro, infrações, penalidades |
| 🚦 | **Sinalização** | Placas, semáforos, marcações viárias |
| 🛡️ | **Direção Defensiva** | Prevenção de acidentes, técnicas de direção segura |
| 🚑 | **Primeiros Socorros** | Procedimentos em caso de acidentes |
| 🔧 | **Mecânica Básica** | Funcionamento e manutenção do veículo |
| 🌱 | **Meio Ambiente** | Impacto ambiental e condução econômica |
| 🤝 | **Cidadania** | Convivência no trânsito e relações interpessoais |

</div>

<br>

## ➕ Como Adicionar Questões

Abra [`js/questions.js`](js/questions.js) e adicione ao array `questions`:

```javascript
{
    id: 51,                          // ID único sequencial
    category: CATEGORIES.LEGISLACAO, // Use as constantes CATEGORIES
    question: "Texto da pergunta",
    options: [
        "Alternativa A",
        "Alternativa B",
        "Alternativa C",
        "Alternativa D"
    ],
    correctAnswer: 2,                // Índice 0-based (0=A, 1=B, 2=C, 3=D)
    explanation: "Explicação detalhada da resposta correta.",
    difficulty: "medium"             // "easy", "medium" ou "hard"
}
```

> **💡 Dica:** O sistema reconhece automaticamente novas questões — não é necessário alterar nenhum outro arquivo.

### Categorias disponíveis:
```javascript
CATEGORIES.LEGISLACAO          // "Legislação de trânsito"
CATEGORIES.SINALIZACAO         // "Sinalização"
CATEGORIES.DIRECAO_DEFENSIVA   // "Direção defensiva"
CATEGORIES.PRIMEIROS_SOCORROS  // "Primeiros socorros"
CATEGORIES.MECANICA            // "Mecânica básica"
CATEGORIES.MEIO_AMBIENTE       // "Meio ambiente"
CATEGORIES.CIDADANIA           // "Cidadania e relacionamento interpessoal"
```

<br>

## 🗂️ Arquitetura do Projeto

```
detran-quiz/
├── 📄 index.html              → Página única (SPA) — toda a estrutura HTML
├── 🎨 css/
│   └── style.css              → Design system completo (dark/light, mobile-first)
├── ⚡ js/
│   ├── questions.js           → Banco de 50+ questões com explicações
│   ├── storage.js             → Camada de persistência (localStorage)
│   ├── quiz.js                → Engine do quiz (modos, sorteio, resultado)
│   ├── stats.js               → Cálculos de estatísticas e desempenho
│   └── app.js                 → Controller da SPA (navegação, eventos, UI)
└── 📖 README.md
```

### Decisões técnicas:

- **Zero dependências** — Sem React, Vue, Angular ou qualquer framework
- **Zero build step** — Sem Webpack, Vite, ou bundler
- **Zero backend** — Sem servidor, API, ou banco de dados
- **Vanilla JS (ES6+)** — Código limpo, modular, e fácil de entender
- **CSS Custom Properties** — Design system completo com tokens
- **Módulos IIFE** — Encapsulamento sem necessidade de bundler

<br>

## ⚙️ Configurações

No arquivo [`js/quiz.js`](js/quiz.js), você pode ajustar:

```javascript
const QUESTIONS_PER_ROUND = 30;  // Questões por rodada (padrão da prova)
const PASSING_SCORE = 21;        // Mínimo para aprovação no simulado (70%)
```

<br>

## 🛠️ Stack Tecnológica

<div align="center">

| Tecnologia | Uso |
|:---:|:---|
| **HTML5** | Estrutura semântica com ARIA labels |
| **CSS3** | Custom Properties, Grid, Flexbox, Animações |
| **JavaScript ES6+** | Vanilla, modular, sem frameworks |
| **Google Fonts** | Inter — tipografia moderna e legível |
| **localStorage** | Persistência de dados no navegador |

</div>

> **Filosofia:** Sem dependências pesadas. O app inteiro pesa menos que uma imagem de fundo.

<br>

## 📱 Compatibilidade

<div align="center">

| Navegador | Desktop | Mobile |
|:---|:---:|:---:|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ (iOS) |
| Edge | ✅ | ✅ |
| Samsung Internet | — | ✅ |
| Opera | ✅ | ✅ |

</div>

<br>

## 🔮 Roadmap

- [ ] 🎯 Expandir para 100+ questões
- [ ] 📸 Questões com imagens de sinalização
- [x] 🏆 Sistema de conquistas e gamificação
- [ ] 📲 PWA — instalar como app nativo
- [ ] 🔊 Modo leitura em voz alta (acessibilidade)
- [x] 🌐 Deploy online (GitHub Pages) — [**Acessar**](https://wallace-2105.github.io/DETRAN-/)

<br>

## 📄 Licença

Projeto educacional e open-source. As questões são baseadas no **Código de Trânsito Brasileiro (Lei 9.503/97)** e materiais oficiais do DETRAN.

Feito para ajudar estudantes a conquistarem sua primeira habilitação. 🇧🇷

<br>

---

<div align="center">

**Feito com 💜 para quem está estudando para a prova do DETRAN**

*Se o sistema oficial não funciona no seu celular, este aqui funciona.*

<br>

⭐ **Gostou? Dê uma estrela no repositório!** ⭐

</div>
