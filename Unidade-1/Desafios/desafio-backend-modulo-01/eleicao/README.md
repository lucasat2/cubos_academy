# 2ª turno de uma eleição

Não ocorre o segundo turno de uma eleição para prefeito em municípios com menos de 200 mil eleitores ou em municípios cuja soma dos votos dados ao candidato primeiro colocado do primeiro turno seja maior que a metade de todos os votos.

Crie um programa que, ao receber a quantidade de votos válidos de um município e a quantidade de votos do candidato com o maior número de votos no primeiro turno, retorne se haverá ou não um segundo turno.

## Input Format

A entrada do problema será sempre composta por duas variaveis:

- `quantidadeEleitores` do tipo number. Essa é a quantidade de eleitores do município analisado.
- `votosPrimeiroColocado` do tipo number. Essa é a quantidade de votos, em porcentagem, dados ao candidato primeiro colocado do primeiro turno.


## Output Format

Você deve imprimir na tela:

- `HAVERA SEGUNDO TURNO` caso seja necessário ter o segundo turno da eleição;
- `NAO HAVERA SEGUNDO TURNO` caso não seja necessário ter o segundo turno da eleição.

---
### Sample Input 0
> 195000 51

### Sample Output 0
> NAO HAVERA SEGUNDO TURNO

Apesar do candidato com maior número de votos, em porcentagem, ter atingido mais de 50% dos votos, o município não tem o número mínimo de 200000 habitantes
---
### Sample Input 1
> 1000000 49

### Sample Output 1
> HAVERA SEGUNDO TURNO

O município tem mais de 200000 habitantes e o candidato mais votado no primeiro turno tem menos de 50% dos votos