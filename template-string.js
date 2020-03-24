let nombre = 'Deadpool';
let real = 'wade winston';

//console.log(nombre + ' ' + real);
//console.log(`${nombre} ${real}`);

// let nombreCompleto = nombre + ' '  +real;
// let nombreTemplate = `${nombre} ${real}`;

// console.log(nombreCompleto === nombreTemplate);
//El triple igual sirve para comprobar el valor y la identidad son exactamente iguales


    function darNombre(){
        return `${nombre} es ${real}`
    }

    console.log(`El nombre real de ${darNombre()}`);