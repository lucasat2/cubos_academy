const express = require('express');

// Importando funcoes do pedidos.js
const pedidos = require('./controladores/pedidos');

const rotas = express();

//Utilizando as funcoes importadas
rotas.post('/criar-pedido',pedidos.criarPedido);
rotas.get('/consultar-pedido/:id',pedidos.consultarPedido);

module.exports = rotas;

