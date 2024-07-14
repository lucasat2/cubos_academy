const ontem1 = new Date("2024-10-04T19:05:39.522Z");
const ontem2 = new Date("2024-10-04T19:05:39.522Z");

console.log(+ontem1 === +ontem2);

// Utilizar sempre timestamps com o sinal de mais, se usarmos a comparação sem eles, dará false pois ao inves de comparar o momento, irá comparar a posição da variável na memória.