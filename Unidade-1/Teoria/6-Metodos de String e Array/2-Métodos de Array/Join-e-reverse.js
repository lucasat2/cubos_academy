//EXERCICIO DO REVERSE UTILIZANDO O JOIN PARA FICAR MAIS SIMPLIFICADO

//Reverse em uma função para inverter as letras de uma string

function inverter(string) {
    const letras = string.split(""); //converte o parametro string para um array de letras utilizando o split
    letras.reverse();
  
//Concatena utilizando o join
console.log(letras.join("")); // aspas vazias para não separar os itens por virgula

}

inverter("Lucas Ataide");