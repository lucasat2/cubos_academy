const pessoa = {
    nome: 'Jose',
    idade: 30,
    altura: 1.73,
    temChn: false,
    apelidos: ["Jr", "Juninho"]

    
};

let textoCNH = "";

if (pessoa.temChn) {
    textoCNH = "possui";

} else {
    textoCNH = "não possui";
}


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos:`);

for(let item of pessoa.apelidos ) { 
    console.log(`- ${item}`);

}


