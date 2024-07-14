//                 METODO SOME - Se houver um elemento valido , retorna true.

//Ex: Tem Numeros maiores que 5 ?

const numeros = [1, 2, 3, 4, 5, 6];

maiorque5 = numeros.some(x => x > 5);
console.log(maiorque5)


// //Ex2 Tem numeros pares no array?

// const numeros = [1, 5, 7, 17,11,14];
// const pares = numeros.some(x => x % 2 === 0);
// console.log(pares);

// //Ex3 Verifica se tem quadrado perfeito

// const numeros = [2, 3, 5];

// const resultado = numeros.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0 );

// console.log(resultado); ///////
