// FrontPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Add fireEvent here
import '@testing-library/jest-dom';
import moment from 'moment';
import FrontPage from './FrontPage';

describe('Calendar Component', () => {
    test('renders the component with default elements', () => {
        render(<FrontPage />);

        expect(screen.getByText(/week \d+/)).toBeInTheDocument();

        expect(screen.getByText("Vorige Week")).toBeInTheDocument();
        expect(screen.getByText("Volgende Week")).toBeInTheDocument();

        expect(screen.getByTestId('date-input')).toBeInTheDocument();
    });
});

describe('FrontPage Component - Date Selection', () => {
    test('updates week number when a new date is selected', () => {
        render(<FrontPage />);
        const dateInput = screen.getByTestId('date-input');

        fireEvent.change(dateInput, { target: { value: '2024-11-01' } });

        const expectedWeeknumber = moment('2024-11-01').isoWeek();
        const weekNumberDisplay = screen.getByText(/week \d+/i);
        expect(weekNumberDisplay).toHaveTextContent(`week ${expectedWeeknumber}`);
    });
});

describe('FrontPage Component - Next Week Navigation', () => {
    test('advances to the next week on button click', () => {
        render(<FrontPage />);

        const initialWeekNumber = parseInt(screen.getByText(/week/i, { selector: 'p.text-2xl.text-center' }).textContent.split(" ")[1], 10);
        const nextWeekButton = screen.getByText(/Volgende Week/i);

        // TODO:
        // 1. Click the "Next Week" button using `fireEvent.click`.
        fireEvent.click(  nextWeekButton, new MouseEvent('click', {}),);

        // 2. Check if the displayed week number has incremented by 1 from `initialWeekNumber`.
        const updatedWeekNumber = parseInt(screen.getByText(/week/i).textContent.split(" ")[1], 10);
        expect(updatedWeekNumber).toBe(initialWeekNumber + 1);
    });
});

