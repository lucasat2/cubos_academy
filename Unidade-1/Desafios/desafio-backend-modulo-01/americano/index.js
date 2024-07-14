function solucao(numeros) {
  const numJogadores = numeros.length;
  let soma = 0;
  for (let item of numeros) {
    soma += item;
  }
  if (soma % numJogadores == 0) {
    return numJogadores;
  }
  return Number(soma%numJogadores)
}

console.log(solucao([5,3,4,7,1]))