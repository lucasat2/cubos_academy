/* INICIALIZAR O PACOTE NPM 
npm init -y

INSTALAR O DATE FNS 
npm install date-fns --save
*/
//IMPORTAR O DATE FNS
// Obs: Importar apenas as funcoes que precisa
// Consultar tabela com os formatos em date fns.org

const { format } = require('date-fns');
const date = new Date(2024,5, 25);
console.log(format(date, "dd/MM/yyyy"));

