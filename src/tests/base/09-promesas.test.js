import { getHeroeByIdAsync } from '../../bases/09-promesas'
import heroes from '../../data/heroes';

describe('Pruebas de 09-promesas.js', () => {

    test('getHeroeByIdAsync() debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    })
    
    test('getHeroeByIdAsync() debe retornar un error si el id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .then(heroe => {
                throw new Error(JSON.stringify(heroe));
                done();
            })
            .catch(error => {
                expect(error).toBe('No se ha encontrado el heroe');
                done();
            })
    })

})
