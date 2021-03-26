// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// console.table(owners);

// Array.prototype.find()
export const getHeroeById = (id) => (
    heroes.find(
        (heroe) => heroe.id === id
    )
);

// console.table(getHeroeById(2));

// Array.prototype.filter()
export const getHeroesByOwner = (owner) => (
    heroes.filter(
        (heroe) => heroe.owner === owner
    )
);

// console.table(getHeroesByOwner('DC'));
// console.table(getHeroesByOwner('Marvel'));

/*
    Las importaciones se pueden usar directas sin llaves, o destructuradas con llaves, pero solo
    se pueden hacer por defecto cuando lo que se desea importar esta por defecto en el archivo
    del export, y las desestructuradas se usan cuando hay mas de una o no tiene ninguna por
    defecto en el archivo de exportaciones.
*/