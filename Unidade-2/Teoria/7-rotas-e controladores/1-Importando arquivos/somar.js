function calcularSoma(lista) {
let soma = 0;
for (const elemento of lista) {
  soma += elemento;
}
  return soma;
}
// EXPORTANDO A FUNCAO
  module.exports = { calcularSoma, outroValor: "oi" };