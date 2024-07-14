// SPLICE - REMOVE 1 OU MAIS ITENS DE UM INDEX E COLOCA OUTRO NO LUGAR

// //Exemplo 1 - Inicia a modificacao no indice 1 e deleta 2 itens.
// const lista = ["a","b","c","d","e","f"];
// lista.splice(1,2,"cachorro"); // local onde será modificado / delete count / item a ser inserido
// console.log(lista);


// Exemplo 2 - Inicia a modificacao no indice 1 , não deleta ninguem e acrescenta 2 itens .

const lista = ["a","b","c","d","e","f"];
lista.splice(1,0,"cachorro","vaca"); // local onde será modificado / delete count / itens a serem inseridos
console.log(lista);


 //Exemplo 3 - Simulando um push

// const lista = ["a","b","c","d","e","f"];
// lista.splice(lista.length , 0 ,"cachorro","vaca"); // local onde será modificado / delete count / itens a serem inseridos
// console.log(lista);


 //Exemplo 3 - Simulando um unshift

// const lista = ["a","b","c","d","e","f"];
// lista.splice(0 , 0 ,"cachorro","vaca"); // local onde será modificado / delete count / itens a serem inseridos
// console.log(lista);


 //Exemplo 4 - Simulando um pop

// const lista = ["a","b","c","d","e","f"];
// lista.splice(lista.length - 1, 1); // local onde será modificado / delete count /
// console.log(lista)



 //Exemplo 5 - Removendo o primeiro item

// const lista = ["a","b","c","d","e","f"];
// lista.splice(0, 1); // local onde será modificado / delete count /
// console.log(lista)

