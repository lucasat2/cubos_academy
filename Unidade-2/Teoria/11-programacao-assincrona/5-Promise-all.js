// comandos usados no terminal antes de começar o projeto:
//npm init -y
//npm i axios(instalar quando tiver com internet)

const axios = require("axios");

async function obterLogradouro(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return responde.data.logradouro;
}


// PERMITE QUE TODAS AS PROMESSAS RODEM DE UMA VEZ, NO FOR DO EXEMPLO ANTERIOR, RODAM UMA DE CADA VEZ APENAS. PODE SER
//MUITO PESADO POIS ENVIA VARIOS CEPS DE UMA SÓ VEZ. O IDEAL É USAR FOR OF 

async function exibirLogradouros(ceps) {
  await Promisse.all(
    ceps.map(async (cep) => {
      console.log(cep, "=>", await obterLogradouro(cep));
    })
  );
}
exibirLogradouros([
  "40140650",
  "01001000",
  "40140650",
  "01001000",
  "40140650",
  "01001000",
  "40140650",
  "01001000"]);

