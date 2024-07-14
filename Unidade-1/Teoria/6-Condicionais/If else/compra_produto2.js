
// Se a parcela for a partir de 7 e 12x , será aplicado tx de juros de 1% ao mes.

let produto = 10000;
let desconto = 0;
let parcela = 7;



if (parcela == 1) {

    desconto = (produto * 10 / 100);
    console.log(`Como o pgto foi a vista, terá direito a 10% de desconto, totalizando R$ ${(produto - desconto)} reais.`);


} else if (parcela >= 7 && parcela <= 12) {
    const juros = produto * Math.pow((1+0.01),parcela);
    let precoParcelado = (juros / parcela /100).toFixed(2);
    console.log(`Como o pagamento é acima de 6 parcelas, voce pagará um acréscimo de ${(juros / 100).toFixed(2) } reais em ${parcela} vezes de ${precoParcelado} totalizando ${(produto + juros / 100).toFixed(2) } reais`);

} else {
    let  precoParcelado = (produto / parcela).toFixed(2);
    console.log(`Sua parcela escolhida foi de: ${parcela} vezes, ficando no total de ${precoParcelado}`);
}

