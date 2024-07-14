function solucao(senhaCorreta, palavraDigitada) {

  let indexSenha = 0;

  for (let i = 0; i < palavraDigitada.length; i++) {
    if (palavraDigitada[i] === senhaCorreta[indexSenha]) {
      indexSenha++;
    }

    if (indexSenha === senhaCorreta.length) {
      return "SIM";
    }
  }

  return "NAO";
}

console.log(solucao('cubos', 'uewvelrabsocaeln'));
  





