 //METODO EVERY - Testa se varios itens de um array passam por uma condição

// Exemplo 1 - Teste para verificar se os numeros do array sao menores que 10, somente dará true se todos atenderem a condição passada no callback

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.every(x => x < 10));


//Exemplo 2 - Teste para verificar se os preços do array sao positivos e inteiros

const precos = [100, 131, 2544];

const ehValido = precos.every(x => {

  return x >= 0 && x % 1 === 0;

});

console.log(ehValido);