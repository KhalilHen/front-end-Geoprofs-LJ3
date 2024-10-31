// FrontPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FrontPage from './FrontPage';

describe('FrontPage Component', () => {
    test('renders the component with default elements', () => {
        render(<FrontPage />);

        // TODO:
        // 1. Use `screen.getByText` to check if the week display (e.g., "week") is present.
        expect(screen.getByText("week")).toBeInTheDocument();
        // 2. Use `screen.getByText` to check if the "Vorige Week" button is present.
        expect(screen.getByText("Vorige Week")).toBeInTheDocument();
        // 3. Use `screen.getByText` to check if the "Volgende Week" button is present.
        expect(screen.getByText("Volgende Week")).toBeInTheDocument();
        // 4. Use `screen.getByRole` to check if the date input element (type="date") is present.
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
