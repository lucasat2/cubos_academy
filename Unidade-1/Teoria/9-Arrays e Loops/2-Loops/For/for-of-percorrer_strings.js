const palavra = "Alaemaaanhjidsfjisdfjhahhadjashdhahaha";

let encontrado = false;

for(let letra of palavra ) { 
    if(letra === "a") {
        encontrado = true; 
        console.log("Tem a letra 'a'");
        break;  // se ele achar um unico H em um texto com muitos H, ele já para o loop.
    }
    
}

if(!encontrado){
    console.log("nao tem a letra a");
}