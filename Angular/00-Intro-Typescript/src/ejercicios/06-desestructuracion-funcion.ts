/*Desestructuracion de Argumentos*/
export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Xiaomi mi 10T PRO',
    precio: 350000
}

const notebook: Producto = {
    desc: 'Lenovo i7 Pro',
    precio: 800000
}

export function calculaISV(productos: Producto[]): [number, number]{
  let total = 0;

  /*productos.forEach((producto) =>{
     total += producto.precio;
  })*/
  
  /*Desestructuracion de argumento de propiedades de objeto ->  {precio}*/
  productos.forEach(({precio}) =>{
    total += precio;
 })

  // return total * 0.15;
  return [total,total * 0.15];
}


const articulos = [ telefono, notebook];
//const isv = calculaISV(articulos);
/*Desestructuracion de argumento de array ->  [total,isv]*/
const [total,isv] = calculaISV(articulos);

/*console.log('TOTAL: ' , total);
console.log('ISV: ' , isv);*/
