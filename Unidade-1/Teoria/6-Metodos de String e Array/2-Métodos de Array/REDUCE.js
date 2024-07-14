

// O array reduce incrementa valores em um acumulador e soma com o proximo item percorrendo o array todo em loop.
// Obs: o acumulador inicia no indice 0 e o item inicia no indice 1 . 


const array = [0, 1, 2, 3, 4, 5];

const somaTotal = array.reduce((acc, item) => acc + item); 

console.log(somaTotal);











//Sem reduce
// let somaTotal = array[0];
// for (let i = 1; i < array.length; i++) {
//   let item = array[i];
//   somaTotal += item;
  
// }
// console.log(somaTotal);




