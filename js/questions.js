/**
 * DETRAN QUIZ — Banco de Questões
 * 50 questões para estudo da prova teórica de habilitação
 * 
 * Estrutura:
 *   id           - Identificador único
 *   category     - Categoria da questão
 *   question     - Enunciado
 *   options      - Array de 4 alternativas
 *   correctAnswer - Índice da alternativa correta (0-based)
 *   explanation  - Explicação didática da resposta
 *   difficulty   - easy | medium | hard
 *   image        - Código da placa (opcional, ex: "A-12")
 */

const CATEGORIES = {
    LEGISLACAO: "Legislação de trânsito",
    SINALIZACAO: "Sinalização",
    DIRECAO_DEFENSIVA: "Direção defensiva",
    PRIMEIROS_SOCORROS: "Primeiros socorros",
    MEIO_AMBIENTE: "Meio ambiente",
    MECANICA: "Mecânica básica",
    CIDADANIA: "Cidadania e relacionamento interpessoal"
};

const questions = [
    // ============================================================
    // QUESTÕES 1–30: Fornecidas pelo usuário
    // ============================================================
    {
        id: 1,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "A colisão frontal pode ser muito grave, dependendo da velocidade, e ocorre com o veículo",
        options: [
            "que está na frente",
            "que está parado",
            "vindo por trás",
            "em sentido contrário"
        ],
        correctAnswer: 3,
        explanation: "A colisão frontal ocorre quando dois veículos que se deslocam em sentidos opostos colidem de frente. É um dos tipos mais graves de acidente devido à soma das velocidades dos dois veículos.",
        difficulty: "easy"
    },
    {
        id: 2,
        category: CATEGORIES.MEIO_AMBIENTE,
        question: "O condutor contribui para a preservação do meio ambiente, sem comprometer a segurança no trânsito, quando",
        options: [
            "efetua a troca de filtros de óleo, ar e combustível conforme a especificação do fabricante",
            "desliga o motor do veículo em longos trechos em declive, reduzindo o consumo de combustível",
            "mantém ligado o motor do veículo, estando o trânsito paralisado dentro de um túnel",
            "descarta lixo na pista, na vegetação à beira da estrada, protegido por saco plástico"
        ],
        correctAnswer: 0,
        explanation: "A manutenção preventiva, incluindo a troca de filtros conforme as especificações do fabricante, reduz a emissão de poluentes e mantém o veículo funcionando de forma eficiente, preservando o meio ambiente sem comprometer a segurança.",
        difficulty: "medium"
    },
    {
        id: 3,
        category: CATEGORIES.MECANICA,
        question: "Quando o motor falha ou engasga, perdendo o rendimento, estes são indícios de",
        options: [
            "falta de calibragem dos pneus",
            "cilindros entupidos ou sujos",
            "bicos injetores entupidos ou sujos",
            "falta de óleo no motor"
        ],
        correctAnswer: 2,
        explanation: "Os bicos injetores são responsáveis por pulverizar o combustível na câmara de combustão. Quando estão entupidos ou sujos, a mistura ar-combustível fica inadequada, causando falhas, engasgos e perda de rendimento do motor.",
        difficulty: "medium"
    },
    {
        id: 4,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Ao dirigir sob neblina ou cerração, o condutor deve",
        options: [
            "usar a luz baixa do farol",
            "manter a velocidade e acionar o pisca-alerta",
            "usar a luz alta do farol",
            "acelerar e acionar o pisca-alerta"
        ],
        correctAnswer: 0,
        explanation: "A luz baixa proporciona melhor visibilidade na neblina porque ilumina a estrada sem causar o reflexo intenso que a luz alta provoca ao incidir nas partículas de água suspensas no ar.",
        difficulty: "easy"
    },
    {
        id: 5,
        category: CATEGORIES.LEGISLACAO,
        question: "Quando o condutor ultrapassar outro veículo pelo acostamento, em interseções e passagens de nível, terá como punição",
        options: [
            "multa, apenas",
            "multa e suspensão da CNH",
            "multa e retenção do veículo",
            "multa e remoção do veículo"
        ],
        correctAnswer: 3,
        explanation: "Conforme o CTB, ultrapassar pelo acostamento, em interseções e passagens de nível é infração gravíssima, com penalidade de multa e medida administrativa de remoção do veículo.",
        difficulty: "medium"
    },
    {
        id: 6,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Sinalização horizontal inexistente ou apagada pode contribuir para gerar acidente de trânsito e é uma situação de risco relacionada como estado do(a)",
        options: [
            "clima e/ou ambiente",
            "condutor",
            "via",
            "veículo"
        ],
        correctAnswer: 2,
        explanation: "A sinalização horizontal (faixas, marcas no pavimento) é parte da infraestrutura da via. Quando inexistente ou apagada, representa uma condição adversa relacionada ao estado da via, não do condutor, veículo ou clima.",
        difficulty: "medium"
    },
    {
        id: 7,
        category: CATEGORIES.PRIMEIROS_SOCORROS,
        question: "O melhor local do corpo para se verificar a pulsação de vítima adulta inconsciente é",
        options: [
            "o peito",
            "o pulso",
            "o pescoço",
            "a perna"
        ],
        correctAnswer: 2,
        explanation: "Em vítimas inconscientes, a pulsação deve ser verificada na artéria carótida, localizada no pescoço. Essa artéria é mais acessível e confiável para verificação em situações de emergência, pois mantém pulso perceptível mesmo em casos de pressão arterial baixa.",
        difficulty: "easy"
    },
    {
        id: 8,
        category: CATEGORIES.LEGISLACAO,
        question: "Para conversão à esquerda, nas rodovias com acostamento e sem local apropriado para conversão, o condutor deverá",
        options: [
            "parar o veículo na pista, o mais próximo possível da linha divisória de fluxo, e aguardar o momento certo de cruzar a via",
            "entrar no acostamento, reduzir a velocidade e, sem parar, cruzar a via aproveitando uma brecha entre os veículos",
            "acessar o acostamento à direita, parar o veículo e aguardar o momento seguro de cruzar a via",
            "reduzir a velocidade, não parar e cruzar a via à esquerda, aproveitando uma brecha entre os veículos"
        ],
        correctAnswer: 2,
        explanation: "Conforme o CTB, o condutor deve acessar o acostamento à direita, parar o veículo e aguardar o momento seguro para cruzar a via. Isso evita obstruir o fluxo de veículos na pista e garante maior segurança na manobra.",
        difficulty: "hard"
    },
    {
        id: 9,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Se o condutor não adotar medidas preventivas, existem condições geradoras de risco que podem contribuir para causar acidentes de trânsito, entre elas",
        options: [
            "faróis regulados, neblina e fumaça na pista",
            "granizo, freios em bom estado e vento",
            "chuva, sono e buracos na via",
            "boa visibilidade, pneus descalibrados e óleo na pista"
        ],
        correctAnswer: 2,
        explanation: "Chuva (condição adversa do clima), sono (condição adversa do condutor) e buracos na via (condição adversa da via) são todas condições geradoras de risco. As outras alternativas misturam condições favoráveis com desfavoráveis.",
        difficulty: "medium"
    },
    {
        id: 10,
        category: CATEGORIES.CIDADANIA,
        question: "Um comportamento social que favorece a harmonia no trânsito pode ser identificado quando o condutor",
        options: [
            "anima a festa com os amigos na rua, mantendo alto o volume de músicas do sistema de som do veículo durante a madrugada",
            "para o veículo em local proibido, defronte de um estabelecimento comercial, para facilitar o trabalho do lojista",
            "retém o veículo antes do cruzamento mesmo com o sinal verde favorável, evitando parar no meio da travessia",
            "ocupa uma vaga de estacionamento destinada a pessoas com deficiência ou a pessoas idosas"
        ],
        correctAnswer: 2,
        explanation: "Reter o veículo antes do cruzamento quando há risco de ficar parado no meio da travessia demonstra respeito aos outros condutores e pedestres, favorecendo a harmonia e a fluidez do trânsito.",
        difficulty: "easy"
    },
    {
        id: 11,
        category: CATEGORIES.LEGISLACAO,
        question: "Quando o condutor desobedecer às ordens emanadas da autoridade competente de trânsito ou de seus agentes, terá como penalidade (CTB Art. 195)",
        options: [
            "suspensão do direito de dirigir",
            "cassação da CNH",
            "multa",
            "apreensão da CNH"
        ],
        correctAnswer: 2,
        explanation: "Conforme o Art. 195 do CTB, desobedecer às ordens emanadas da autoridade competente de trânsito ou de seus agentes é infração gravíssima, com penalidade de multa. Não prevê suspensão, cassação ou apreensão da CNH como penalidade direta.",
        difficulty: "medium"
    },
    {
        id: 12,
        category: CATEGORIES.SINALIZACAO,
        question: "Diante da placa de advertência A-12, qual deve ser a ação do condutor?",
        options: [
            "passar pelo centro da via, quando não houver veículo transitando pelo local",
            "reduzir a velocidade, pois se trata de área de cruzamento",
            "acelerar e passar, pois a placa indica preferência do condutor",
            "manter a velocidade, pois não há risco de acidentes"
        ],
        correctAnswer: 1,
        explanation: "A placa A-12 é uma placa de advertência que indica interseção em \"T\" adiante. O condutor deve reduzir a velocidade e redobrar a atenção, pois veículos podem entrar ou cruzar a via no trecho à frente.",
        difficulty: "medium",
        image: "A-12"
    },
    {
        id: 13,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Em uma via com mais de uma faixa por sentido, o condutor observa um obstáculo a distância (por exemplo, um buraco). Nesta condição, para evitar manobra que possa causar acidente com a possível presença de motociclistas, o condutor deve:",
        options: [
            "manter a velocidade e frear bruscamente diante do obstáculo",
            "manter a velocidade e mudar de faixa imediatamente, não necessitando sinalizar",
            "aumentar a velocidade e mudar de faixa imediatamente, não necessitando sinalizar",
            "reduzir a velocidade e sinalizar com antecedência se for necessário mudar de faixa"
        ],
        correctAnswer: 3,
        explanation: "A direção defensiva orienta a reduzir a velocidade ao perceber um obstáculo e, se necessário mudar de faixa, sinalizar com antecedência. Isso alerta os demais condutores, especialmente motociclistas, que podem estar em pontos cegos.",
        difficulty: "easy"
    },
    {
        id: 14,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Ao mudar de faixa, para a direita ou para a esquerda, o condutor deverá",
        options: [
            "realizar a manobra rapidamente sem se preocupar com os outros usuários da via",
            "realizar a manobra e deixar que os demais veículos se ajustem à sua ação",
            "observar se é possível realizar a mudança com segurança e sinalizar avisando aos outros de sua intenção",
            "realizar a manobra com atenção apenas aos veículos à frente"
        ],
        correctAnswer: 2,
        explanation: "Antes de mudar de faixa, o condutor deve verificar os espelhos retrovisores, observar os pontos cegos e sinalizar sua intenção com antecedência usando o indicador de direção (seta), garantindo que a manobra pode ser feita com segurança.",
        difficulty: "easy"
    },
    {
        id: 15,
        category: CATEGORIES.LEGISLACAO,
        question: "A conduta adequada e responsável do condutor, caso ingira bebida alcoólica, é",
        options: [
            "tomar água reduzindo a concentração de álcool no sangue",
            "não dirigir em hipótese alguma",
            "ingerir café para ficar acordado e mais atento",
            "lavar o rosto com água fria para ficar mais atento"
        ],
        correctAnswer: 1,
        explanation: "Nenhuma medida caseira elimina o efeito do álcool no organismo. O álcool compromete reflexos, percepção e capacidade de julgamento. A única conduta segura e legal é não dirigir após ingerir bebida alcoólica.",
        difficulty: "easy"
    },
    {
        id: 16,
        category: CATEGORIES.LEGISLACAO,
        question: "Parar o veículo afastado da guia da calçada (meio-fio) a uma distância de cinquenta centímetros a um metro é uma infração (CTB Art. 182, inciso II)",
        options: [
            "leve",
            "gravíssima",
            "grave",
            "média"
        ],
        correctAnswer: 3,
        explanation: "Conforme o Art. 182, inciso II do CTB, parar o veículo afastado da guia da calçada de cinquenta centímetros a um metro é infração de natureza média.",
        difficulty: "hard"
    },
    {
        id: 17,
        category: CATEGORIES.LEGISLACAO,
        question: "Parada de veículo é definida pelo tempo",
        options: [
            "pelo tempo máximo de 30 minutos, para efetuar embarque ou desembarque de passageiros",
            "estritamente necessário para efetuar embarque ou desembarque de passageiros",
            "não superior a dez minutos para efetuar embarque ou desembarque de passageiros",
            "não superior a quinze minutos, para efetuar embarque ou desembarque de passageiros"
        ],
        correctAnswer: 1,
        explanation: "Conforme o Anexo I do CTB, parada é a imobilização do veículo pelo tempo estritamente necessário para efetuar embarque ou desembarque de passageiros. Não há tempo fixo definido; deve ser apenas o necessário.",
        difficulty: "medium"
    },
    {
        id: 18,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Atos de imperícia de condutores são ocasionados por",
        options: [
            "desobediência à sinalização",
            "dirigir sob efeito de álcool",
            "dirigir com sono",
            "falta de habilidade"
        ],
        correctAnswer: 3,
        explanation: "Imperícia é a falta de habilidade técnica para conduzir o veículo. Difere de imprudência (falta de cautela) e negligência (falta de cuidado/manutenção). Desobedecer sinalização e dirigir alcoolizado são exemplos de imprudência.",
        difficulty: "medium"
    },
    {
        id: 19,
        category: CATEGORIES.SINALIZACAO,
        question: "Diante da placa de regulamentação R-3, qual deve ser a ação do condutor?",
        options: [
            "pode seguir em frente se for caso de emergência",
            "não deverá seguir em frente, pois é proibido",
            "pode seguir em frente, desde que more naquela via",
            "pode seguir em frente desde que não haja veículo vindo em sua direção"
        ],
        correctAnswer: 1,
        explanation: "A placa R-3 indica 'Sentido Proibido'. O condutor não deve seguir em frente sob nenhuma circunstância, pois a via à frente opera em sentido contrário. Desobedecer essa placa é infração gravíssima.",
        difficulty: "easy",
        image: "R-3"
    },
    {
        id: 20,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "O condutor, ao abrir mão de sua preferência em razão da segurança do motociclista, pratica",
        options: [
            "direção passiva",
            "direção defensiva",
            "direção agressiva",
            "direção ativa"
        ],
        correctAnswer: 1,
        explanation: "A direção defensiva consiste em adotar atitudes preventivas para evitar acidentes, mesmo tendo a preferência. Abrir mão da preferência para proteger motociclistas ou outros usuários vulneráveis é um exemplo clássico de direção defensiva.",
        difficulty: "easy"
    },
    {
        id: 21,
        category: CATEGORIES.LEGISLACAO,
        question: "Dirigir veículo sem possuir a Carteira de Habilitação ou Permissão para Dirigir é uma infração (CTB Art. 162, inciso I)",
        options: [
            "gravíssima",
            "média",
            "leve",
            "grave"
        ],
        correctAnswer: 0,
        explanation: "Conforme o Art. 162, inciso I do CTB, dirigir veículo sem possuir CNH, Permissão para Dirigir ou Autorização para Conduzir Ciclomotor é infração gravíssima, com penalidade de multa (multiplicada por três) e apreensão do veículo.",
        difficulty: "easy"
    },
    {
        id: 22,
        category: CATEGORIES.SINALIZACAO,
        question: "Diante da placa de advertência A-3a, o condutor deve reduzir a velocidade, pois há risco de acidente em função",
        options: [
            "da existência de um declive na via à frente",
            "de ocorrerem, frequentemente, ventos fortes, com risco de perda de estabilidade do veículo",
            "da pista da via à frente ser escorregadia",
            "da via à frente ser sinuosa, com a primeira curva à esquerda"
        ],
        correctAnswer: 3,
        explanation: "A placa A-3a adverte sobre pista sinuosa adiante, com a primeira curva à esquerda. O condutor deve reduzir a velocidade e manter atenção redobrada, pois a sequência de curvas exige manobras constantes de direção.",
        difficulty: "medium",
        image: "A-3a"
    },
    {
        id: 23,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Desconhecendo o local de destino, o condutor deve",
        options: [
            "seguir a intuição, quando for motorista experiente",
            "parar o veículo na via para obter informação",
            "enquanto dirige, cadastrar o destino no GPS",
            "estudar previamente o trajeto a ser executado"
        ],
        correctAnswer: 3,
        explanation: "A direção defensiva recomenda que o condutor planeje previamente o trajeto antes de sair. Parar na via, manipular GPS enquanto dirige ou seguir a intuição são atitudes que comprometem a segurança no trânsito.",
        difficulty: "easy"
    },
    {
        id: 24,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Para entregar uma carga sem atraso, um condutor está dirigindo a muitas horas seguidas, sem qualquer descanso. Essa sua atitude representa um(a)",
        options: [
            "dedicação à empresa em que trabalha, além de senso de responsabilidade no trânsito",
            "condição adversa do condutor, que é a fadiga e pode gerar acidentes",
            "alto espírito profissional, que não compromete a segurança no trânsito",
            "preocupação e um cuidado consigo mesmo e com os demais usuários da via"
        ],
        correctAnswer: 1,
        explanation: "A fadiga é uma condição adversa do condutor que reduz reflexos, atenção e capacidade de julgamento. Dirigir por muitas horas sem descanso é extremamente perigoso e é uma das principais causas de acidentes em rodovias.",
        difficulty: "easy"
    },
    {
        id: 25,
        category: CATEGORIES.LEGISLACAO,
        question: "Um candidato à obtenção da CNH foi aprovado nos exames de habilitação e recebeu a Permissão para Dirigir. Ao final de um ano, tendo cometido uma infração de natureza grave, ele",
        options: [
            "terá de reiniciar todo o processo de habilitação",
            "manterá a Permissão para Dirigir por mais um ano",
            "será submetido a curso de reciclagem",
            "receberá a CNH e a multa correspondente à infração"
        ],
        correctAnswer: 0,
        explanation: "Conforme o Art. 148, §3º do CTB, o condutor com Permissão para Dirigir que cometer infração de natureza grave ou gravíssima, ou for reincidente em infração média, não receberá a CNH definitiva e terá de reiniciar todo o processo de habilitação.",
        difficulty: "hard"
    },
    {
        id: 26,
        category: CATEGORIES.LEGISLACAO,
        question: "Quando o veículo estiver estacionado na calçada ou sobre as faixas destinadas a pedestres, o condutor terá como medida administrativa (CTB Art. 181, inciso VIII)",
        options: [
            "retenção do veículo",
            "recolhimento do CRV",
            "remoção do veículo",
            "recolhimento da CNH"
        ],
        correctAnswer: 2,
        explanation: "Conforme o Art. 181, inciso VIII do CTB, estacionar o veículo na calçada ou sobre faixas de pedestres é infração gravíssima, com penalidade de multa e medida administrativa de remoção do veículo.",
        difficulty: "medium"
    },
    {
        id: 27,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "A ocorrência de aquaplanagem é agravada quando",
        options: [
            "o sistema de embreagem do veículo está com desgaste acentuado",
            "a profundidade dos sulcos do pneu está abaixo do limite mínimo exigido",
            "o sistema de suspensão e de amortecedores perdeu a validade",
            "o condutor reduz a velocidade antes de entrar em trechos com água na pista"
        ],
        correctAnswer: 1,
        explanation: "A aquaplanagem ocorre quando uma camada de água se forma entre o pneu e o pavimento, fazendo o veículo perder a aderência. Pneus com sulcos desgastados (abaixo de 1,6 mm) não conseguem drenar a água adequadamente, agravando o risco.",
        difficulty: "medium"
    },
    {
        id: 28,
        category: CATEGORIES.SINALIZACAO,
        question: "A placa de indicação S-3 oferece ao condutor uma informação sobre um serviço oferecido na via. A que tipo de serviço a placa se refere?",
        options: [
            "área de borracharia",
            "área de obras",
            "área de serviço mecânico",
            "área de eletricista"
        ],
        correctAnswer: 2,
        explanation: "A placa S-3 é uma placa de serviço auxiliar que indica a existência de serviço mecânico nas proximidades. Placas de serviço auxiliar têm fundo azul e informam sobre serviços úteis aos condutores.",
        difficulty: "easy",
        image: "S-3"
    },
    {
        id: 29,
        category: CATEGORIES.PRIMEIROS_SOCORROS,
        question: "Em caso de acidente com vítima, o condutor deverá",
        options: [
            "sinalizar a área do acidente, utilizando entre outros: o triângulo, o pisca-alerta e galhos de árvores",
            "remover, imediatamente, as vítimas",
            "iluminar o local com as lanternas do veículo, apenas",
            "deixar a polícia chegar para resolver tudo"
        ],
        correctAnswer: 0,
        explanation: "A primeira ação em caso de acidente é sinalizar o local para evitar novos acidentes. Devem ser usados o triângulo de segurança (colocado a pelo menos 30 metros antes do veículo), o pisca-alerta e, se necessário, outros recursos disponíveis como galhos de árvores.",
        difficulty: "easy"
    },
    {
        id: 30,
        category: CATEGORIES.MECANICA,
        question: "A manutenção dos freios é condição básica de segurança no trânsito. Pode-se observar uma provável falha desse sistema identificando",
        options: [
            "o baixo nível do óleo do sistema de transmissão",
            "a falta de estabilidade em curvas",
            "a luz indicativa no painel de falha no sistema de arrefecimento",
            "o baixo nível de fluido no reservatório"
        ],
        correctAnswer: 3,
        explanation: "O fluido de freio é essencial para o funcionamento do sistema de freios hidráulicos. Um nível baixo no reservatório pode indicar desgaste das pastilhas ou vazamento no sistema, comprometendo a capacidade de frenagem.",
        difficulty: "medium"
    },

    // ============================================================
    // QUESTÕES 31–50: Adicionais baseadas no CTB
    // ============================================================

    // --- LEGISLAÇÃO (31–34) ---
    {
        id: 31,
        category: CATEGORIES.LEGISLACAO,
        question: "Na ausência de sinalização, a velocidade máxima permitida em vias urbanas do tipo arterial é de",
        options: [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        correctAnswer: 2,
        explanation: "Conforme o Art. 61 do CTB, na ausência de sinalização regulamentadora, as velocidades máximas em vias urbanas são: via de trânsito rápido = 80 km/h, via arterial = 60 km/h, via coletora = 40 km/h, via local = 30 km/h.",
        difficulty: "medium"
    },
    {
        id: 32,
        category: CATEGORIES.LEGISLACAO,
        question: "No sistema de pontuação do CTB, uma infração de natureza gravíssima gera quantos pontos na CNH?",
        options: [
            "3 pontos",
            "5 pontos",
            "7 pontos",
            "10 pontos"
        ],
        correctAnswer: 2,
        explanation: "Conforme o Art. 259 do CTB: infração leve = 3 pontos, média = 4 pontos, grave = 5 pontos e gravíssima = 7 pontos. Acumular pontos acima do limite pode levar à suspensão do direito de dirigir.",
        difficulty: "medium"
    },
    {
        id: 33,
        category: CATEGORIES.LEGISLACAO,
        question: "Dirigir com a Carteira Nacional de Habilitação ou Permissão para Dirigir vencida há mais de 30 dias é infração de natureza",
        options: [
            "média",
            "grave",
            "gravíssima",
            "leve"
        ],
        correctAnswer: 2,
        explanation: "Conforme o Art. 162, inciso V do CTB, dirigir com CNH ou Permissão vencida há mais de 30 dias é infração gravíssima, com penalidade de multa e recolhimento do documento de habilitação. O condutor deve sempre manter sua habilitação em dia.",
        difficulty: "medium"
    },
    {
        id: 34,
        category: CATEGORIES.LEGISLACAO,
        question: "O pedestre que estiver atravessando a via sobre a faixa de pedestres tem",
        options: [
            "prioridade de passagem apenas quando o semáforo estiver verde para ele",
            "prioridade de passagem sobre os veículos, exceto em rodovias",
            "prioridade de passagem, exceto sobre os veículos de transporte coletivo",
            "prioridade de passagem sobre os veículos"
        ],
        correctAnswer: 3,
        explanation: "Conforme o Art. 70 do CTB, o pedestre que estiver atravessando a via sobre a faixa de pedestres tem prioridade de passagem sobre os veículos. Os condutores devem reduzir a velocidade e parar para dar passagem aos pedestres.",
        difficulty: "easy"
    },

    // --- SINALIZAÇÃO (35–38) ---
    {
        id: 35,
        category: CATEGORIES.SINALIZACAO,
        question: "A linha contínua amarela, pintada no centro da pista, indica que",
        options: [
            "a via permite estacionamento dos dois lados",
            "é permitido ultrapassar com cuidado",
            "é proibida a ultrapassagem naquele trecho",
            "a velocidade da via é reduzida"
        ],
        correctAnswer: 2,
        explanation: "A linha contínua amarela no centro da via (LFO-1) indica que é proibido ultrapassar ou transpor aquela linha. Ela separa os fluxos opostos de tráfego e é usada em trechos onde a ultrapassagem oferece risco, como em curvas e aclives.",
        difficulty: "easy"
    },
    {
        id: 36,
        category: CATEGORIES.SINALIZACAO,
        question: "Ao se deparar com a placa R-1 (Parada Obrigatória), o condutor deve",
        options: [
            "reduzir a velocidade e seguir em frente se não houver veículos",
            "parar o veículo, verificar se é possível seguir e prosseguir com segurança",
            "buzinar e prosseguir com atenção",
            "parar somente se houver outro veículo se aproximando"
        ],
        correctAnswer: 1,
        explanation: "A placa R-1 (PARE) determina que o condutor deve obrigatoriamente parar o veículo, verificar as condições de trânsito e só então prosseguir quando for seguro. A parada é obrigatória mesmo quando não há veículos visíveis.",
        difficulty: "easy"
    },
    {
        id: 37,
        category: CATEGORIES.SINALIZACAO,
        question: "O semáforo com luz amarela intermitente (piscante) indica que o condutor deve",
        options: [
            "parar obrigatoriamente",
            "acelerar para passar rapidamente",
            "seguir em frente sem precaução",
            "reduzir a velocidade e seguir com atenção redobrada"
        ],
        correctAnswer: 3,
        explanation: "A luz amarela intermitente (piscante) no semáforo é um sinal de advertência que indica que o condutor deve reduzir a velocidade e prosseguir com atenção redobrada. Geralmente é utilizada em horários de menor movimento.",
        difficulty: "easy"
    },
    {
        id: 38,
        category: CATEGORIES.SINALIZACAO,
        question: "As placas de regulamentação, em sua maioria, possuem formato circular com fundo branco e orla vermelha. Sua função é",
        options: [
            "advertir sobre condições perigosas na via",
            "indicar serviços auxiliares ao condutor",
            "informar direções, distâncias e localidades",
            "informar ao condutor sobre condições de proibições, restrições e obrigações no uso da via"
        ],
        correctAnswer: 3,
        explanation: "As placas de regulamentação têm a função de informar ao condutor sobre condições de proibições, restrições, obrigações e deveres no uso da via. São de cumprimento obrigatório e sua desobediência constitui infração de trânsito.",
        difficulty: "easy"
    },

    // --- DIREÇÃO DEFENSIVA (39–42) ---
    {
        id: 39,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Para manter uma distância segura do veículo da frente, recomenda-se utilizar a regra dos dois segundos. Essa técnica consiste em",
        options: [
            "contar dois segundos após acionar os freios",
            "manter a distância de dois veículos entre o seu carro e o da frente",
            "observar quando o veículo da frente passar por um ponto fixo e contar dois segundos; se você passar pelo mesmo ponto antes, está muito perto",
            "contar dois segundos antes de iniciar qualquer manobra"
        ],
        correctAnswer: 2,
        explanation: "A regra dos dois segundos é uma técnica prática para avaliar a distância de seguimento: quando o veículo da frente passar por um ponto fixo (placa, poste), conte 'mil e um, mil e dois'. Se você passar pelo mesmo ponto antes de completar a contagem, está muito perto.",
        difficulty: "medium"
    },
    {
        id: 40,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "São elementos fundamentais da direção defensiva:",
        options: [
            "velocidade, potência, aceleração, frenagem e habilidade",
            "conhecimento, atenção, previsão, habilidade e ação",
            "experiência, idade, paciência, conhecimento e calma",
            "visão, audição, reflexo, velocidade e ação"
        ],
        correctAnswer: 1,
        explanation: "Os cinco elementos fundamentais da direção defensiva são: Conhecimento (regras e leis), Atenção (concentração constante), Previsão (antecipar situações de risco), Habilidade (domínio do veículo) e Ação (tomar a atitude correta).",
        difficulty: "medium"
    },
    {
        id: 41,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Ao trafegar ao lado de veículos de grande porte (ônibus e caminhões), o condutor deve ter especial atenção porque esses veículos",
        options: [
            "são sempre mais rápidos e podem ultrapassar a qualquer momento",
            "possuem pontos cegos maiores, onde veículos menores podem não ser vistos",
            "têm prioridade de passagem em qualquer situação",
            "não utilizam indicadores de direção para mudar de faixa"
        ],
        correctAnswer: 1,
        explanation: "Veículos de grande porte possuem pontos cegos (áreas não visíveis pelos retrovisores) significativamente maiores. Condutores de veículos menores devem evitar trafegar nessas áreas, pois podem não ser percebidos pelo condutor do veículo maior.",
        difficulty: "medium"
    },
    {
        id: 42,
        category: CATEGORIES.DIRECAO_DEFENSIVA,
        question: "Ao dirigir à noite em rodovia sem iluminação, o condutor deve alternar para a luz baixa quando",
        options: [
            "o veículo que vem em sentido contrário estiver a menos de 200 metros",
            "estiver chovendo e com neblina",
            "estiver sozinho na rodovia",
            "estiver em alta velocidade"
        ],
        correctAnswer: 0,
        explanation: "Conforme o Art. 222 do CTB e as práticas de direção defensiva, o condutor deve trocar a luz alta pela luz baixa quando outro veículo se aproximar em sentido contrário, para não ofuscar sua visão. A distância recomendada é de pelo menos 200 metros.",
        difficulty: "medium"
    },

    // --- PRIMEIROS SOCORROS (43–45) ---
    {
        id: 43,
        category: CATEGORIES.PRIMEIROS_SOCORROS,
        question: "Em caso de suspeita de fratura em uma vítima de acidente de trânsito, a ação correta é",
        options: [
            "tentar colocar o osso no lugar",
            "movimentar o membro fraturado para verificar a gravidade",
            "imobilizar o membro na posição encontrada e aguardar o socorro especializado",
            "massagear o local para aliviar a dor"
        ],
        correctAnswer: 2,
        explanation: "Em caso de suspeita de fratura, nunca se deve tentar reposicionar o osso ou movimentar o membro. O correto é imobilizar a região na posição em que foi encontrada, utilizando talas improvisadas, e aguardar o socorro especializado (SAMU 192).",
        difficulty: "easy"
    },
    {
        id: 44,
        category: CATEGORIES.PRIMEIROS_SOCORROS,
        question: "O número do SAMU (Serviço de Atendimento Móvel de Urgência), que deve ser acionado em caso de acidente de trânsito com vítimas, é",
        options: [
            "190",
            "191",
            "192",
            "193"
        ],
        correctAnswer: 2,
        explanation: "O SAMU atende pelo número 192. Outros números de emergência importantes: 190 (Polícia Militar), 191 (Polícia Rodoviária Federal), 193 (Corpo de Bombeiros). Em caso de acidente, ligue para 192 ou 193.",
        difficulty: "easy"
    },
    {
        id: 45,
        category: CATEGORIES.PRIMEIROS_SOCORROS,
        question: "Ao encontrar uma vítima de acidente de trânsito inconsciente, mas respirando, a posição recomendada para colocá-la enquanto aguarda o socorro é",
        options: [
            "sentada, com a cabeça entre as pernas",
            "de bruços, com a cabeça virada para o lado",
            "de lado, na posição lateral de segurança",
            "de barriga para cima, com as pernas elevadas"
        ],
        correctAnswer: 2,
        explanation: "A posição lateral de segurança (PLS) é indicada para vítimas inconscientes que respiram. Essa posição evita que a língua obstrua as vias aéreas e impede o engasgo caso haja vômito. Nunca mova a vítima se houver suspeita de lesão na coluna.",
        difficulty: "medium"
    },

    // --- MECÂNICA BÁSICA (46–48) ---
    {
        id: 46,
        category: CATEGORIES.MECANICA,
        question: "Pneus com calibragem incorreta podem causar",
        options: [
            "melhoria na estabilidade do veículo",
            "desgaste irregular dos pneus, aumento do consumo de combustível e risco de acidentes",
            "apenas desconforto ao dirigir, sem riscos à segurança",
            "redução do consumo de combustível"
        ],
        correctAnswer: 1,
        explanation: "Pneus com calibragem incorreta causam desgaste irregular, aumentam o consumo de combustível, prejudicam a estabilidade e a frenagem, e aumentam o risco de estouro do pneu. A calibragem deve ser verificada regularmente, com os pneus frios.",
        difficulty: "easy"
    },
    {
        id: 47,
        category: CATEGORIES.MECANICA,
        question: "O sistema de arrefecimento do veículo tem como função principal",
        options: [
            "lubrificar o motor",
            "resfriar o habitáculo do veículo",
            "manter a temperatura ideal de funcionamento do motor",
            "filtrar as impurezas do combustível"
        ],
        correctAnswer: 2,
        explanation: "O sistema de arrefecimento é responsável por manter a temperatura do motor na faixa ideal de funcionamento, evitando o superaquecimento. Ele utiliza o líquido de arrefecimento (água + aditivo) que circula pelo motor, absorvendo o calor excessivo.",
        difficulty: "easy"
    },
    {
        id: 48,
        category: CATEGORIES.MECANICA,
        question: "Quando a luz indicadora de temperatura da água no painel do veículo acende durante a condução, o condutor deve",
        options: [
            "continuar dirigindo normalmente até o destino",
            "acelerar para que o vento resfrie o motor",
            "parar o veículo em local seguro e verificar o sistema de arrefecimento",
            "desligar o ar-condicionado e manter a velocidade"
        ],
        correctAnswer: 2,
        explanation: "A luz de temperatura acesa indica superaquecimento do motor. Continuar dirigindo pode causar danos graves ao motor. O condutor deve parar em local seguro, desligar o motor e verificar o nível do líquido de arrefecimento. Nunca abra a tampa do radiador com o motor quente.",
        difficulty: "easy"
    },

    // --- MEIO AMBIENTE (49) ---
    {
        id: 49,
        category: CATEGORIES.MEIO_AMBIENTE,
        question: "O catalisador (conversor catalítico) instalado no sistema de escapamento do veículo tem como função",
        options: [
            "aumentar a potência do motor",
            "reduzir o ruído do escapamento",
            "transformar gases poluentes em gases menos nocivos ao meio ambiente",
            "melhorar o consumo de combustível"
        ],
        correctAnswer: 2,
        explanation: "O catalisador transforma gases tóxicos produzidos pela combustão (monóxido de carbono, hidrocarbonetos e óxidos de nitrogênio) em gases menos nocivos (dióxido de carbono, água e nitrogênio). É um componente obrigatório e essencial para a preservação do meio ambiente.",
        difficulty: "medium"
    },

    // --- CIDADANIA (50) ---
    {
        id: 50,
        category: CATEGORIES.CIDADANIA,
        question: "Ao ultrapassar um ciclista, o condutor do veículo motorizado deve manter uma distância lateral mínima de",
        options: [
            "0,50 metro",
            "1,00 metro",
            "1,50 metro",
            "2,00 metros"
        ],
        correctAnswer: 2,
        explanation: "Conforme o Art. 201 do CTB, ao ultrapassar um ciclista, o condutor deve guardar distância lateral de, no mínimo, 1,50 metro. Essa distância garante a segurança do ciclista, que é um usuário vulnerável da via.",
        difficulty: "easy"
    }
];

// Mapa de SVG inline das placas de trânsito
const SIGN_IMAGES = {
    "A-12": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placa A-12: Interseção em T">
        <rect x="10" y="10" width="100" height="100" transform="rotate(45 60 60)" fill="#F5D000" stroke="#1a1a1a" stroke-width="3"/>
        <line x1="60" y1="38" x2="60" y2="82" stroke="#1a1a1a" stroke-width="8" stroke-linecap="round"/>
        <line x1="38" y1="50" x2="82" y2="50" stroke="#1a1a1a" stroke-width="8" stroke-linecap="round"/>
    </svg>`,

    "R-3": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placa R-3: Sentido Proibido">
        <circle cx="60" cy="60" r="52" fill="#CC0000" stroke="#fff" stroke-width="4"/>
        <rect x="28" y="50" width="64" height="20" rx="4" fill="#fff"/>
    </svg>`,

    "A-3a": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placa A-3a: Pista Sinuosa à Esquerda">
        <rect x="10" y="10" width="100" height="100" transform="rotate(45 60 60)" fill="#F5D000" stroke="#1a1a1a" stroke-width="3"/>
        <path d="M60 82 Q40 65 60 55 Q80 45 60 35" fill="none" stroke="#1a1a1a" stroke-width="8" stroke-linecap="round"/>
    </svg>`,

    "S-3": `<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placa S-3: Serviço Mecânico">
        <rect x="4" y="4" width="132" height="92" rx="8" fill="#005BAA" stroke="#fff" stroke-width="4"/>
        <g transform="translate(70,50)" fill="#fff">
            <rect x="-28" y="-6" width="56" height="12" rx="3" transform="rotate(45)"/>
            <rect x="-28" y="-6" width="56" height="12" rx="3" transform="rotate(-45)"/>
            <circle cx="0" cy="0" r="6" fill="#005BAA" stroke="#fff" stroke-width="2"/>
        </g>
    </svg>`
};
