//LoginTest.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Add fireEvent here
import '@testing-library/jest-dom';
import { Login } from "./Login";
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login employee', () => {
  test('show the component with default elements', async () => {
    const mockUser = jest.fn();
    const mockMail = 'username';
    const mockPassword = 'password';

    render(
      <Router>
        <Login mail={mockMail} password={mockPassword} setUser={mockUser} />
      </Router>
    );
    
    Login('username', 'password', mockUser);

    await waitFor(() => expect(mockUser).toHaveBeenCalledWith('expectedUser'));
  })
});
