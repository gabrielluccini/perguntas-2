const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é Inteligência Artificial?",
        alternativas: [
            {
                texto: " É um campo da ciência da computação dedicado a criar sistemas e máquinas capazes de simular a inteligência humana para realizar tarefas e resolver problemas.",
                afirmacao: "A IA não é uma mente viva, mas sim um conjunto de algoritmos avançados que analisam dados para tomar decisões."
            },
            {
                texto: "A criação exclusiva de robôs físicos com força superior à humana.",
                afirmacao: " A IA não é uma mente viva, mas sim um conjunto de algoritmos avançados que analisam dados para tomar decisões."
            }
        ]
    },
    {
      enunciado: "Como os sistemas modernos de IA aprendem a realizar tarefas?",
        alternativas: [  e
            {
                texto: "  Através de regras fixas criadas por programadores que cobrem todas as situações possíveis.",
                afirmacao: " Essa técnica é chamada de Machine Learning (Aprendizado de Máquina), onde o sistema se ajusta sozinho a partir dos dados recebidos, sem precisar de programação direta para cada cenário."
            },
            {
                texto: "Analisando grandes volumes de dados para identificar padrões e prever resultados.",
                afirmacao: "Essa técnica é chamada de Machine Learning (Aprendizado de Máquina), onde o sistema se ajusta sozinho a partir dos dados recebidos, sem precisar de programação direta para cada cenário. "
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


{
      enunciado: "O que é a IA Generativa, que ficou famosa com ferramentas como o ChatGPT?",
        alternativas: [  e
            {
                texto: "  Uma IA que serve apenas para fazer cálculos matemáticos complexos de engenharia.",
                afirmacao: " Essa técnica é chamada de Machine Learning (Aprendizado de Máquina), onde o sistema se ajusta sozinho a partir dos dados recebidos, sem precisar de programação direta para cada cenário."
            },
            {
                texto: "Uma IA capaz de criar conteúdos novos e originais, como textos, imagens, músicas e códigos.",
                afirmacao: "Essa técnica é chamada de Machine Learning (Aprendizado de Máquina), onde o sistema se ajusta sozinho a partir dos dados recebidos, sem precisar de programação direta para cada cenário. "
            }
        ]
}

{
      enunciado: "O que é o Viés de Algoritmo Algorithmic Bias na IA?",
        alternativas: [  e
            {
                texto: "Uma falha técnica que faz o computador desligar sozinho quando processa dados muito pesados. ",
                afirmacao: " A reprodução de preconceitos humanos pela IA, causada por dados de treinamento históricos que são incompletos ou discriminatórios.."
            },
            {
                texto: "O Viés de Algoritmo é a reprodução e amplificação de preconceitos humanos por um sistema de IA, gerando decisões injustas ou discriminatórias.",
                afirmacao: "Isso acontece porque a IA não tem consciência ou senso ético; ela apenas analisa dados históricos e, se esses dados contiverem preconceitos da sociedade, a máquina aprenderá que esses padrões distorcidos são a regra correta a ser seguida.  "
            }
        ]
    },


{
      enunciado: "O que é o Deep Learning ",
        alternativas: [  e
            {
                texto: "Uma IA que imita redes de neurônios do cérebro para aprender tarefas complexas sozinha.",
                afirmacao: " O Deep Learning usa redes neurais artificiais com várias camadas para reconhecer rostos, traduzir idiomas e aprender sem ajuda humana constante."
            },
            {
                texto: "Um programa simples que apenas organiza arquivos em ordem alfabética.",
                afirmacao: "Essa tecnologia vai muito além de organizar arquivos; ela resolve problemas que computadores comuns não conseguem decifrar com regras simples.  "
            }
        ]
    },
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
