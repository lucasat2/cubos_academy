let produto = 500;
const formaPagamento = "vista";
let desconto = 0;
let parcela = 6;
let precoParcelado = (produto /parcela).toFixed(2);


if (formaPagamento == "parcelado") {

    desconto = (produto * 10 / 100);
    console.log(produto - desconto);

} else {
    console.log(`Sua parcela escolhida foi de: ${parcela} vezes, ficando no total de ${precoParcelado}`);
}

