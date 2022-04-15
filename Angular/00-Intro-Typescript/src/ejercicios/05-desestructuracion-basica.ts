interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen:90,
    segundo:36,
    cancion: 'Mess',
    detalles: {
        autor:'Ed Sheeran',
        anio: 2015
    }
}

/*Problema Propuesto
console.log('El volumen actual de:', reproductor.volumen);
console.log('El segundo actual de:', reproductor.segundo);
console.log('La canción actual de:', reproductor.cancion);
console.log('El autor es:', reproductor.detalles.autor);*/

/*Desestructuracion de Objetos*/
/*Se realiza por nombre de la propiedad*/ 
/*
//const autor = 'Fulano';
const { volumen, segundo, cancion, detalles } = reproductor;
//La siguiente linea no se recomienda porque no es facil de entender autorDetalle es como un alias de autor
//const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
const { autor } = detalles;
console.log('El volumen actual de:', volumen);
console.log('El segundo actual de:', segundo);
console.log('La canción actual de:', cancion);
console.log('El autor es:', autor);
*/

/*Desestructuracion de Arreglos*/
/*Se realiza por orden sin importar el nombre*/ 
const dbz: string[] = ['Goku','Vegeta','Trunks'];

/*console.log('Personje 1: ', dbz[0]);
console.log('Personje 2: ', dbz[1]);
console.log('Personje 3: ', dbz[2]);*/
const [ p1,p2,p3] = dbz;
console.log('Personje 1: ', p1);
console.log('Personje 2: ', p2);
console.log('Personje 3: ', p3);




