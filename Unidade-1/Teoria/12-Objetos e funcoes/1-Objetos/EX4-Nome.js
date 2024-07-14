//os objetos sao criados com aspas 

const pessoa = {
    
    nome: 'Lucas',
    idade: 34,
    sobrenome: 'Paiva',
    temCNH:true,
    apelidos:["luket","lucao"],


    //Metodo do objeto (funções que ele faz)

    Fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }

};

//Imprimindo valores 

console.log(`Bem vindo, ${pessoa.nome} , Você tem ${pessoa.idade} anos`);


//Utilizando os métodos 
pessoa.Fala();
pessoa.incrementaIdade();

pessoa.Fala();
pessoa.incrementaIdade();

pessoa.Fala();
pessoa.incrementaIdade();

