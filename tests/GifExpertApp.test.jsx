import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('should show title', () => {

        render(<GifExpertApp />)

        const h1 = screen.getByText('GifExpertApp')

        expect(h1).toBeTruthy();
    });


});