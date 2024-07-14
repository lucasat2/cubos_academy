function solucao(palavra) {

  const primeira = palavra[0];
  const restante = palavra.slice(1);

  // Se a primeira letra é minuscula e restante maiusculo, retorna primeira Maiuscula e restante minuscula.

  if (primeira === primeira.toLowerCase() && restante === restante.toUpperCase()) {
    return primeira.toUpperCase() + restante.toLowerCase();
  }
  // Se a palavra é toda em maiuscula, retorna a palavra , lowercase.

  if (palavra === palavra.toUpperCase()) {
    return palavra.toLowerCase();
  }
  // Se a palavra toda é minuscula retorna a palavra

  if (palavra === palavra.toLowerCase()) {
    return palavra;
  }

}

console.log(solucao("caps"));