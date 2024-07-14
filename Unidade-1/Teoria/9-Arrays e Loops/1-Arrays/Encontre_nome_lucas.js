
//Localizar o nome Lucas no array e imprimir o índice que ele está.


const nomes = ['Albano','Lucas', 'Alfredo', 'Ataide', 'Maracutaia', 'batata'];

let encontrado = false;

for (let i = 0; i < nomes.length; i++) {
    const item = nomes[i];
    
    if(item === 'Lucas') { 
        console.log(`Lucas está no índice ${i}`);
        encontrado = true;
        break;
    }

}

if(!encontrado) { 
    console.log('Não encontrado');
}