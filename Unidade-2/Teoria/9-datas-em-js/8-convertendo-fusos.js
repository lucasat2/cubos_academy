

const localDate = new Date('2023-06-25T12:00:00');

// Obtém o tempo em UTC diretamente usando métodos do Date
const utcDate = new Date(localDate.toISOString());

console.log('Data e hora local:', localDate.toLocaleString()); // Exibe a data e hora local
console.log('Data e hora em UTC:', utcDate.toISOString()); // Exibe a data e hora UTC em formato ISO