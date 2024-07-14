function apresentar(pessoa) {
    if (pessoa.idade < 25) {

        console.log(`Olá! meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);

    } else if (pessoa.idade < 60) {
        console.log(`Olá! meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);

    } else {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    }
}


let jose = {
    nome: "José",
    idade: 72,
    profissao: "professor",
    altura: 1.73

};

apresentar(jose);



let joao = {
    nome: "João",
    idade: 24,
    profissao: "atoa",
    altura: 1.78

};

apresentar(joao);


let pedro = {
    nome: "Pedro",
    idade: 33,
    profissao: "uber",
    altura: 1.80

};

apresentar(pedro);