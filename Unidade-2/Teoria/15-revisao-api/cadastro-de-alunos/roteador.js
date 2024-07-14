const express = require('express');

const controladorAlunos = require('./controladores/alunos');

const roteador = express();

roteador.get('/alunos/',controladorAlunos.obterAlunos);

roteador.get('/aluno/:id', controladorAlunos.obterAlunoPorId);

roteador.post('/alunos', controladorAlunos.criarAluno);

module.exports = roteador;