
// Colar isso no inspecionar do navegador.

// O dom é rodado dentro do navegador, por isso, se tentarmos rodar o codigo abaixo no
// console do VS code, vai dar erro por que o DOM (document) é uma runtime do navegador

const html = document.children[0];
const body = html.children[1];
const h1 = body.children[0];
console.log(h1);