import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { CreateLeaveRequest } from "../CreateLeaveRequest";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import moment from 'moment';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

delete window.location;
window.location = { href: jest.fn() };

var timeOut = 20000;

describe('user makes leave request', () => {
    test('receives message it was successful', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetData = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    const startDate = moment().year(2025).month(11-1).date(11);

    const endDate = moment().year(2025).month(11-1).date(12);

    const input = {description:'this leave request is create by a test by user with id 4', categoryId: 1, startDate: moment(startDate).format('YYYY-MM-DD'), endDate: moment(endDate).format('YYYY-MM-DD'), isPaid: true};

    await CreateLeaveRequest(input , mockSetData, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const dataArg = mockSetData.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(dataArg.message).toEqual('Leave request submitted successfully!');

    //TODO test if it is actually create leave request here for need to be GetLeaveRequest made in front end and backend

    } , timeOut);
});

//TODO add more tests for when it should fail
