
//Aqui enxugamos o codigo ainda mais colocando o if dentro de uma funcao para obter a faixa etaria e depois deixando uma funcao somente para apresentar 

function obterFaixaEtaria(idade) {

    if (idade < 25) {
        return "jovem";
    } else if (idade < 65) {
        return "adulto";
    } else {
        return "idoso";
    }
}


function apresentar(pessoa) {

    const faixaEtaria = obterFaixaEtaria(pessoa.idade);

    console.log(`Olá! meu nome é ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
   
}


let jose = {
    nome: "José",
    idade: 66,
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