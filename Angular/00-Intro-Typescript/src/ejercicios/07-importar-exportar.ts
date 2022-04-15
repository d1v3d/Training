/*IMPORTACIONES Y EXPORTACIONES*/
import { calculaISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [{
    desc:'Telefono 1',
    precio: 500000
}];

const [total,isv] = calculaISV(carritoCompras);

console.log('TOTAL: ' , total);
console.log('ISV: ' , isv);

//Al importar una funcion, se ve obligado a crear o ejecutar el documento origen , por esto me aparecio el console.log del archivo 06-desestructuracion-funcion