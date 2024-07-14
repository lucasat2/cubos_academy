//Obs: modifica o array original
//Obs: precisa ser passada uma função, senão a ordenação usa o UNICODE.

/*REGRA
 já existe um algoritmo dentro do método sort que faz os calculos com a seguinte 
 regra:
  se o resultado da comparação for negativo a vem primeiro (menor)
  se o resultado da comparação for positivo b vem primeiro (maior) */
//___________________________________________________________________________

//ORDENAR DE FORMA CRESCENTE

// const array = [1, 10, 2, 23, 5];

// array.sort((a, b) => a - b); // ordem crescente

// console.log(array);

//___________________________________________________________________________

// //ORDENAR DE FORMA DECRESCENTE

// const decrescente = [1, 10, 2, 23, 5];
// decrescente.sort((a, b) => b - a); // ordem decrescente

// console.log(decrescente);

//___________________________________________________________________________

// ORDENAR EM ORDEM ALFABETICA

//O método localeCompare é de string, portanto podemos usar a.localeCompare

const nomes = ['ana', 'junior', 'pedro', 'Claudia', 'Adriana'];

nomes.sort((a, b) => a.localeCompare(b));
console.log(nomes);

//___________________________________________________________________________