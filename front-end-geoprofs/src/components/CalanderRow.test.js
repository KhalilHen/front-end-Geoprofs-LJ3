import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Add fireEvent here
import '@testing-library/jest-dom';
import moment from 'moment';
import FrontPage from './FrontPage';


describe('Calendar Component - Date Formatting', () => {
        test('displays formatted dates for each day in the selected week in dutch', () => {
        render(<FrontPage />);

        const dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

        dagen.forEach((dag, index) => {
            const dayCells = screen.getAllByText((_, element) => {
                const hasDayName = element.textContent.includes(dag);
                const datePattern = /\d{2}-\d{2}/;
                const hasFormattedDate = datePattern.test(element.textContent);
                return hasDayName && hasFormattedDate;
            });

            expect(dayCells.length).toBeGreaterThan(0);

            dayCells.forEach(cell => expect(cell).toBeInTheDocument());
        });



    });
});