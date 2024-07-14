function solucao(idade) {
  if (idade >= 18) {
    return "PODE ENTRAR";
  } else {
    return "ACESSO NEGADO";
  }
}

console.log(solucao(18));