import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GiftGrid />', () => {

    const category = 'Taylor Swift';


    test('should show loading on init', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } />)

        expect( screen.getByText('Cargando...'))
        expect( screen.getByText( category ))

    });

    test('should show items after loading', () => {

        const gifs = [{
            id: 3,
            title: 'taylor1',
            url: 'https://hello.com/img.png'
        }, {
            id: 2,
            title: 'taylor2',
            url: 'https://hello.com/img2.png'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } />)
        expect( screen.getAllByRole('img').length ).toBe(2)
        

    });
})