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

    dataArg.leave_requests.forEach(leaveRequestData => {
      expect(leaveRequestData).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          description: expect.any(String),
          employee_id: expect.any(Number),
          leave_requests_category_id: expect.any(Number),
          leave_days: expect.any(Number),
          start_date: expect.any(String),
          end_date: expect.any(String),
          leave_status: expect.any(Number),
          is_paid: expect.any(Number),
        })
      );
    });
    //TODO check if leave requester allowed to be seen by user
    } , timeOut);
});

//TODO add more tests for when it should fail

//TODO add test for section manger and CEO