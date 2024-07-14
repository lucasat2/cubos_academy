const genero = document.querySelector('select');
const musica = document.querySelector('input');

// Toda vez que a pessoa mudar o select, rodar o evento abaixo
genero.addEventListener('change', function (event) {
  /* Descobrir o valor que foi pego no evento pra passar pro input 
  console.log(genero.value)*/
  musica.value = genero.value
  
}); 