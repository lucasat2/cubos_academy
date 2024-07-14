const express = require('express');
const app = express();

app.get("livros/:numero", (req, res) => {
  console.log(req.params);

  if (req.params.numero === '1') {
    res.send("Livro 1");
  } else if (req.params.numero === '2') { 
    res.send("Livro 2");
  } else if (req.params.numero === '3') { 
    res.send("Livro 3");
  } else { 
    res.status(404);
    res.send("Livro" + req.params.numero + 'Não existe');
  }
})




