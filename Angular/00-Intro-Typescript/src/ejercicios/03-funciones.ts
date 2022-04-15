
/*
    ===== Código de TypeScript =====
    ===== Funciones =====
    siempre colocar los tipos en nuestro codigo
*/

function sumar(a: number,b: number): number{
    return (a + b);
}


const sumarFlecha = (a: number,b: number):number => {
    return a + b;
}

function multiplicar(numero: number,otroNumero?: number,base: number=2){
    return numero * base;
}

/*
const resultado = multiplicar(5,0,8);

console.log(resultado);*/
//javascript en funcion vacia siempre retorna undefine.

interface PersonajeLOR{
    nombre:string;
    pv:number;
    //mostrarHp();
    //mostrarHp:(a:number, b:string, c:boolean)=> void;
    //mostrarHp: () => number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR,curarX:number): void{
    
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida: ',this.pv)
    }
}

curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();

