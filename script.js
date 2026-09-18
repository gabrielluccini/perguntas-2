const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você imagina o impacto da inteligência artificial nas profissões do futuro?",
        alternativas: [
            {
                texto: "A tecnologia assumirá tarefas repetitivas, permitindo que a humanidade se dedique a profissões mais criativas, estratégicas e humanas. ",
                afirmacao: "Isso gerará uma valorização sem precedentes das habilidades socioemocionais, transformando as escolas em centros focados em empatia e liderança. "
            },
            {
                texto: "A automação em massa extinguirá cargos tradicionais rapidamente, gerando uma crise de emprego que exigirá mudanças profundas na economia. ",
                afirmacao: "Diante disso, novos modelos sociais vão surgir, forçando a implementação de rendas básicas universais para sustentar as famílias. "
            }
        ]
    },
    {
        enunciado: "De que maneira as ferramentas geradoras de conteúdo (imagens, textos, músicas) vão afetar a cultura? ",
        alternativas: [
            {
                texto: "Os sistemas artificiais funcionarão como copilotos dos artistas, expandindo o potencial de criação e dando vida a ideias antes impossíveis. ",
                afirmacao: "A fusão entre códigos e sentimentos humanos criará novos gêneros artísticos híbridos, revolucionando o cinema, a música e o design gráfico. "
            },
            {
                texto: "A internet será inundada por produções automáticas e genéricas, o que provocará um cansaço visual e a desvalorização do trabalho manual humano.",
                afirmacao: " Esse cenário provocará um movimento cultural de valorização do 'feito à mão', tornando produtos físicos e artesanais artigos de luxo extremados."
            }
        ]
    },
    {
        enunciado: "Quem deve controlar as regras de desenvolvimento das novas tecnologias digitais? ",
        alternativas: [
            {
                texto: "Organizações globais e governos devem aplicar leis rígidas para garantir a transparência de dados e proteger os direitos dos cidadãos. ",
                afirmacao: "A internet se tornará um ambiente mais seguro, embora com navegação monitorada e processos de inovação mais burocráticos e lentos. "
            },
            {
                texto: "As empresas privadas devem manter a liberdade de inovar rapidamente, deixando que o próprio mercado selecione as melhores soluções. ",
                afirmacao: "A evolução tecnológica avançará em ritmo exponencial, mas criará grandes abismos de desigualdade digital entre diferentes partes do mundo. "
            }
        ]
    },
    {
        enunciado: "Como será a nossa relação diária com os dispositivos eletrônicos e assistentes virtuais daqui a alguns anos? ",
        alternativas: [
            {
                texto: "Viveremos em total sintonia com assistentes ultra-inteligentes que gerenciam nossa rotina, estudos e saúde de forma automatizada. ",
                afirmacao: "Nossa dependência de telas diminuirá, pois as interfaces de voz e ambientes inteligentes responderão aos nossos comandos antes mesmo de falarmos. "
            },
            {
                texto: "A sociedade buscará um movimento de desconexão, limitando o uso de algoritmos para resgatar o valor das experiências e interações reais. ",
                afirmacao: "Haverá um renascimento de espaços públicos de convivência física, onde o uso de qualquer dispositivo eletrônico será considerado desrespeitoso. "
            }
        ]
    },
    {
        enunciado: "Como a sociedade lidará com o descarte de bilhões de dispositivos antigos e o consumo de energia dos servidores? ",
        alternativas: [
            {
                texto: "A indústria focará na criação de tecnologias totalmente circulares, com aparelhos feitos para durar décadas e fáceis de reciclar. ",
                afirmacao: "Paralelamente, o consumo consciente ditará o mercado, transformando o descarte de eletrônicos a nível global em uma prática do passado. "
            },
            {
                texto: " foco continuará na troca rápida de aparelhos (obsolescência programada), confiando que novas fontes de energia limpa darão conta do impacto ambiental. ",
                afirmacao: "Essa dinâmica exigirá uma infraestrutura monumental de usinas renováveis, testando o limite dos recursos naturais para sustentar o fluxo digital. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
