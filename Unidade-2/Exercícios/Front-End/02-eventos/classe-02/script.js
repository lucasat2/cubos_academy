const inputs = document.querySelectorAll('input');

inputs.forEach(function (input) {
  input.addEventListener('change', function () {
    if (input.value === input.dataset.resposta) {
      input.classList.add('acerto');
    } else {
      input.classList.remove('acerto');
    }
  })
})












