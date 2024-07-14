//                        For Each
/*
  o que faz: percorre todos os itens do array
  Quando usar: varrer o array sem precisar interromper
  Quando não usar : quando precisa utilizar o break ou o continue.
*/

const array = [1, 2, 3, 4, 5];

array.forEach((item, indice, array) => {

console.log(`O item ${item} está no indice ${indice} do array ${array}`);

});