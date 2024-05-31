import { getGifs } from '../../src/helpers/getGifs'; 

describe('Test in GetGifs()', () => {

    test('Must return an array of gifs', async() => {

        const gifs = await getGifs('Taylor Swift');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    });


})