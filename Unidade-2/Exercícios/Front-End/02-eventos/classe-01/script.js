const input = document.querySelector('input');
const frutas = document.querySelectorAll('li'); ('input');
input.addEventListener('keydown', function (event) {
  if (event.key != 'Enter') {
    return;
  }
  // console.log(event);


  frutas.forEach(function (fruta) {
    // console.log(fruta.textContent);
    // console.log(input.value);

    /* Transformar o que é digitado em maiusculo
       Transformar as frutas em maiusculo */

    const filtro = input.value.toUpperCase();
    const nomeFruta = fruta.textContent.toUpperCase();

    if (fruta.textContent.includes(input.value)) {
      fruta.style.display = 'list-item';
    } else {
      fruta.style.display = 'none';
    }
  });
  // Limpar o valor do input assim que filtrar e teclar enter
  input.value = '';

})