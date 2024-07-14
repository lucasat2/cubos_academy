
//PAD START
//Adiciona coisas no inicio da string

 const ultimos4dig = '2345';
 const numCartao = ultimos4dig.padStart(19,'***** ');
console.log(numCartao);
 



// //Exercicio de PadStart - crie uma função que deixe dia mes e ano com 8 digitos no formato dd/mm/aaaa, o ano pode deixar como está com 4 digitos.
// function imprimirData(dia,mes,ano) {

//     const diaString = `${dia}`.padStart(2,"0"); // converte o dia para string usando uma string template / a string terá 2 digitos e preencher com zero.
//     const mesString = `${mes}`.padStart(2,"0"); // converte o mes para string usando uma string template / a string terá 2 digitos e preencher com zero antes.
//     console.log(`${diaString}/${mesString}/${ano}`)

// }

// imprimirData(1,3,2024);