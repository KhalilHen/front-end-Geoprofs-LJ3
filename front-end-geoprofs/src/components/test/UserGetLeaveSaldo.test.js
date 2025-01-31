import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { GetLeaveSaldoUser } from "../GetLeaveSaldoUser";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

delete window.location;
window.location = { href: jest.fn() };

var timeOut = 20000;

describe('Employee requests leave saldo from self', () => {
    test('receives correct integer witch is the amount of leave saldo of self', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetData = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    await GetLeaveSaldoUser(4, mockSetData, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const dataArg = mockSetData.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(dataArg.leave_days).toEqual(30);

    } , timeOut);
});

//TODO add test for not bieng prohibited for getting data and for manger of employee requesting data