/*DECORADORES*/
/* ES UNA FUNCION*/
/*SE USAN PARA CAMBIAR LAS CLASES EN EL MOMENTO QUE SE DEFINEN CUANDO SE COMPILAN SE EXTIENDEN FUNCIONALIDADES QUE DESEAMOS IMPLEMENTAR*/



function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor:T
){
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';
    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

/*Los decodarodes se trabaja antes de crear una nueva instancia*/
/*Sirven para expandir o añadir funcionalidades y ayudan para diferenciar si una clase es un componente o una directiva o un servicio*/
const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);