import { retornaArreglo } from '../../bases/07-deses-arr'

describe('Pruebas de 07-deses-obj.js', () => {

    test('retornaArreglo() debe retornar un string y un numero', () => {
        const [letras, numeros] = retornaArreglo();
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number')
    })

})
