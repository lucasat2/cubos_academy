
// Aqui vamos conhecer os métodos, funcoes que ficam dentro de objetos. Com elas usamos a palavra ''this'' para dizer que é de tal objeto que estamos falando


//OBJETO 

let jose = {
    nome: "José",
    idade: 22,
    profissao: "professor",
    altura: 1.73,
    obterFaixaEtaria: function () {

        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade < 65) {
            return "adulto";
        } else {
            return "idoso";
        }
    },

    apresentar: function () {

        const faixaEtaria = this.obterFaixaEtaria();

        console.log(`Olá! meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}`);
    },


};

jose.obterFaixaEtaria();
jose.apresentar();





// let joao = {
//     nome: "João",
//     idade: 24,
//     profissao: "atoa",
//     altura: 1.78

// };

// apresentar(joao);


// let pedro = {
//     nome: "Pedro",
//     idade: 33,
//     profissao: "uber",
//     altura: 1.80

// };

// apresentar(pedro);