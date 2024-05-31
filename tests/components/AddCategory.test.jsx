import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests in <AddCategory />', () => {

    test('should change value in the input box', () => {

        render(<AddCategory onNewCategory={ () => {} }/>)
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: 'Taylor Swift'}})
        
        expect(input.value).toBe('Taylor Swift')
    });

    test('should call onNewCategory if input has value', () => {

        const inputValue = 'TaylorSwift'
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue }});
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('shouldn\'t call onNewCategory if input is empty', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    })

})