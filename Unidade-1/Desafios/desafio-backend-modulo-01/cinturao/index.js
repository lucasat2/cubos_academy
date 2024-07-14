function solucao(cartel) {

  if (cartel.length < 10) {
    return "O lutador não possui o número mínimo de lutas para disputar o cinturão.";

  }

  let vitorias = 0;
  let derrotas = 0;

  for (i = 0; i < cartel.length; i++) {
    if (cartel[i] === 'V') {
      vitorias++;
    } else if (cartel[i] === 'D') {
      derrotas++;
    }
  }

  const qtdeLutas = vitorias + derrotas;
  const aproveitamento = ((vitorias - derrotas) / qtdeLutas) * 100;

  if (aproveitamento >= 50) {

    console.log(`O lutador possui um aproveitamento de ${aproveitamento} (maior que o mínimo exigido) e possui o númedo mínimo de 10 lutas`);
    return "MERECE DISPUTAR";

  } else {
    return "NÃO MERECE DISPUTAR";
  }

}


console.log(solucao(['E', 'V', 'E', 'D', 'E', 'V', 'E', 'V', 'V', 'E']));


