import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "./Login";
import { GetUserDepartment } from "./GetUserDepartments";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

var timeOut = 20000;

describe('Employee requests users id from same department', () => {
    test('Employee with id 4 in department 1 requests users id from department 1', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetUsers = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    await GetUserDepartment(1, mockSetUsers, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const usersArg = mockSetUsers.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(usersArg.user_ids).toEqual([2, 3, 4, 5, 6]);

    } , timeOut);
});

describe('Employee requests users id from different department', () => {
  test('Employee with id 4 in department 1 requests users id from department 2', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetUsers = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  await GetUserDepartment(2, mockSetUsers, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const usersArg = mockSetUsers.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);
  expect(usersArg).toBeUndefined();;

  } , timeOut);
});

describe('Employee requests users id from different department while using other users id', () => {
  test('Employee with id 4 in department 1 requests users id from department 2', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetUsers = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

  let userArg = mockSetUser.mock.calls[0]?.[0];
  userArg.user_id = 8;

  await GetUserDepartment(2, mockSetUsers, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const usersArg = mockSetUsers.mock.calls[0]?.[0];

  expect(responseArg).toBe(401);
  expect(usersArg).toBeUndefined();;

  } , timeOut);
});