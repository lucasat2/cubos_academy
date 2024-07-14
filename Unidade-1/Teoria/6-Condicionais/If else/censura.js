

// Para entrar no evento a pessoa precisa ter o ingresso e ter a idade maior ou igual a censura Ou estar com os pais 

const ingresso = true;
const esta_pais = true;
const censura = 16;
const idade = 15;


if (ingresso && idade >= censura || esta_pais) {

    console.log("pode entrar");
} else {
    console.log("barrado");
}