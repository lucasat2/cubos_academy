//FUNCAO PARA CRIAR OBJETOS 
// {} as chaves sao usadas para criar objetos

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Lucas', 'Paiva', 34)
const pessoa2 = criaPessoa('Francisco', 'Assis', 24)
const pessoa3 = criaPessoa('Igarape', 'santos', 48)

console.log(pessoa1.nome,pessoa1.sobrenome);
console.log(pessoa2.nome,pessoa2.sobrenome);
console.log(pessoa3.nome,pessoa3.sobrenome);