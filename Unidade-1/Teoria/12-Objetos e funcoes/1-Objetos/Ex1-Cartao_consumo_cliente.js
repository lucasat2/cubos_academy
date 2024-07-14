

const comanda = {

    nomeCliente: "Afranio",
    idade: 29,

    //Criando um array de objetos

    produtos: [
        {
            nome: 'Batata frita',
            preco: 30,
            quantidade: 1,
           
         
        },

        {
            nome: 'Alcachofra',
            preco: 80,
            quantidade: 5,
            

        },

        {
            nome: 'Queijo',
            preco: 44,
            quantidade: 2,
    
        }
    ]
};


let total = 0;
for (let item of comanda.produtos) {
    total += (item.quantidade * item.preco);
}


// console.log(cartaoConsumo);

//imprimir nome cliente
console.log(comanda.nomeCliente);

//imprimir idade cliente
console.log(comanda.idade);

// modificar idade cliente
comanda.idade = 34;
console.log(comanda.idade);

//imprimir o nome do primeiro produto consumido
console.log(comanda.produtos[0].nome);


//imprimir o preço unitario do ultimo produto consumido por ele 
console.log(comanda.produtos[comanda.produtos.length -1].preco);


console.log(`Olá Sr(a) ${comanda.nomeCliente}, o valor a pagar é de R$ ${total}`)
