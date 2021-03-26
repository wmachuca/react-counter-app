const nombre = 'Wilmer';
const apellido = 'Machuca';

const nombreCompleto = `${ nombre } ${ apellido } `;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Carlos') {
    return `Hola ${ nombre }`;
}

// console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);

/*
    Los template strings son una manera de concatenar textos completos, tiene
    la ventajka de que mantiene el formato , saltos de linea y otros aspectos de diseño
    que una concatenación corriente no puede.
    Se usan siempre dentro de backticks `texto`;
    Las variables o funciones se llaman dentro de pesos llaves `${ funcion() }`
*/