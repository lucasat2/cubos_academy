//                          LENDO ARQUIVOS 2

// FORMA ASSINCRONA - Aqui são feitas outras coisas enquanto se lê o arquivo, o texto ''opa'' foi exibido antes.

const fs = require('fs');

console.log("Vou começar a ler o arquivo");

// logo apos o caminho do arquivo temos a função de callback do arquivo em que o primeiro parametro  err se der erro e parametro data, que é o conteudo do arquivo em si. O metodo toString converte para texto para ficar legivel.

fs.readFile('./JavaScript/21-Callbacks/texto.txt', (err, data) => {
    if (!err) {
        console.log(data.toString());
    }
});

console.log("opa!");