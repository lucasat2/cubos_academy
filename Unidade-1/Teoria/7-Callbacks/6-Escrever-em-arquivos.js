//                        ESCREVER EM ARQUIVOS

/*
  o que faz: cria um arquivo novo
  criado o fs ( file string )
  utilizado o metodo writeFile para escrever o arquivo
  o huhuhuhuh é o texto que sera escrito, pode ser uma variavel ou outro tipo de dado.
  a arrow function é o callback, o aviso que foi escrito com sucesso.
*/

const fs = require('fs');

fs.writeFile('./JavaScript/21-Callbacks/texto2.txt','uhhuhuhhfsdfsdfsuhuuh',()=>{
  console.log('Arquivo foi escrito com sucesso!');
})