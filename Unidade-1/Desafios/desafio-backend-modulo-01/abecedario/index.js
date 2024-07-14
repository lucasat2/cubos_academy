function solucao(letra, palavras) {
  let perderam = 0;
  for (let item of palavras) {
    if (item[0] != letra) { 
      perderam++;
    }
  }
  return perderam;
}

console.log(solucao("m", [
  "mamao",
  "maca",
  "melao",
  "melancia",
  "laranja"
]))