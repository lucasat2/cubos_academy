const express = require("express");
const app = express();
let contador = 0;

// CRIACAO DO CONTADOR

app.get("/contador", (req, res) => {
  contador += 1;

  res.send("Você já abriu esta página " + contador + " vez(es)");
});

// ZERAR

app.get("/zerar", (req, res) => {
  contador = 0;
  res.send("Zerei!");
});

// Atribuir um valor ao contador
// localhost:8000/atribuir?valor=1000

app.get("/atribuir", (req, res) => {
  console.log("contador era " + contador);
  const valor = req.query.valor;

  if (valor === undefined) {
    res.status(400);
    res.send("Você precisa informar o valor");
  }
  else {
    contador = Number(valor);
    console.log("contador agora é " + contador);
    res.send("Atribuido com sucesso");
  }
  });

app.listen(8000);
