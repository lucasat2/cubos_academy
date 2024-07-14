# Resultado do jogo

Você está trabalhando num site de notícias esportivas e ficou responsável pelo "Minuto a minuto" de jogos de futebol. Nesta parte do site é exibido o placar do jogo e informações atualizadas a cada minuto sobre a partida. A página já foi desenvolvida por um colega e o seu papel é fazer uma pequena atualização. Dado o placar de um jogo, você precisa exibir na tela um pequeno status que informa:
- Se o time A está ganhando
- Se o time B está ganhando
- Se o jogo está zero a zero
- Se o jogo está havendo um empate com gols
Cada partida necessariamente terá apenas um status.

## Input Format

A entrada será sempre composta por duas variáveis golsA e golsB que guardam, respectivamente, a quantidade de gols que cada um dos times A e B fez na partida até o momento. As variáveis são, claro, do tipo number.

## Output Format

Você deverá imprimir na tela apenas um dos quatro status possíveis:

- `TIME A GANHANDO` - caso o time A esteja ganhando
- `TIME B GANHANDO` - caso o time B esteja ganhando
- `SEM GOLS ATE O MOMENTO` - caso o jogo esteja 0 a 0
- `EMPATE COM GOLS` - caso o jogo esteja empatado, mas com ambos os times tendo marcado gols

---
### Sample Input 0
> 3 0

### Sample Output 0
> TIME A GANHANDO

O time A está ganhando por 3 a 0