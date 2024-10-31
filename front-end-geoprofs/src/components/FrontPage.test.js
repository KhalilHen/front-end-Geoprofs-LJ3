// FrontPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for additional matchers
import FrontPage from './FrontPage';

describe('FrontPage Component', () => {
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

        const dateInput = screen.getByRole('textbox', { name: /date/i });

        // TODO:
        // 1. Simulate changing the date to "2024-11-01" using `fireEvent.change`.
        // 2. Calculate the week number for this date using `moment('2024-11-01').isoWeek()`.
        // 3. Use `expect(...).toHaveTextContent(...)` to check that the displayed week number matches.
    });
});
