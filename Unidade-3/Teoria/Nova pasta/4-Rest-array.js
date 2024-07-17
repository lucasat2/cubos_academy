const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',]

const [janeiro, fevereiro, marco, abril, ...outrosMeses] = meses;

console.log(janeiro);
console.log(fevereiro);
console.log(marco);
console.log(abril);
console.log(outrosMeses);