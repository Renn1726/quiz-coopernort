const telas = document.querySelectorAll(".tela");
const botaoIniciar = document.getElementById("start-button");

function atualizarVisibilidadeTelas() {
  const telas = document.querySelectorAll(".tela");
  telas.forEach((tela) => {
    if (tela.classList.contains("tela-ativa")) {
      tela.style.display = "flex";
    } else {
      tela.style.display = "none";
    }
  });
}
const perguntas = [
  {
    pergunta: "O sistema de plantio direto na palha ajuda a:",
    alternativas: [
      "Compactar o solo",
      "Evitar a erosão",
      "Substituir fertilizantes",
      "Reduzir o uso de sementes",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "A adubação verde é feita com:",
    alternativas: [
      "Produtos químicos",
      "Plantas que enriquecem o solo",
      "Água de irrigação",
      "Restos de culturas",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "A sigla EMBRAPA significa:",
    alternativas: [
      "Empresa Brasileira de Produção Animal",
      "Empresa Brasileira de Pesquisa Agropecuária",
      "Empresa Brasileira de Plantio Agrícola",
      "Entidade Brasileira de Práticas Agrárias",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "A rotação de culturas tem como função principal:",
    alternativas: [
      "Aumentar a mecanização",
      "Reduzir a mão de obra",
      "Controlar pragas e melhorar o solo",
      "Diminuir o tempo de colheita",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O que são culturas perenes?",
    alternativas: [
      "Plantas colhidas no mesmo ano",
      "Plantas que vivem por vários anos",
      "Plantas sem raízes",
      "Plantas aquáticas",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "A sigla MAPA refere-se ao:",
    alternativas: [
      "Ministério da Agricultura, Pecuária e Abastecimento",
      "Manual de Atividades Produtivas Agrícolas",
      "Movimento Agrário Para Agricultura",
      "Ministério Ambiental e do Patrimônio Agrícola",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "A prática do terraceamento evita:",
    alternativas: [
      "Aumentos na produtividade",
      "Perda de sementes",
      "Erosão em áreas inclinadas",
      "Crescimento de pragas",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O solo argiloso tem como característica:",
    alternativas: [
      "Ser muito arenoso",
      "Ter baixa retenção de água",
      "Ter boa retenção de nutrientes",
      "Ser inadequado para agricultura",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A agrofloresta combina:",
    alternativas: [
      "Culturas irrigadas e sequeiras",
      "Cultivo agrícola e criação intensiva",
      "Agricultura e espécies florestais",
      "Solo fértil e pastagem",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A cultura do algodão é conhecida por exigir:",
    alternativas: [
      "Pouca água",
      "Muitos fertilizantes",
      "Técnicas de reflorestamento",
      "Clima frio",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "As leguminosas são importantes porque:",
    alternativas: [
      "Repelem insetos naturalmente",
      "Melhoram o pH do solo",
      "Fixam nitrogênio no solo",
      "Produzem frutas maiores",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A silvicultura é voltada para:",
    alternativas: [
      "Plantio de grãos",
      "Criação de animais",
      "Cultivo de árvores",
      "Construção de cercas",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A agricultura de precisão utiliza:",
    alternativas: [
      "Somente sementes híbridas",
      "Apenas tração animal",
      "Tecnologias como GPS e sensores",
      "Plantio manual",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O pH ideal do solo para a maioria das culturas é:",
    alternativas: ["Entre 2 e 3", "Entre 4 e 5", "Entre 6 e 7", "Acima de 9"],
    respostaCorreta: 2,
  },
  {
    pergunta: "A calagem do solo é feita para:",
    alternativas: [
      "Aumentar a acidez",
      "Aumentar a alcalinidade",
      "Corrigir a acidez do solo",
      "Substituir irrigação",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A cultura da soja é sensível a:",
    alternativas: [
      "Águas profundas",
      "Altas temperaturas noturnas",
      "Déficit hídrico na floração",
      "Solo arenoso",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O sistema agropecuário extensivo é caracterizado por:",
    alternativas: [
      "Alta tecnologia",
      "Uso intensivo do solo",
      "Baixa produtividade por área",
      "Agricultura orgânica",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O uso indiscriminado de agrotóxicos pode causar:",
    alternativas: [
      "Aumento da produção sem riscos",
      "Poluição do solo e da água",
      "Melhoria da biodiversidade",
      "Menor dependência de máquinas",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "O que é agricultura de sequeiro?",
    alternativas: [
      "Com uso de irrigação constante",
      "Cultivo em estufas",
      "Agricultura sem irrigação artificial",
      "Agricultura com adubação líquida",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O Brasil se destaca na produção mundial de:",
    alternativas: [
      "Arroz e trigo",
      "Soja e café",
      "Uva e maçã",
      "Batata e alho",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "A sigla SAFs refere-se a:",
    alternativas: [
      "Sistemas Agrícolas Familiares",
      "Sistemas Agroflorestais",
      "Sementes de Alta Fertilidade",
      "Soluções Agrícolas Federais",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "A agricultura hidropônica cultiva plantas em:",
    alternativas: [
      "Areia",
      "Solo argiloso",
      "Água com nutrientes",
      "Vasos comuns",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A principal praga da cultura do milho é:",
    alternativas: [
      "Mosca-branca",
      "Broca-do-café",
      "Lagarta-do-cartucho",
      "Ácaro-vermelho",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A compostagem é um processo de:",
    alternativas: [
      "Irrigação constante",
      "Transformação de resíduos orgânicos em adubo",
      "Uso de sementes geneticamente modificadas",
      "Pulverização foliar",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Os transgênicos são organismos que:",
    alternativas: [
      "Não possuem DNA",
      "Foram cruzados naturalmente",
      "Tiveram seu material genético modificado",
      "Não podem ser cultivados",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A biotecnologia na agricultura permite:",
    alternativas: [
      "Redução de mão de obra",
      "Melhoria genética de plantas",
      "Substituição de solos férteis",
      "Eliminação do uso de água",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta:
      "A principal vantagem do sistema ILPF (Integração Lavoura-Pecuária-Floresta) é:",
    alternativas: [
      "Reduzir o número de espécies",
      "Aumentar o desmatamento",
      "Otimizar o uso do solo e diversificar a produção",
      "Focar apenas em gado leiteiro",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A agricultura regenerativa tem como objetivo:",
    alternativas: [
      "Usar mais fertilizantes químicos",
      "Aumentar o desmatamento",
      "Recuperar a saúde do solo e ecossistemas",
      "Eliminar toda forma de pastagem",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "As zonas agroecológicas servem para:",
    alternativas: [
      "Determinar áreas de mineração",
      "Classificar regiões conforme aptidão agrícola",
      "Dividir terras indígenas",
      "Proibir cultivo de transgênicos",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "O principal fator para escolha de uma cultura agrícola é:",
    alternativas: [
      "Tipo de embalagem",
      "Design das máquinas",
      "Clima, solo e mercado",
      "Tamanho da colheitadeira",
    ],
    respostaCorreta: 2,
  },
];

const perguntaElemento = document.getElementById("pergunta-alt");
const alternativasElemento = document.getElementById("alternativas");

function exibirPerguntaAleatoria() {
  const perguntaAleatoria =
    perguntas[Math.floor(Math.random() * perguntas.length)];

  perguntaElemento.textContent = perguntaAleatoria.pergunta;

  alternativasElemento.innerHTML = "";

  const letras = ["A)", "B)", "C)", "D)"];

  perguntaAleatoria.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.classList.add("alternativa");
    botao.textContent = `${letras[index]} ${alternativa}`;

    alternativasElemento.appendChild(botao);
  });

  return perguntaAleatoria;
}

alternativasElemento.addEventListener("click", (event) => {
  const alternativa = event.target.closest(".alternativa");

  if (alternativa) {
    document
      .querySelectorAll(".alternativa")
      .forEach((alt) => alt.classList.remove("alternativa-selected"));

    alternativa.classList.add("alternativa-selected");
  }
});

let perguntaAtual;
window.onload = () => {
  atualizarVisibilidadeTelas();
  document.body.style.overflow = "hidden";

  perguntaAtual = exibirPerguntaAleatoria();
};

botaoIniciar.addEventListener("click", () => {
  const telaInicial = document.getElementById("tela-inicial");
  const telaPergunta = document.getElementById("tela-pergunta");

  telaInicial.classList.add("fade-out");

  setTimeout(() => {
    telaInicial.classList.remove("tela-ativa");

    telaPergunta.classList.add("tela-ativa");

    atualizarVisibilidadeTelas();

    telaInicial.style.display = "none";
  }, 300);
});

const botaoEnviar = document.querySelector(".submit-button");

botaoEnviar.addEventListener("click", () => {
  const telaErro = document.getElementById("tela-erro");
  const telaAcerto = document.getElementById("tela-acerto");
  const telaPergunta = document.getElementById("tela-pergunta");

  const alternativaSelecionada = document.querySelector(
    ".alternativa-selected"
  );

  if (alternativaSelecionada) {
    const indiceSelecionado = Array.from(alternativasElemento.children).indexOf(
      alternativaSelecionada
    );

    if (indiceSelecionado === perguntaAtual.respostaCorreta) {
      telaPergunta.classList.remove("tela-ativa");
      telaAcerto.classList.add("tela-ativa");
    } else {
      telaPergunta.classList.remove("tela-ativa");
      telaErro.classList.add("tela-ativa");
    }

    setTimeout(atualizarVisibilidadeTelas, 500);
  } else {
    alert("Por favor, selecione uma alternativa antes de enviar!");
  }
});
