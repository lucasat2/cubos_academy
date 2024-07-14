const input = document.querySelector('input')
const frutas = document.querySelectorAll('li');

// Filtar frutas
function buscarFruta(event) {
  if (event.code === 'Enter') {
    frutas.forEach(fruta => {
      fruta.classList.remove('escondido');
      if (input.value && fruta.textContent != input.value) {
        fruta.classList.add('escondido');
      }
    });

    // Limpar os elementos
    input.value = " ";
  }
}