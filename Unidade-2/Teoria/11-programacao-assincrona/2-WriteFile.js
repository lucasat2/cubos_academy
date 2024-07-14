const fs = require('fs');

fs.readFile("./Unidade 2/10-Programacao-Assincrona/texto.txt", (err, data) => {
  if (err) {
    console.log("erro:", err);
  } else {
    console.log("Leu com sucesso");
    fs.writeFile("./Unidade 2/10-Programacao-Assincrona/novotexto1.txt", data, (err) => {
      if (err) {
        console.log("Erro na escrita", err);
      } else {
        console.log("Escreveu com sucesso 1");
      }
    });
    fs.writeFile("./Unidade 2/10-Programacao-Assincrona/novotexto2.txt", data, (err) => {
      if (err) {
        console.log("Erro na escrita", err);
      } else {
        console.log("Escreveu com sucesso 2");
      }
    });
  }
});