const fs = require('fs/promises');



async function obterAlunos(req, res) {
  const alunos = JSON.parse(await fs.readFile('./dados/alunos.json'));
  return res.json(alunos);
}

async function obterAlunoPorId(req, res) {
  const alunos = JSON.parse(await fs.readFile('./dados/alunos.json'));

  const alunoEncontrado = alunos.find(a => a.id === Number(req.params.id));

  return res.json(alunos);
}


async function criarAluno(req, res) { 
  const alunos = JSON.parse(await fs.readFile('./dados/alunos.json'));

  alunos.push(req.body);
  await fs.writeFile('./dados/alunos.json', JSON.stringify(alunos, null, 2));

  return res.status(201).send();
}


module.exports = {
  obterAlunos,
  obterAlunoPorId,
  criarAluno
}
