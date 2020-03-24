let deadpool = {
    nombre:'Wade',
    apellido:'Winstron',
    poder:'Regeneracion',
    getNombre:function (){
        return `${this.nombre} ${this.apellido} Su poder es: ${this.poder}`
    }
};
// console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

//Con la destructuracion nos ahorra tener que declarar cada variable nuevamente
// let {nombre, apellido, poder} = deadpool;
//Esto es una destructuracion porque viene directamente despues de una palabra let

//Se puede reasignar la varibale
let {nombre:nombre2, apellido, poder} = deadpool;

console.log(nombre2, apellido, poder);

