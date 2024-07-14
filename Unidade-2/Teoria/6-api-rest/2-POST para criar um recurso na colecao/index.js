// PRATICA GET COLECAO LISTA DE INSTRUTORES

const express = require('express');
const app = express();

const listadeInstrutores = [
  {
    id: 1,
    nome: "Junior",
    idade: 29,
    areaDeAtuacao: "Logica",
  },
  {
    id: 2,
    nome: "Dina",
    idade: 19,
    areaDeAtuacao: "Back-end",
  },
  {
    id: 3,
    nome: "Guido Cerqueira",
    idade: 30,
    areaDeAtuacao: "Full-stack",
  },
  {
    id: 4,
    nome: "Victor Magalhaes",
    idade: 28,
    areaDeAtuacao: "Front-end",
  },
];

// PEGANDO A LISTA DE INSTRUTORES COMPLETA 
app.get("/instrutores", (req, res) => {
  // Json é o padrao de resposta para requisicoes rest 
  res.json(listadeInstrutores);
});

//PEGANDO O INSTRUTOR NA POSICAO 3
app.get("/instrutores/3", (req, res) => {
  const instrutor = listadeInstrutores[2];
  res.json(instrutor);
});

//PEGANDO O INSTRUTOR EM QUALQUER POSICAO
// Procure um instrutor, no qual o id do instrutor seja igual ao parametro idconsultado

app.get("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listadeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));  // Necessario converter para number pois sempre retorna uma string
  res.json(instrutor);
});
// Exemplo consultando o id 4:
// http://localhost:8000/instrutores/4;

// _____________________________________________________________________________________________________________________________________________


// POST instrutores - Utilizado para criar dados novos

// PASSAR ESSES DADOS NO INSOMNIA

/* "nome": "Guilherme Bernal 2",
  "idade": 26,
  "areaDeAtuacao": "Back-end"*/

app.post("/instrutores", (req, res) => {
  console.log(req.body);

  const novoInstrutor = {
    id: proximoId,
    nome: req.body.nome,
    idade: req.body.idade,
    areaDeAtuacao: req.body.areaDeAtuacao,
  };

  listaDeInstrutores.push(novoInstrutor);
  // incrementa o id 
  proximoId += 1;
  res.json(novoInstrutor);
});

// _____________________________________________________________________________________________________________________________________________
// PATCH - Para editar informações 

app.patch("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado)
  );

  // SE não for preenchido nada , retorne do jeito que estava.
  if (req.body.nome = !undefined) {
    instrutor.nome = req.body.nome;

    if (req.body.idade = !undefined) {
      instrutor.idade = req.body.idade;
    }

    if (req.body.areaDeAtuacao != undefined) {
      instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    };

    //  Mostrar valor editado
    res.json(instrutor);
  }
});
// _____________________________________________________________________________________________________________________________________________
//PUT PARA SUBSTISTITUIR UMA INFORMACAO CASO EXISTA, SENAO , INSIRA.

app.put("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado)
  );

  // Se o instrutor existir, substitua,senao, insira
  if (instrutor) {
    // subtituir o existente
    instrutor.nome = req.body.nome;
    instrutor.idade = req.body.idade;
    instrutor.areaDeAtuacao - req.body.areaDeAtuacao;
    res.json(instrutor);
  } else {
    // inserir
    const novoInstrutor = req.body;
    listaDeInstrutores.push(novoInstrutor);
    res.json(novoInstrutor);
  }
});

// _____________________________________________________________________________________________________________________________________________
// DELETE
app.delete("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado)
  );
  const indice = listaDeInstrutores.indexOf(instrutor);
  listadeInstrutores.splice(indice, 1);
  res.json(instrutor);
});
app.listen(8000);