import Cliente from "./cliente.js" 
import Impuestos from "./impuestos.js";

let clienteUno = new Cliente('Juancho');
let impuestoUno = new Impuestos(120000000, 2000000);
clienteUno.impuestos = impuestoUno;
clienteUno.calcularImpuesto();

console.log(clienteUno);
console.log(impuestoUno);