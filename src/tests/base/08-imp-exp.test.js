import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas de 08-imp-exp.js', () => {

    test('getHeroeById() debe retornar un heroe por Id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id == id);
        expect(heroe).toEqual(heroeData);
    })
    
    test('getHeroeById() debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })
    
    test('getHeroeByOwner() debe retornar los heroes por owner', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(heroe => heroe.owner === owner);
        expect(heroes).toEqual(heroesData);
    })
    
    test('getHeroeByOwner() debe retornar 2 heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    })

})
