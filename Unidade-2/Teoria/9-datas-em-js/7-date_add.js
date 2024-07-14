// O método add soma valores a data original.

// Criando uma data e exibindo sem modificacao
const { add } = require('date-fns');
let date = new Date(2024, 2, 10, 30);
console.log(date);

// Alterando o valor da variavel date com a soma do método add.
date = add(date, {
  seconds: 2,
  days: 1,
  years: 10
});

console.log(date);