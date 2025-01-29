import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { GetLeaveRequests } from "../GetLeaveRequests";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

var timeOut = 20000;

describe('department manger get leave request allowed to see', () => {
    test('get response with array containing know leave request', async () => {//know leave request are leave request in seeder from backend
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetData = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('2', 'password2', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    await GetLeaveRequests(mockSetData, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const dataArg = mockSetData.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(dataArg.leave_request_id).toEqual(expect.arrayContaining([3, 4, 5]));
    //TODO check if leave requester allowed to be seen by user
    } , timeOut);
});

//TODO add more tests for when it should fail

//TODO add test for section manger and CEO