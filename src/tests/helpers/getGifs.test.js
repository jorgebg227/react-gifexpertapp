import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs Fetch', () => {
    test('debe de traer 10 elementos ', async () => {
        const gifs = await getGifs('Samurai X');
        expect(gifs.length).toBe(10);
    });
    
    test('debe de traer 0 elementos cuando no se le pasa nada', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });        
});
