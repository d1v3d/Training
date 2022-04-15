/*Encadenamiento Opcional*/

interface Pasajero{
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre:'David'
}

const pasajero2: Pasajero = {
    nombre:'Lala',
    hijos: ['Bruno','Trini']
}

function imprimeHijos(pasajero: Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0; //? evalua si tiene hijos || asigna 0 si esta vacio
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);