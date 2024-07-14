// const express = require('express');

const express = require('express');
const app = express();

// Req vem de requisição e res de resultado


app.get("/", (req, res) => {   // APP, dê um get em ''barra''
  console.log("Recebi um GET /");  // CONSOLE, mostre uma mensagem que recebeu o get
  res.send('Olá');  // RES, envie um olá
});
app.listen(8000);// APP, escute a porta 8000