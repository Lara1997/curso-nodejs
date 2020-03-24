
// --------------------> 1
// function sumar(u,v) {
//     return u+v;
// }
// console.log(sumar(500,300)); Seria la manera simple de declarar una funcion
//---------------------> 2
// let sumar = (u,v) => {
//     return u+v;
// }
// console.log(sumar(400,700)); Aplicando a funcion de flecha
//---------------------> 3
// let sumar = (u, v) => u+v;
// console.log(sumar(600,200)); Si el resultado o return es de una sola linea(que entre en una linea) se puede rescribir de esta manera.

// function saludar() {
//     return 'ola de mar';
// }
// console.log(saludar()); Funcion declarada "Normalmente"


// let saludar = () => 'ola de mar'; Aplicando a funcion de flecha
// console.log(saludar());


// function saludar(Nombre) { FUNCION DECLARADA "NORMALMENTE"
//     return `oli ${Nombre}`
// }
// console.log(saludar('Pokemon'));

// let saludar = nombre => `ola k ac ${ nombre }` APLICANDO LA FUNCION DE FLECHA CUANDO SOLO TIENE UNA LINEA EL RESULTADO
// console.log(saludar('Planta'));

// let deadpool = {
//     nombre:'Wade',
//     apellido:'Winstron',
//     poder:'Regeneracion',
//     getNombre:function (){
//         return `${this.nombre} ${this.apellido} Su poder es: ${this.poder}`
//     }
// };

// let deadpool = {
//     nombre:'Wade',
//     apellido:'Winstron',
//     poder:'Regeneracion',
//     getNombre:() =>{
//         return `${this.nombre} ${this.apellido} Su poder es: ${this.poder}`
//     }
// };
//  console.log(deadpool.getNombre()); Nos aparecera como indefinido  ya que una de las caracteristicas de la funcion de flecha es que cuando se utiliza el objeto this apunta al valor que tenga el objeto this que esta afuera.

// let deadpool = {
//     nombre:'Wade',
//     apellido:'Winstron',
//     poder:'Regeneracion',
//     getNombre(){
//         return `${this.nombre} ${this.apellido} Su poder es: ${this.poder}`
//     }
// }
//   console.log(deadpool.getNombre()); Cuando en las funciones de flecha se requiera utilizar el objeto this, se puede declara la funcion de esta manera para que nos muestre el resultado que deseamos.