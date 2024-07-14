// SPLIT
//Quebra o texto em indices de array

const textao = "Eu gosto. Eu vou pra praia. Pode parar tudo eu vou pra praia";
const frase = textao.split(".");


// //Limpando os espaços com trim

let novoArray = [];
for (let trecho of frase) {
    novoArray.push(trecho.trim()); //adicionando os trechos com espaço limpo no array vazio
}

console.log(frase);
console.log(novoArray);