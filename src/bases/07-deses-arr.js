const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;
// console.log(p3);

export const retornaArreglo = () => (
    ['ABC', 123]
);

// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

// Ejercicio
// 1. El primer valor se llama nombre
// 2. El segundo valor se llama setNombre
const state = (valor) => ([valor, () => { console.log('Hola Mundo') }]);

// const [nombre, stNombre] = state('Goku');
// console.log(nombre);
// stNombre();

/*
    La desestructuración de arreglos funciona igual que la de objetos, con la diferencia
    de que los arreglos al no tener llave sino posición, si necesitamos desestructurar en
    el orden qeu se encuentren los valores dentro del arreglo. Y ya no usamos llaves {} sino
    llaves cuadradas [], tal cual lo usan los arreglos.
*/