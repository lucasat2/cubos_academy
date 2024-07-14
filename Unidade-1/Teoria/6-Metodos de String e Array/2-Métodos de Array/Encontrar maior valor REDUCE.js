

//IDENTIFICAR O MAIOR VALOR EM UM ARRAY.

const array = [1, 2, 3, 10, 7, 5];

// Item é maior que acc? retorne item. senao, retorne acc 
const maior = array.reduce((acc,item) => item > acc ? item : acc); 

console.log(maior);


// // UTILIZANDO FOR 

// let maior = array[0]; 

// for (let i = 1; i < array.length; i++) { //percorra todo o array
//   const item = array[i];  // item recebe a posicao atual do array
  
//   if (item > maior) {  // se item atual for maior que o maior,
//     maior = item;  // maior recebera o valor de item
//   }
// }

// console.log(maior);
