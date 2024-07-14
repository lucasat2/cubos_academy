// Contagem de tempo que passou desde um acontecimento até outro.  
const finalDaCopa = new Date(2002, 5, 30, 8);

// Adicionando 1 hora após o acontecimento
const finalMaisUmaHora = +finalDaCopa + 1000 * 60 * 60 // milisegundos,minutos,hora.

// Adicionando mais uma hora a uma data
const maisUmHoraDate = new Date(finalMaisUmaHora);
console.log(maisUmHoraDate);