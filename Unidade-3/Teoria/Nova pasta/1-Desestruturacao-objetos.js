
const pessoa = {
  nome: 'Lucas',
  idade: 34
}
/* FORMA ANTIGA
const nome = pessoa.nome
const idade = pessoa.idade
*/

// FORMA DESESTRUTURADA, PEGA O NOME DA PROPRIEDADE
const { nome, idade } = pessoa;
console.log(pessoa)
console.log(idade)

//ALTERAR O VALOR DE UMA PROPRIEDADE

const { nome: nomeDaPessoa, idade: anos } = pessoa;
console.log(nomeDaPessoa);
console.log(anos)






