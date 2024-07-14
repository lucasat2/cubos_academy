
/* Ordenar os objetos primeiro por ordem crescente de idade e em seguida por
ordem alfabetica */

const pessoas = [
  {
    nome: "Jr",
    idade: 30
  },

  {
    nome: "adriana",
    idade: 18
  },

  {
    nome: "André",
    idade: 30
  },

  {
    nome: "Carvalho",
    idade: 16
  },

  {
    nome: "Claudio",
    idade: 30
  },
]

// Regra para ordem crescente 
pessoas.sort((a, b) => {
  if (a.idade < b.idade) {
    return - 1;
  } else if (b.idade > a.idade) {
    return 1;
  } else {
    return a.nome.localeCompare(b.nome); // Regra para ordem alfabetica
  }
});

console.log(pessoas);

