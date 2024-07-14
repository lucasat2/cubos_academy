
// Descobrir a quantidade de letras a na string

const palavra = "wqwqwqaaw";
let contador = 0;

for (let letra of palavra) {
    if (letra === "a") {
        contador++;

    }
}

if (contador === 0) {
    console.log("Não existem letras a na palavra");
}

else if (contador === 1) {

    console.log(`Existe ${contador} letra a na palavra`);

} else {

    console.log(`A quantidade de letras a na palavra é de: ${contador}`);

}



