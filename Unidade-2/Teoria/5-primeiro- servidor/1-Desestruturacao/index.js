//Desestruturacao - destructuring

const pessoa = {
  nome: 'Jose',
  idade: 30,
  altura: 1.73,
  temChn: false,
  apelidos: ["Jr", "Juninho"]
};

// FORMA TRADICIONAL QUANDO QUERO ACESSAR OS ATRIBUTOS DO OBJETO POR VARIAVEL
// const nome = pessoa.nome;
// const idade = pessoa.idade;


// DESESTRUTURADO - coloco os atributos dentro de colchetes e em seguida o objeto
// a propriedade outras pega todos os outros atributos dentro do objeto que não foram mencionados.

const {nome,idade, ...outras } = pessoa;
console.log(nome);
console.log(idade);
console.log(outras);