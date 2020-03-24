//Un CALLBACK es una funcion que se ejecuta cuando algo sucede o despues de algo
// setTimeout(function(){
//     console.log('Paso un segundo');
// }, 1000);//Esta es la funcion que se conoce como callback ya que se va dispara al pasar 3 segundos

// setTimeout(() => {
//     console.log('pasaron 2 segundos');
// }, 2000);//La misma funcion pero pasada a funcion de flecha 

//creando callbacks
           //creamos nuestra funcion
    let getUsuarioById = (id, myCallback) => {

        let usuario = {
            nombre:'Daniel',
            id
        }

        if ( id === 20 ) {
            console.log(`El usuarion con el id ${ id } no existe en la DB`);
        }else{
               myCallback(null,usuario);
        }
     
    }

    getUsuarioById(1, (err, usuario) => {

        if(err) {
            return console.log(err);
        }

        console.log('Usuario de base datos',usuario);

    });