const express = require("express");

const app = express();

app.get("/soma", (req, res) => {
  console.log(req.query);
  const primeiro = Number(req.query.primeirovalor);
  const segundo = Number(req.query.segundovalor);
  res.send(String(primeiro + segundo));  // A reposta precisa ser em string
});

app.listen(8000);


// Como o valor deve ser passado na url no navegador

// localhost:8000/soma?primeirovalor=41654646&segundovalor=85444684