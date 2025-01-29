import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "./Login";
import { ApproveOrDeclineLeaveRequest } from "./ApproveOrDeclineLeaveRequest";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import moment from 'moment';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

var timeOut = 20000;

describe('Employee requests users ids from same department from self', () => {
    test('receives correct users ids of users in requested department', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetUsers = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    const input = {leave_request_id: 1, value: 2};

    await ApproveOrDeclineLeaveRequest(input , mockSetUsers, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const usersArg = mockSetUsers.mock.calls[0]?.[0];

    console.log(usersArg);

    expect(responseArg).toBe(200);//
    expect(usersArg.message).toEqual('Leave request successfully approved or declined');

    //TODO test if it is actually create leave request here for need to be GetLeaveRequest made in front end and backend

    } , timeOut);
});