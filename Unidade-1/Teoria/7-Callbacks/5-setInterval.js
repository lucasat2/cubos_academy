// Define o intervalo em que um codigo fica executando

setInterval(() => {
    console.log('Passou 1 segundo');
}, 1000);
console.log("To processando coisas...hdghfhfgh");


//                        SETINTERVAL COM CLEAR INTERVAL PARA ENCERRAR O CODIGO
/*
  O que faz: Contagem regressiva para a explosão de uma bomba.
  inicia a contagem em 10
  cria um setinterval de 1 segundo entre as execucoes
  cria a funcao para executar as mensagens e o decremento na contagem
  cria um if ternario para estabelecer se escreverá segundo ou segundos
  cria um clear interval para parar o programa

*/

// let contagem = 10;

// function imprimirContagem() {

//     if (contagem === 0) {
//         console.log("kABUUUUM!");
//         clearInterval(intervalId);
//     } else {
//         console.log(`A bomba explodira em ${contagem} segundo${contagem === 1 ? "" : "s"}`); //ternario para deixar segundos no plural ou singular
//         contagem--;
//     }
// }

// imprimirContagem();

// const intervalId = setInterval(imprimirContagem, 1000);
