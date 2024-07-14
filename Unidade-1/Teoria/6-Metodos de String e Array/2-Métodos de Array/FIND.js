//                        FIND
/*
 O que faz: Apenas o primeiro elemento com a condição buscada é retornado.
*/


//Objetivo Pegar o primeiro item cujo texto tem mais de 10 elementos.

const array = ['fsfdsdfsdf', 'dsfdsfsdfsdfsdfsdfsd', 'sfsdfsdf', 'isij'];

const localizado = array.find(item => item.length > 10);


if (localizado) {

  console.log(`A palavra com mais de 10 caracteres é: ${localizado}`)
} else {
  console.log(`Nenhum item com mais de 10 caracteres`);
}