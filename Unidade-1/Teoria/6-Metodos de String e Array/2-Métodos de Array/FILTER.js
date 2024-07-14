//                        FILTER
/*
  o que faz: Filtra o array com um callback e retorna um novo array, não modifica o original
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// apenas os maiores que 5
// forma super enxuta de dar um return dos itens maiores que 5
// 2 filters em um array filter.

const filtrado = array.filter(item => item > 5).filter(item => item % 2 === 0 );

console.log(filtrado);
