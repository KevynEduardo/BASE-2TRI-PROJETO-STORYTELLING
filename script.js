const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:  "como você se vê daqui 5 anos",
        alternativas: [
            {
                texto: "estável",
                afirmacao: "me formando na faculdade, tendo uma profissão estável "
            },
            {
                texto: "ainda não sei",
                afirmacao: "provavelmente trabalhando ou me formando "
            }
        ]
    },
    {
        enunciado: "qual tipo de carreira você almeja",
        alternativas: [
            {
                texto: "empreendendo",
                afirmacao: " me tornando o meu próprio chefe em um possível empreendimento fazendo algo que eu gosto"
            },
            {
                texto: "uma profissão que eu seja valorizado",
                afirmacao: "onde eu sou bem vindo e meu trabalho é valorizado "
            }
        ]
    },
    {
        enunciado: "o que falta para alcançar esse objetivo",
        alternativas: [
            {
                texto: "determinação, coragem e foco",
                afirmacao: "são coisas onde não me encontro estável, preciso melhorar"
            },
            {
                texto: "curso ou formação",
                afirmacao: "acredito que estou preparado, só falta me formar ou concluir um curso"
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
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
