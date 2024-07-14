//                           LENDO ARQUIVOS

// FORMA SINCRONA - UMA COISA DE CADA VEZ - DEMORA MAIS, NÃO É BOM.

const fs = require('fs');
const buffer = fs.readFileSync('./JavaScript/21-Callbacks/texto.txt');
console.log(buffer.toString());