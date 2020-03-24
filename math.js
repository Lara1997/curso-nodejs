/* Forma 1
//Se crear las funciones de las operaciones matematicas
let suma = (n1, n2) => n1 + n2;

let resta = (n1, n2) => n1 - n2;

let multi = (n1, n2) =>  n1 * n2;

let div = (n1, n2) => n1 / n2;

 //Se exporta cada funcion para poder mandarlas a llamar desde el index
exports.suma = suma;
exports.resta = resta;
exports.multi = multi;
exports.div = div;
*/
//Forma 2 usando un objeto

const math = {};//Creamos un objeto


let suma = (n1, n2) => n1 + n2;

let resta = (n1, n2) => n1 - n2;

let multi = (n1, n2) =>  n1 * n2;

let div = (n1, n2) => n1 / n2;


//Le agregamos al objeto sus propiedaddes
math.suma = suma;
math.resta = resta;
math.multi = multi;
math.div = div;

module.exports = math; //se exporta el objeto
