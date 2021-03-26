describe('Pruebas de demo.test.js', () => {

    test('Deben ser iguales los strings', () => {
        const mensaje1 = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
        expect(mensaje1).toBe(mensaje2);
    });

});
