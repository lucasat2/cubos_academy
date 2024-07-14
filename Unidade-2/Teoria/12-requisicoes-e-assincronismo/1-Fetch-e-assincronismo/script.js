const cepInput = document.querySelector('#cep');
const ufInput = document.querySelector('#uf');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

// REQUISICAO 
cepInput.addEventListener('change', function () {

  // VALIDACAO DE ERROS 
  if (cepInput.value.length != 8) { 
    console.log('Erro')
    return;
  }
  const promiseResposta = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);

  //RESPOSTA DA PROMESSA , ESTÁ NO BODY NO INSPECIONAR ELEMENTO NO NAVEGADOR
  promiseResposta.then(function (resposta) {

    if (!resposta.ok) { 
      console.log('ERRO')
      return;
      // Se a reposta nao for OK
    }
    const promiseBody = resposta.json();

    // PREENCHER OS OUTROS DADOS APOS O CEP SER DIGITADO 
    promiseBody.then(function (body) {

      if (body.erro) { 
        console.log('Erro')
        return;
        // NA API VIA CEP ESPECIFICAMENTE, TEMOS ESTE ELEMENTO ERRO NO BODY QUE AVISA SE ALGO DEU ERRADO, POREM O CORRETO É VERIFICAR NA RESPOSTA.
      }
      ufInput.value = body.uf;
      cidadeInput.value = body.localidade;
      ruaInput.value = body.logradouro;
    })
  });
});