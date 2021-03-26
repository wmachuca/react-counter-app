// Se le llama "Desestructuración" o "Asignación Desestructurante"

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre: nuevoNombre, edad: nuevaEdad, clave: nuevaClave } = persona;

console.log(nuevoNombre);
console.log(nuevaEdad);
console.log(nuevaClave);

// Desestructuración directa en parametros
const context = ({ nombre, edad, clave, rango = 'Capitán' }) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        location: {
            lat: 14.1212,
            lng: 22.3232,
        }
    }
}

// Desestructuración anidada
const { nombreClave, anios, location: { lat, lng } } = context(persona);

console.log(nombreClave, anios, lat, lng);

/*
    La desestructuración es muy usada para acceder a objetos en respuestas directamente,
    estas pueden ser desestructuradas con nuevos nombres simplemente asignando el nombde
    despues de dos puntos.

    La desestructuración anidada se puede hacer directamente al objeto como si se 
    estuviera haciendo un renombramiento del objeto, pero no es recomendado por temas de 
    orden del código.
*/