const input = document.querySelector('input');
const tarefas = document.querySelector('ul');

input.addEventListener('keydown', function (event) {
  if (event.key != 'Enter' || input.value === '') return;

  // Adicionar tarefas ao digitar no input
  const tarefa = document.createElement('li');
  tarefa.textContent = input.value;
  tarefas.append(tarefa);

  // Remover tarefa ao clicar em uma

  tarefas.addEventListener('click', function () {
    tarefa.remove();
  })
  
  input.value = ''
})