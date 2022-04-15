
/*
    ===== Código de TypeScript =====
*/
let habilidades:string[] = ['David','Bruno','Trini'];
habilidades.push('Gaby');

interface Personaje {
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre:'Strider',
    hp:100,
    habilidades: ['Hulk','Iron Man',' Wolvering']
};

personaje.puebloNatal = 'Puente Alto';
console.table(personaje);





