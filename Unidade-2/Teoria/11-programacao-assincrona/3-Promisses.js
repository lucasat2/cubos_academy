const fs = require("fs/promises");

///Promisses
/*Leia o arquivo, entao, escreva no novo arquivo, entao escreva escrita completa, pegue erros se houverem e mostre*/ 
fs.readFile("./Unidade 2/10-Programacao-Assincrona/texto.txt")
  .then((data) => fs.writeFile("./Unidade 2/10-Programacao-Assincrona/novotexto.txt", data))
  .then(() => {
    console.log("Escrita completa");
  })
  .catch((err) => {
    console.log("Erro:", err);
  });