# Fase de mata a mata

Antigamente, durante a fase de <i>mata a mata</i> da Champions League, maior competição de futebol do mundo, os jogos eram realizados no formato ida e volta e com a regra do gol fora de casa. Nesse formato, os times jogavam dois jogos entre si, sendo um dos jogos dentro do seu estádio e o outro no estádio do adversário. Para saber qual time tinha sido eliminado, olhava-se o placar acumulado, ou seja, a soma dos resultados. Existiam três resultados possíveis:

- Time A eliminado: caso o Time B tivesse ganhado no placar acumulado ou em caso de empate em que o Time B tivesse feito mais gols fora de casa (no estádio do adversário);
- Time B eliminado: caso o Time A tivesse ganhado no placar acumulado ou em caso de empate em que o Time A tivesse feito mais gols fora de casa (no estádio do adversário).
- Empate: caso houvesse empate no placar acumulado e a quantidade de gols fora de casa de ambos os times fosse igual.
Em caso de empate, tinha-se a prorrogação.

## Input Format

A entrada do problema será sempre composta por quatro variaveis:

- `golsTimeADentro` do tipo number. Variável responsável por armazenar quantos gols o time A fez no jogo dentro de casa;
- `golsTimeAFora` do tipo number. Variável responsável por armazenar quantos gols o time A fez no jogo fora de casa;
- `golsTimeBDentro` do tipo number. Variável responsável por armazenar quantos gols o time B fez no jogo dentro de casa;
- `golsTimeBFora` do tipo number. Variável responsável por armazenar quantos gols o time B fez no jogo fora de casa.

## Output Format

Você deve imprimir na tela:

- `TIME A ELIMINADO` em caso de eliminação do time A;
- `TIME B ELIMINADO` em caso de eliminação do time B;
- `PRORROGACAO` em caso de empate.

---
### Sample Input 0
> 5 3 4 2

### Sample Output 0
> TIME B ELIMINADO

O Time A fez 5 gols no jogo dentro de casa e 3 gols no jogo fora de casa. Portanto, o placar agregado do Time A foi de 8 gols. Por outro lado, o Time B fez 4 gols no jogo dentro de casa e 2 gols no jogo fora de casa. Portanto, o placar agregado do Time B foi de 6. Como o Time A ganhou no placar agregado, o Time B foi eliminado.
---
### Sample Input 1
> 4 2 3 3

### Sample Output 1
> TIME A ELIMINADO

Apesar do placar agregado ter sido o mesmo (6 gols para o Time A e 6 gols para o Time B), o Time B fez mais gols fora de casa que o Time A (o Time B fez 3 gols fora de casa e o Time A fez 2).