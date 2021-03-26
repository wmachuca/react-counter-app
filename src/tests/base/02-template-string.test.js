import { getSaludo } from "../../bases/02-template-strings";

describe('Pruebas de 02-template-string.js', () => {
    
    test('getSaludo() debe retornar Hola Wilmer', () => {
        const nombre = 'Wilmer';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })
    
    test('getSaludo() debe retornar Hola Carlos si no se envia parametro', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })

})
