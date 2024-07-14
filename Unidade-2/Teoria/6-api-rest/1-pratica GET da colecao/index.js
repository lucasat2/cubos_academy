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
app.listen(8000);