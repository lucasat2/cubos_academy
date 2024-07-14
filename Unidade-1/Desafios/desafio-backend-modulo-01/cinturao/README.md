# Disputa pelo cinturão

Você foi contratado pela equipe do UFC, maior evento de artes maciais mistas (MMA) do mundo, para desenvolver um programa que mostre se um determinado lutador merece disputar o cinturão, ou seja, desafiar o campeão de sua categoria pelo título.

Para disputar o cinturão o lutador não pode ser considerado principiante, ou seja, ele deve ter, no mínimo, 10 lutas e deve ter um aproveitamento, em porcentagem, de no mínimo 50%.

O cálculo do aproveitamento é feito da seguinte maneira:

Aproveitamento (%) = [(numero de vitorias - numero de derrotas) / quantidade de lutas] * 100

O programa irá recebe um array de strings em que cada elemento representa o resultado de uma luta feita pelo lutador:
- V em caso de vítoria;
- E em caso de empate;
- D em caso de derrota.


## Input Format

A entrada será sempre um array de strings, chamado de cartel, em que cada item é o resultado de uma luta do atleta.

## Output Format

Você deverá imprimir na tela:

- `MERECE DISPUTAR` caso o atleta mereça disputar o cinturão;
- `NAO MERECE DISPUTAR` caso o atleta não mereça.

---
### Sample Input 0
> [E, V, V, V, V, V, D, V, V]

### Sample Output 0
> NAO MERECE DISPUTAR

Apesar do lutador ter um aproveitamento de quase 100% (ganhou quase todas as lutas), ele ainda é tratado como principiante (não tem um número mínimo de 10 lutas).
---
### Sample Input 1
> [V, V, V, D, V, V, V, E, V, E]

### Sample Output 1
> MERECE DISPUTAR

O lutador possui um aproveitamento de 60% (maior que o mínimo exigido) e possui o número mínimo de 10 lutas.