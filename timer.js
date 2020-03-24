console.log('Inicio del programa');

setTimeout(() => {
    console.log('Primer Timeout');
}, 3000);

setTimeout(() => {
    console.log('segundo Timeout');
}, 0);
 
setTimeout(() => {
    console.log('tercer timeout');
}, 0);

console.log('Final del programa');