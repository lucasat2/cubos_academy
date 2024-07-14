# Sinuca brasileira

Sinuca é um esporte de mesa, taco e bolas praticado no Brasil. Popularmente, joga-se com bolas menores e coloridas numeradas de 1 a 15 e o chamado bolão, uma bola branca e maior que as demais.

O jogador deve acertar o bolão com o taco para que ele colida com as demais bolas de forma que elas caiam em um dos 6 buracos localizados nos cantos da mesa, denominados caçapas. Quando isso acontece, diz-se que a bola foi encaçapada, ou seja, caiu na caçapa.

Em uma, das várias maneiras de se jogar, soma-se os números correspondentes às bolas encaçapadas por cada um dos dois competidores. Nessa modalidade, ganha quem tiver a maior soma ao final do jogo.

Sabendo que a soma total das bolinhas na mesa é 120, você deve criar um programa que receba um array de números em que cada item representa o número de uma bola encaçapada pelo jogador A e retorne se o jogador A ganhou, se o jogador B ganhou ou se houve empate.

## Input Format

A entrada será sempre um array de números, denominado jogadorA, em que cada item é o número de uma bolinha encaçapada pelo jogador A.

## Output Format

Você deverá imprimir na tela:

- `JOGADOR A GANHOU` se o jogador A tiver ganhado;
- `JOGADOR B GANHOU`se o jogador B tiver ganhado;
- `EMPATE` se tiver ocorrido empate.

---
### Sample Input 0
> [1, 4, 5, 8, 15, 14]

### Sample Output 0
> JOGADOR B GANHOU

Somando-se o número das bolinhas encaçapadas pelo jogador A temos um total de 47. Isso significa que somando-se as bolinhas encaçapadas pelo jogador B teremos um total de 73.
