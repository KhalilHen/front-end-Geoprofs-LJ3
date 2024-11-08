// FrontPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Add fireEvent here
import '@testing-library/jest-dom';
import moment from 'moment';
import FrontPage from './FrontPage';

describe('Calendar Component', () => {
    test('show the component with default elements', () => {
        render(<FrontPage />);

        expect(screen.getByText(/week \d+/)).toBeInTheDocument();

        expect(screen.getByText("Vorige Week")).toBeInTheDocument();
        expect(screen.getByText("Volgende Week")).toBeInTheDocument();

        expect(screen.getByTestId('date-input')).toBeInTheDocument();
    });
});

describe('Calendar Component - Date Selection', () => {
    test('updates week number when a new date is selected', () => {
        render(<FrontPage />);
        const dateInput = screen.getByTestId('date-input');

        fireEvent.change(dateInput, { target: { value: '2024-11-01' } });

        const expectedWeeknumber = moment('2024-11-01').isoWeek();
        const weekNumberDisplay = screen.getByText(/week \d+/i);
        expect(weekNumberDisplay).toHaveTextContent(`week ${expectedWeeknumber}`);
    });
});

describe('Calendar Component - Next Week Navigation', () => {
    test('advances to the next week on button click', () => {
        render(<FrontPage />);

        const initialWeekNumber = parseInt(screen.getByTestId('week-output').textContent.split(" ")[1], 10);
        const nextWeekButton = screen.getByText(/Volgende Week/i);

        fireEvent.click(  nextWeekButton, new MouseEvent('click', {}),);

        const updatedWeekNumber = parseInt(screen.getByTestId('week-output').textContent.split(" ")[1], 10);
        expect(updatedWeekNumber).toBe(initialWeekNumber + 1);
    });
});

describe('Calendar Component - Last Week Navigation', () => {
    test('goes to the previous week on button click', () => {
        render(<FrontPage />);

        const initialWeekNumber = parseInt(screen.getByTestId('week-output').textContent.split(" ")[1], 10);
        const lastWeekButton = screen.getByText(/Vorige Week/i);

        fireEvent.click(  lastWeekButton, new MouseEvent('click', {}),);

        const updatedWeekNumber = parseInt(screen.getByTestId('week-output').textContent.split(" ")[1], 10);
        expect(updatedWeekNumber).toBe(initialWeekNumber - 1);
    });
});


// TODO:
// 1. Use `jest.mock` to create a simple mock for "CalanderRow".
// 2. Set the mock to return a "<div>Calendar Row</div>" so we can test the FrontPage in isolation.
// 3. run the previous tests again to ensure they work with the mocked data.