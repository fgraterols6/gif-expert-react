import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GiftItem />', () => {
    const title = 'Taylor Swift';
    const url = 'https://taylor-swift-1.com/img-1.png'


    test('should be match with the snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
    });

    test('should show the image with the URL and ALT', () => {


        render(<GifItem title={ title } url={ url } />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe( url );

        const {src, alt} = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe(title)
    });

});