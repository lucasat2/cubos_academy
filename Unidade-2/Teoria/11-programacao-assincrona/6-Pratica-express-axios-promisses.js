// npm i express nodemon axios

// Uma api que pega a descricao do pacote no site do npm

const express = require("express");
const axios = require("axios");
const app = express();

app.get("/descrever/:pacote", async (req, res) => {
  const pacote = req.params.pacote;
  const response = await axios.get(`https://registry.npm.js.com/${pacote}`);
  res.json({
    descricao: responde.data.description,
  });
});
app.listen(8000);