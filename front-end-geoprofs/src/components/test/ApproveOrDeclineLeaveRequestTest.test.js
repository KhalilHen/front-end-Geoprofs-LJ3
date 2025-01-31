import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { ApproveOrDeclineLeaveRequest } from "../ApproveOrDeclineLeaveRequest";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

delete window.location;
window.location = { href: jest.fn() };

var timeOut = 20000;

describe('department manger approves leave request from user in department self is managing', () => {
    test('receives message it was successful', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetData = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('2', 'password2', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    const input = {leave_request_id: 1, value: 2};//value 2 is accept and value 1 would be decline 

    await ApproveOrDeclineLeaveRequest(input , mockSetData, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const dataArg = mockSetData.mock.calls[0]?.[0];

    console.log(dataArg);

    expect(responseArg).toBe(200);//response 422 means test may already be run try a fresh migration and seeders before re trying test
    expect(dataArg.message).toEqual('Leave request successfully approved or declined');

    //TODO test if it is actually changes leave request here for need to be GetLeaveRequest made in front end and backend

    } , timeOut);
});

describe('employee tries to approves leave request from self', () => {
  test('receives 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetData = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('3', 'password3', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  const input = {leave_request_id: 1, value: 2};//value 2 is accept and value 1 would be decline 

  await ApproveOrDeclineLeaveRequest(input , mockSetData, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const dataArg = mockSetData.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);

  //TODO test if it is actually didn't changes leave request here for need to be GetLeaveRequest made in front end and backend

  } , timeOut);
});

describe('employee tries to approves leave request from other employee', () => {
  test('receives 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetData = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('4', 'password4', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  const input = {leave_request_id: 1, value: 2};//value 2 is accept and value 1 would be decline 

  await ApproveOrDeclineLeaveRequest(input , mockSetData, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const dataArg = mockSetData.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);

  //TODO test if it is actually didn't changes leave request here for need to be GetLeaveRequest made in front end and backend

  } , timeOut);
});

describe('department manger tries to approves leave request from user in department self is not managing', () => {
  test('receives 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetData = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('7', 'password7', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  const input = {leave_request_id: 1, value: 2};//value 2 is accept and value 1 would be decline 

  await ApproveOrDeclineLeaveRequest(input , mockSetData, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const dataArg = mockSetData.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);

  //TODO test if it is actually didn't changes leave request here for need to be GetLeaveRequest made in front end and backend

  } , timeOut);
});

describe('section manger tries to approves leave request from other with role employee', () => {
  test('receives 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetData = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('1', 'password1', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  const input = {leave_request_id: 1, value: 2};//value 2 is accept and value 1 would be decline 

  await ApproveOrDeclineLeaveRequest(input , mockSetData, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const dataArg = mockSetData.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);

  //TODO test if it is actually didn't changes leave request here for need to be GetLeaveRequest made in front end and backend

  } , timeOut);
});

describe('CEO tries to approves leave request from other with role employee', () => {
  test('receives 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetData = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('48', 'password48', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  const input = {leave_request_id: 1, value: 2};//value 2 is accept and value 1 would be decline 

  await ApproveOrDeclineLeaveRequest(input , mockSetData, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const dataArg = mockSetData.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);

  //TODO test if it is actually didn't changes leave request here for need to be GetLeaveRequest made in front end and backend

  } , timeOut);
});

//TODO add more tests for when it should fail

//TODO add test for declining leave request