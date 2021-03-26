// Funciones en JS Originales
// function saludar (nombre) {
//     return `Hola ${nombre}`;
// }

//Funciones en JS con asignación
export const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

// Funciones Lambda Forma Completa
// const saludar2 = (nombre) => {
//     return `Hola ${nombre}`;
// }
// Funciones Lambda Forma Reducida
// const saludar3 = (nombre) => `Hola ${nombre}`;

//Funciones Lambda Objetos Completa
export const getUser = () => {
    return {
        uuid: 'ABC123',
        username: 'ElUsuario'
    }
}

//Funciones Lambda Objetos Reducida
// const getUser2 = () => (
//     {
//         uuid: 'ABC123',
//         username: 'ElUsuario'
//     }
// );

// console.log(saludar('Goku'));
// console.log(saludar2('Vegeta'));
// console.log(saludar3('Krilin'));
// console.log(getUser());
// console.log(getUser2());

// Ejercicio
// 1. Transformar en funcion lambda
// 2. Debe retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uuid: 'ABC123',
//         username: nombre
//     }
// }

export const getUsuarioActivo = (nombre) => (
    {
        uuid: 'ABC123',
        username: nombre
    }
);

// console.log(getUsuarioActivo('Wilmer Machuca'));

/* 
    En el uso de funciones, aunque de la manera que se usa en JS Vanilla es totalmente
    funcional, es muy buena practica usar la asiganación de funciones anonimas en variables,
    puesto que haciedo este paso adicional, se adquiere una capa adicional de verificación
    en consola, y el contenido sera correctamente validado como una función.

    Adicionalmente el uso de funciones lambda es totalmente valida y uytil en la medida de
    que se pueden ahorrar lineas de codigo valiosas y hacer un mejor uso de recursos.
*/