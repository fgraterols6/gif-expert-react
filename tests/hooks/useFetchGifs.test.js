import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Test in useFetchGifs', () => {

    test('must return init state', () => {

       const { result } = renderHook(() => useFetchGifs('Taylor Swift'));
       const { images, isLoading } = result.current;
       
       expect(images.length).toBe(0);
       expect(isLoading).toBeTruthy();

    });

    test('must return an array and isLoading is false', async() => {

        const { result } = renderHook(() => useFetchGifs('Taylor Swift'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        
        );

        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
 
     });
})