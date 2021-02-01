import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter';


describe('Testing Count Component', () => {


    it('counter increments by 1 when increment button clicks', () => {
        render(<Counter />)

       const counter = screen.getByTestId('counter');

       const incrementBtn = screen.getByText('Increment');
       
       fireEvent.click(incrementBtn);
    
       expect(counter.textContent).toEqual('Current Count: 1');
    })

    it('counter decrements by 1 when decrement button clicks', () => {
        render(<Counter />)

       const counter = screen.getByTestId('counter');

       const decrementBtn = screen.getByText('Decrement');
       
       fireEvent.click(decrementBtn);
    
       expect(counter.textContent).toEqual('Current Count: -1');
    })    


});

