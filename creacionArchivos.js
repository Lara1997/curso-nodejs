/*
const fs = require('fs'); //Se invoca los modulos de la funcion
//funcion para crear archivos writeFile
fs.writeFile('./texto.txt', 'ola de mar', function (err) { 
    if (err) {
        console.log(err);
    }
    console.log('Nota de texto creada');
});
console.log('Fin del programa');
*/

const fs = require('fs'); //Se invoca los modulos de la funcion
//funcion para leer contenido de archivos
const colors = require('colors');//para poner color en consola 
fs.readFile('./texto.txt',  function (err, data) { 
    if (err) {
        console.log(err);
    }
    console.log(data.toString().random);
});
