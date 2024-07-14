const botao = document.querySelector('.botao-abrir-menu');
const menu = document.querySelector('.menu');
const imagem = document.querySelector('botao-menu img');

botao.addEventListener('click', function () {  
  menu.classList.toggle('hidden'); // O toggle inverte a propriedade, de hidden para open

  imagem.src = menu.classList.contains("hidden") ?
    'assets/closed-menu.svg' : 'assets/open-menu.svg';
});

