// Os arquivos são executados simultaneamente, a ordem que podem ser exibidos pode variar.

const fs = require("fs");

console.log('antes de ler');
fs.readFile("./Unidade 2/10-Programacao-Assincrona/a.txt", (err, data) => {
  if (err) {
    console.log('deu erro', err);
  } else {
    console.log(data.toString());
  }
});
fs.readFile("./Unidade 2/10-Programacao-Assincrona/b.txt", (err, data) => {
  if (err) {
    console.log('deu erro', err);
  } else {
    console.log(data.toString());
  }
});
fs.readFile("./Unidade 2/10-Programacao-Assincrona/c.txt", (err, data) => {
  if (err) {
    console.log('deu erro', err);
  } else {
    console.log(data.toString());
  }
});
console.log("depois de ler");
