import { getImagen } from '../../bases/11-async-await'

describe('Prueba de 11-async-await.js', () => {

    test('getImagen() debe retornar la url de una imagen', async () => {
        const url = await getImagen();
        await fetch(url)
            .then(response => {
                expect(response.status).toBe(200);
            })
            .catch(() => {
                throw new Error('No se generó una imagen')
            })
    })

})
