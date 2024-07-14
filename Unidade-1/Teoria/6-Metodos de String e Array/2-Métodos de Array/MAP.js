//                        MAP
/*
  o que faz: modifica todos os itens do array
*/


//elevar todos os itens do array ao quadrado

const array = [1, 2, 3, 4, 5,];

const modificado = array.map(item => item ** 2 ); // para cada item, eleve cada item ao quadrado.

console.log(modificado);


// EXEMPLO 2 - Modificar os valores dos objetos abaixo adicionando novos itens

// const pessoas = [
//   {
//     nome: "José",
//     idade: 30,
//     altura: 173
//   },

//   {
//     nome: "Pedro",
//     idade: 12,
//     altura: 144
//   },

//   {
//     nome: "Maria",
//     idade: 38,
//     altura: 156
//   },
// ];

// const modificacoes = pessoas.map(x => {
//   return {
//     nome: x.nome,
//     idade: `${x.idade} anos`,
//     altura: `${x.altura/100}m.`,
//     maioridade: (x.idade >= 18 ? "È maior de idade" : "É menor de idade") // ternário
//   }
// });

// console.log(modificacoes);
