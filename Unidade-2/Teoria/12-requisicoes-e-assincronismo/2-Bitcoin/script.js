const criptoInput = document.querySelector('#cripto');
const valor = document.querySelector('.valor');

criptoInput.addEventListener('change', function () {
  if (!criptoInput.value) { 
    return;
    // Checagem de erro
 }
  const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/ticker/`
    // Requisicao para coletar o que o usuario digitou no campo
  );

  promiseResposta.then(function (resposta) {
    const promiseBody = resposta.json();

    // Maior valor da bitcoin nas ultimas 24 horas com a propriedade do body HIGH
    promissebody.then(function (body) {
      valor.textContent = Number(body.ticker.high).toFixed(2);


    })
  })
})