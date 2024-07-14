const express = require('express');
const roteador = require('./roteador');
const filtroAutenticacao = require('./autenticacao');
const app = express();  //construindo o objeto express dentro de app
app.use(express.json()); // Avisar pro app o formato que vai trabalhar
app.use(filtroAutenticacao);
app.use(roteador);
app.listen(8000); // Montar o servidor na porta 8000