import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifts', () => {
    const category = 'Real Madrid';
    
    test('debe de devolver el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('Debe de devolver un array de imagenes y loading a false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
});
