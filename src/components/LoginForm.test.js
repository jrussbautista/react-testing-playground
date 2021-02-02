import { render, fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm';


describe('Testing LoginForm Component', () => {
    it('email input is updated correctly' , () => {
       const { queryByPlaceholderText } =  render(<LoginForm />);
        const emailEl = queryByPlaceholderText('Email');

        fireEvent.change(emailEl, { target: { value: "test@gmail.com" }});

       expect(emailEl.value).toBe("test@gmail.com");
        
    });

    it('password input is updated correctly' , () => {
        const { queryByPlaceholderText } =  render(<LoginForm />);
         const emailEl = queryByPlaceholderText('Password');
 
         fireEvent.change(emailEl, { target: { value: "password" }});
 
        expect(emailEl.value).toBe("password");
         
     });
})