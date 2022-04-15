/*Clases*/
    /*ALT + SHIF SELECCION Y ESCRITURA MULTIPLE*/ 
    /*ALT SELECCION DE BLOQUE PALABRAS IGUALES*/

/*Las interfaces no existen en javascript*/ 
/*Puedo hacer la definicion de los tipos, no lo implementa*/ 
/*interface Personaje2 {
     alterEgo?: string;
     edad?: number;
     nombreReal?: number;
     imprimirNombre?: () => string;
}*/
//const spiderman: Personaje2 = {};

/*Clase tradicional */
class Heroe0{

    /*private alterEgo: string;
    public edad: number;
    static nombreReal: number;*/
     alterEgo: string;
     edad: number;
     nombreReal: number;

    /*Constructor sin parametros*/ 
    /*constructor (){
        console.log("Hola soy el Constructor clase Heroe");
    }*/
    /*Constructor con parametros*/
    constructor(alterEgo:string){
        console.log("Hola soy el Constructor clase Heroe");
        //this.alterEgo es la propiedad instancia de la clase
        //alterEgo sin this , es el parametro
        this.alterEgo = alterEgo;        
    }

    imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal;
    }

}

/*Extender clases */
class PersonaNormal {
 
    constructor(
        public nombre?:string, 
        public direccion?: string
    ) {}
}

/*Clase Con propiedades cortas */
class Heroe extends PersonaNormal{

    constructor(
        public alterEgo?:string,
        public edad?:number,
        public nombreReal?: string
        
    ){
        super(nombreReal,'Puente Alto, Chile');
    }
}


const ironman = new Heroe('Ironman',34,'David');
console.log(ironman);
