import { saludar, getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('Pruebas de 05-funciones.js', () => {

    test('saludar() debe retornar Hola Wilmer', () => {
        const nombre = 'Wilmer';
        const saludo = saludar(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getUser() debe retornar un objeto ', () => {
        const userTest = {
            uuid: 'ABC123',
            username: 'ElUsuario'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo() debe retornar un objeto ', () => {
        const nombre = 'Wilmer';
        const userTest = {
            uuid: 'ABC123',
            username: nombre
        }
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    })

})
