import { getHeroeById } from './08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe); // Caso OK
//         // reject('No se pudo encontrar el heroe'); // Caso Error
//     }, 1000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
// }).catch((e) => {
//     console.warn(e);
// });

export const getHeroeByIdAsync = (id) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            (heroe ? resolve(heroe) : reject('No se ha encontrado el heroe'));
        }, 1000);
    })
);


// getHeroeByIdAsync(10)
//     .then(console.log)
//     .catch(console.warn);

/*
    Las promesas, son los llamados asincronos que debemos tener en cuenta para
    poder hacer consumo de servicios de otras fuentes, es muy importante tener en
    cuenta el llamado de los metodos then, catch y finally en caso de ser necesario
    puesto que si no se hace uso por lo menos de los dos primeros, entonces se esta
    omitiendo el resultado de la promesa, y queda marcado como código basura.
*/