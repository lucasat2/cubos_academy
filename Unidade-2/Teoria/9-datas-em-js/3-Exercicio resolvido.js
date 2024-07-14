/*
A final foi vencida pelo Brasil com dois Gols de
Ronaldo Fenômeno:

1. O primeiro aos 22 minutos do segundo tempo
2. O segundo aos 34 minutos do segundo tempo

Sabendo que um tempo tem 45 minutos e que
são 15 minutos de intervalo, crie dois objetos com
datas em que ocorreram cada um dos gols. Use
Timestamps.
*/

const finalDaCopa = new Date(2002, 5, 30, 8);

// Primeiro Gol 
console.log(new Date(+finalDaCopa + (45 + 15 + 22) * 60 * 1000)); //saida 2002-06-30T12:22:00.000Z

// Segundo Gol
console.log(new Date(+finalDaCopa + (45 + 15 + 34) * 60 * 1000)); //saida 2002-06-30T12:34:00.000Z
