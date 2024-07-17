
const pessoa = {
  nome: 'Lucas',
  idade: 34
}

//As propriedades o objeto ficam entre parenteses dentro do local de parametros
function logarPessoa({ nome, idade }) {
  console.log(nome);
  console.log(idade);
}

//Rodando a funcao
logarPessoa(pessoa);

