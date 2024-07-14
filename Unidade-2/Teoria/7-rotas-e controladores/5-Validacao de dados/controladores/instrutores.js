const listaDeInstrutores = require("../dados/instrutores");

const areasDeAtuacaoValidas = [
  "Lógica",
  "Back-end",
  "Full-Stack",
  "Front-End",
  "Flutter",
  "Soft Skills",
  "UI/UX",
] 

                       // CONSULTAR UM INSTRUTOR
function consultarUmInstrutor(req, res) {
  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id ===
    Number(req.params.idConsultado));
  
  // CASO O ID NAO EXISTA
  if (!instrutor) { 
    res.status(404);
    res.json({ erro: "instrutor " + req.params.idConsultado + "não existe." });
    return;
  }
  res.json(instrutor);
}
let proximoId = 5;

function validarInstrutor(instrutor) {
  if (!instrutor.idade) {
    return "O campo 'idade' é obrigatório";
  }

  if (!instrutor.areaDeAtuacao) {
    return "O campo 'Area de Atuação' é obrigatório";
  }

  // Tratamento de erros de TIPO.
  if (typeof instrutor.nome != "string") {
    return "O campo 'nome'deve ser preenchido com um texto";
  }

  if (typeof instrutor.idade != "number") {
    return "O campo 'idade'deve ser preenchido com um numero";
  }

  if (typeof instrutor.areaDeAtuacao != "string") {

    return "O campo 'Area de atuacao'deve ser preenchido com um texto";
  }

  // VERIFICAR SE O INSTRUTOR É MAIOR DE IDADE
  if (instrutor.idade < 18) {
    return "O instrutor deve ser maior de idade";

  }

  // VERIFICAR SE ALGUMA DAS AREAS DE ATUACAO CONDIZ COM A LISTA
  if (!areasDeAtuacaoValidas.includes(instrutor.body.areaDeAtuacao)) {

    return "A área de atuacao informada é invalida";

  }

  //Tratamento de erro - Verificar se algo foi preenchido

  if (!instrutor.body.nome) {
    return "O campo 'nome' é obrigatório";

  }
}
// =========================================================================

//                 CRIAR INSTRUTOR
function criarInstrutor(req,res) {
  const erro = validarInstrutor(req.body);

  if (erro) { 
    res.status(400);
    res.json({ erro });
    return;
  }

  const novoInstrutor = {
    id: proximoId,
    nome: instrutor.body.nome,
    idade: instrutor.body.idade,
    areaDeAtuacao: instrutor.body.areaDeAtuacao,
  };
  listaDeInstrutores.push(novoInstrutor);
  proximoId += 1;
  res.json(novoInstrutor);
}

// ==============================================================================
// PATCH(EDITAR)

function editarInstrutor(req, res) {
  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado));

  if (!instrutor) {
    res.status(404);
    res.json({ erro: "instrutor " + req.params.idConsultado + "não existe." });
    return;
  }
  const erro = validarInstrutor({
    nome: req.body.nome ?? instrutor.nome,
    idade: req.body.idade ?? instrutor.idade,
    areaDeAtuacao: req.body.areaDeAtuacao ?? instrutor.areaDeAtuacao,
  });
 
  if (req.body.nome != undefined) {
    instrutor.nome = req.body.nome;
  }
  if (req.body.idade != undefined) { 
    instrutor.idade = req.body.idade;
  }
  if (req.body.areaDeAtuacao != undefined) {
    instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
  }
  res.json(instrutor);
};
// = =============================================================================
//                          SUBSTITUIR 

function substituirInstrutor(req, res) {
  const erro = validarInstrutor(req.body);

  if (erro) {
    res.status(400);
    res.json({ erro });
    return;
  }

  if (req.body.id != Number(req.params.idConsultado)) {
    res.status(400);
    res.json({ erro: "O campo 'id' deve ser igual na rota e no corpo da requisição ", });
    return;
  }

  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado));

  if (instrutor) {
    instrutor.nome = req.body.nome;
    instrutor.idade = req.body, idade;
    instrutor.areaDeAtuacao = req.body, areaDeAtuacao;
  } else {
    const novoInstrutor = req.body;
    listaDeInstrutores.push(novoInstrutor);
    res.json(novoInstrutor);
  }
}
//===========================================================================
                          // DELETAR
                          
function excluirInstrutor(req, res) {
  const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado));

  if (!instrutor) {
    res.status(404);
    res.json({ erro: "instrutor " + req.params.idConsultado + "não existe." });
    return;
  }
  const indice = listaDeInstrutores.indexOf(instrutor);
  listaDeInstrutores.splice(indice, 1);
  res.json(instrutor);
}

// EXPORTAÇÃO DAS FUNÇÕES
module.exports = { consultarTodosOsInstrutores, consultarUmInstrutor, criarInstrutor, editarInstrutor,substituirInstrutor,excluirInstrutor};