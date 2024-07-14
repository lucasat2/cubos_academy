// IMPORTACOES
const fs = require('fs/promises');
const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');

// INICIO
app.get('/enderecos/:cep', async (req, res) => {
  const cep = req.params.cep;
  const enderecos = JSON.parse(await fs.readFile('enderecos.json'));
  const cepComTraco = `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;
  const enderecoEncontrado = enderecos.find(e => e.cep === cepComTraco);

  if (enderecoEncontrado) {
    console.log('Encontrei no arquivo!');
    return res.json(enderecoEncontrado);
  }

  console.log('Vou pro via Cep');
  const viaCepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  if (viaCepResponse) { 
    enderecos.push(viaCepResponse);

    await fs.writeFile('enderecos.json', JSON.stringify(enderecos));
  }

  res.json(viaCepResponse);
});

app.listen(8000);



/* ************************ COMENTARIOS DA AULA*********************************

Instalar pacotes antes de comecar 
npm init -y
npm i nodemon
npm i express
npm i axios 

A promessa é retornada com um buffer binário. A codificacao UTF-8 é para traduzir para um texto.

JSON.parse é para converter o texto retornado pelo buffer para JSON.

Stringify converte qualquer elemento javascript em texto, para que possa ser escrito */