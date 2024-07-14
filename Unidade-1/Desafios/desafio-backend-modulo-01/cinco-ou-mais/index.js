function solucao(precos) {

  const qtd = precos.length;
 
  let soma = 0;
  let menor = Infinity;
  for (item of precos) { 
    soma += item;
     if (item < menor) {
       menor = item;
     }
  }

  return qtd >=5 ? soma - menor : soma;
}
console.log(solucao([100, 100, 100, 50]));