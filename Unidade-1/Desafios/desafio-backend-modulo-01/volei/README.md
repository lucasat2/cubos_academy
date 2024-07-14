# Placar de Volei

Você ficou responsavel por fazer uma atualização no software que controla um placar de um ginásio de vôlei. No vôlei de quadra, um set se encerra quando um dos times atinge pelo menos 25 pontos e tem pelo menos 2 pontos de vantagem sobre o adversário. Seu papel é, a partir do placar de um set do jogo, informar se:

- Se o time A venceu o set
- Se o time B venceu o set
- Se o time A está vencendo o set (mas ainda não venceu)
- Se o time B está vencendo o set (mas ainda não venceu)
- Se o jogo está empatado


## Input Format

A entrada será sempre composta por duas variáveis pontoA e pontoB que guardam, respectivamente, a quantidade de pontos que cada um dos times A e B fez no set até o momento. As variáveis são, claro, do tipo number.

## Output Format

Você deverá imprimir na tela apenas um dos quatro status possíveis:

- `TIME A VENCEU O SET` - caso o time A tenha vencido o set
- `TIME B VENCEU O SET` - caso o time B tenha vencido o set
- `TIME A VENCENDO` - caso o time A esteja vencendo o set, mas ainda não tenha vencido
- `TIME B VENCENDO` - caso o time B esteja vencendo o set, mas ainda não tenha vencido
- `JOGO EMPATADO` - caso o jogo esteja empatado

---
### Sample Input 0
> 3 0

### Sample Output 0
> TIME A VENCENDO
---
### Sample Input 1
> 25 23

### Sample Output 1
> TIME A VENCEU O SET

O time A já venceu pois atingiu pelo menos 25 pontos e pelo menos dois de vantagem
---
### Sample Input 1
> 28 27

### Sample Output 1
> TIME A VENCENDO

O time A está vencendo. Ainda não venceu pois, apesar de ter feito mais de 25 pontos, ainda não atingiu pelo menos 2 de vantagem.