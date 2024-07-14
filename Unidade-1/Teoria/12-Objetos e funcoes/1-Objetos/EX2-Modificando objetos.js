const pessoa = {
    nome: 'Jose',
    idade: 30,
    altura: 1.73,
    temChn: false,
    apelidos: ["Jr", "Juninho"]

    
};

//Modificando um apelido

pessoa.apelidos[0]= "Alfredo";
console.log(pessoa.apelidos);

//Modificando um nome 

pessoa.nome = 'Afranio';
console.log(pessoa.nome);

//Criando uma nova chave valor e imprimindo o objeto inteiro para mostrar que foi criado

pessoa.peso = 70;
console.log(pessoa);