import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from "../Login";
import { GetMangerDepartment } from "../GetMangerDepartment";
import { BrowserRouter as Router } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import 'isomorphic-fetch';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

delete window.location;
window.location = { href: jest.fn() };

var timeOut = 20000;

describe('Employee requests manger user id from same department from self', () => {
    test('receives correct user id that is from manger of requested department', async () => {
    const mockSetUser = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetResponse = jest.fn();
    const mockSetMangers = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

    const userArg = mockSetUser.mock.calls[0]?.[0];

    await GetMangerDepartment(1, mockSetMangers, userArg, mockSetResponse);

    const responseArg = mockSetResponse.mock.calls[0]?.[0];
    const mangersArg = mockSetMangers.mock.calls[0]?.[0];

    expect(responseArg).toBe(200);
    expect(mangersArg.user_ids).toEqual([2]);

    } , timeOut);
});

describe('Employee requests manger user id from different department from self', () => {
  test('receives no data but instead response error 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetMangers = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  await GetMangerDepartment(2, mockSetMangers, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const mangersArg = mockSetMangers.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);
  expect(mangersArg).toBeUndefined();

  } , timeOut);
});

describe('Employee requests manger user id from different department from self while using other users id', () => {
  test('receives no data but instead response error 401', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetMangers = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('GeoprofsEmployee2@example.com', 'password4', mockSetUser);

  let userArg = mockSetUser.mock.calls[0]?.[0];
  userArg.user_id = 8;

  await GetMangerDepartment(2, mockSetMangers, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const mangersArg = mockSetMangers.mock.calls[0]?.[0];

  expect(responseArg).toBe(401);
  expect(mangersArg).toBeUndefined();

  } , timeOut);
});

describe('Section manger requests manger user id from department that is in the section manger is managing', () => {
  test('receives correct user id that is from manger of requested department', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetMangers = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('GeoprofsSectionManger1@example.com', 'password1', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  await GetMangerDepartment(1, mockSetMangers, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const mangersArg = mockSetMangers.mock.calls[0]?.[0];

  expect(responseArg).toBe(200);
  expect(mangersArg.user_ids).toEqual([2]);

  } , timeOut);
});

describe('Section manger requests manger user id from department that is not in the section manger is managing', () => {
  test('receives no data but instead response error 403', async () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetResponse = jest.fn();
  const mockSetMangers = jest.fn();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  await Login('GeoprofsSectionManger1@example.com', 'password1', mockSetUser);

  const userArg = mockSetUser.mock.calls[0]?.[0];

  await GetMangerDepartment(4, mockSetMangers, userArg, mockSetResponse);

  const responseArg = mockSetResponse.mock.calls[0]?.[0];
  const mangersArg = mockSetMangers.mock.calls[0]?.[0];

  expect(responseArg).toBe(403);
  expect(mangersArg).toBeUndefined();

  } , timeOut);
});