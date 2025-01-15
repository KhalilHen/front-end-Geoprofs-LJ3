import moment from 'moment';

describe('Date Selection and Display Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/front-page');
    });

    it('should select a date and display the corresponding week dates correctly', () => {
        // Step 1: Select a specific date in the date input field (e.g., 2023-10-15)
        cy.get('.datepicker input[type="date"]')
            .clear()
            .type('2023-10-15');  

        // Give the component time to update
        cy.wait(500);

        // Step 2: Verify that the week dates are displayed correctly

        const expectedDates = [
            '09-10',
            '10-10',
            '11-10',
            '12-10',
            '13-10',
            '14-10',
            '15-10',
        ];

        expectedDates.forEach((date, index) => {
            cy.get('table tr td')
                .eq(index)
                .find('div.text-2s')
                .should('contain', date);
        });
    });

    it('should display the previous week when "Vorige Week" is clicked', () => {
        // First, get the initial date
        cy.get('.datepicker input[type="date"]')
            .invoke('val')
            .then((initialDate) => {
                cy.contains('button', 'Vorige Week').click();

                cy.wait(500);

                cy.get('.datepicker input[type="date"]')
                    .should('have.value', moment(initialDate).subtract(7, 'days').format('YYYY-MM-DD'));
            });
    });

    it('should display the next week when "Volgende Week" is clicked', () => {
        cy.get('.datepicker input[type="date"]')
            .invoke('val')
            .then((initialDate) => {

                cy.get('#nextWeekButton').click();

                cy.wait(500);

                cy.get('.datepicker input[type="date"]')
                    .should('have.value', moment(initialDate).add(7, 'days').format('YYYY-MM-DD'));
            });
    });
});