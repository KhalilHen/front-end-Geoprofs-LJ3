//LoginTest.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "./Login";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login employee', () => {

  test('show the component with default elements', async () => {
    const mockSetUser = jest.fn();
    const mockSetResponse = jest.fn();
    const mockNavigate = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    var result = await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser, mockSetResponse);

    console.log("r1 " + result)
    console.log("r2 " + mockSetUser.mock.calls);
    console.log("r3 " + mockSetUser.mock.calls.length);
    
    // Check the argument passed to mockSetUser
    const userArg = mockSetUser.mock.calls[0]?.[0];
    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    console.log("r4 " + userArg);
    console.log("r4 " + userArg?.user_id);
    expect(userArg).toBe();
    expect(responseArg).toBe(200);
  } , 20000);
});
