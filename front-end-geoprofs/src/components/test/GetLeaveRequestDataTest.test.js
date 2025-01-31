import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { GetLeaveRequestData } from "../GetLeaveRequestData";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

delete window.location;
window.location = { href: jest.fn() };

var timeOut = 20000;

describe('department manger get leave request data from user in own department', () => {
    test('get data from target leave request', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetData = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('2', 'password2', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    await GetLeaveRequestData(2, mockSetData, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const dataArg = mockSetData.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(dataArg.leave_request.id).toEqual(2);
    expect(dataArg.leave_request.description).toEqual("Leave request from user 4");
    expect(dataArg.leave_request.employee_id).toEqual(4);
    expect(dataArg.leave_request.leave_requests_category_id).toEqual(1);
    expect(dataArg.leave_request.leave_status).toEqual(0);
    expect(dataArg.leave_request.leave_days).toEqual(2);
    expect(dataArg.leave_request.start_date).toEqual('2025-02-01');
    expect(dataArg.leave_request.end_date).toEqual('2025-02-02');
    expect(dataArg.leave_request.is_paid).toEqual(1);//1 means true
    } , timeOut);
});

//TODO add more tests for when it should fail

//TODO add test for user leave request is from, section manger and CEO