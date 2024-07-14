function solucao(lista) {
  const maiores = lista.filter(item => item >= 18)
  if (maiores.length == 0) {
    return "CRESCA E APARECA";
  }
  
  return Math.min(parseInt(maiores));
}

console.log(solucao([12, 15, 18, 27]))



