//LoginTest.test.js
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

var timeOut = 20000; //time out is high because it needs fetch from the backend

//employee login tests
describe('Login employee with mail', () => {
  test('Login employee with mail that has id 4', async () => {
    const mockSetUser = jest.fn();
    const mockSetResponse = jest.fn();
    const mockNavigate = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser, mockSetResponse);

    const userArg = mockSetUser.mock.calls[0]?.[0];
    const responseArg = mockSetResponse.mock.calls[0]?.[0];

    expect(userArg.user_id).toBe(4);
    expect(userArg.access_token).toBeDefined();
    expect(userArg.cache_id).toBeDefined();
    expect(userArg.expire_date).toBeDefined();
    expect(responseArg).toBe(200);
  } , timeOut);
});

describe('Login employee with id', () => {
  test('Login employee with id that has id 6', async () => {
    const mockSetUser = jest.fn();
    const mockSetResponse = jest.fn();
    const mockNavigate = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('6', 'password6', mockSetUser, mockSetResponse);

    const userArg = mockSetUser.mock.calls[0]?.[0];
    const responseArg = mockSetResponse.mock.calls[0]?.[0];

    expect(userArg.user_id).toBe(6);
    expect(userArg.access_token).toBeDefined();
    expect(userArg.cache_id).toBeDefined();
    expect(userArg.expire_date).toBeDefined();
    expect(responseArg).toBe(200);
  } , timeOut);
});

describe('Login employee with id using wrong password', () => {
  test('Login employee with id that has id 6', async () => {
    const mockSetUser = jest.fn();
    const mockSetResponse = jest.fn();
    const mockNavigate = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('6', 'password1', mockSetUser, mockSetResponse);

    const userArg = mockSetUser.mock.calls[0]?.[0];
    const responseArg = mockSetResponse.mock.calls[0]?.[0];

    expect(userArg).toBeUndefined();
    expect(responseArg).toBe(401);
  } , timeOut);
});