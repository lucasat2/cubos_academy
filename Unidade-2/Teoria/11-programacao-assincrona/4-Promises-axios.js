// comandos usados no terminal antes de começar o projeto:
//npm init -y
//npm i axios(instalar quando tiver com internet)

const axios = require("axios");

async function obterLogradouro(cep) { 
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return responde.data.logradouro;
}
async function exibirLogradouro(ceps) { 
  for (const cep of ceps) { 
    console.log(cep, '=>', await obterLogradouro(cep));
  }
}
exibirLogradouro(["40140650", "01001000"]);

