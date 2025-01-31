import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { GetUserData } from "../GetUserData";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

var timeOut = 20000;

describe('', () => {
    test('', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetData = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    await GetUserData(4, mockSetData, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const dataArg = mockSetData.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(dataArg.user_data.id).toEqual(4);
    expect(dataArg.user_data.department_id).toEqual(1);
    expect(dataArg.user_data.name).toEqual("TestEmployee2");
    expect(dataArg.user_data.email).toEqual("GeoprofsEmployee2@example.com");
    expect(dataArg.user_data.role).toEqual("employee");
    expect(dataArg.user_data.onLeave).toEqual("present");
    } , timeOut);
});