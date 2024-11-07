// cypress/integration/datePickerTest.js

describe('Date Selection and Display Test', () => {
  beforeEach(() => {

    cy.visit('http://localhost:5173/calander');
  });

  it('should select a date and display the corresponding week dates correctly', () => {
    // Step 1: Select a specific date in the date input field (e.g., 2023-10-15)
    cy.get('.datepicker input[type="date"]').clear().type('2023-10-15');

    // Step 2: Verify that the week dates are displayed correctly
    // For the week of 2023-10-15, we expect the dates for Monday to Sunday
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
      // Check each cell's text content to match expected dates
      cy.get(
        `table tr td:nth-child(${index + 1}) .h-1\\/2.w-full.text-2s`
      ).should('contain', date);
    });
  });




  it('should display the previous week when "Vorige Week" is clicked', () => {
    // Get today's date and calculate the date of last week

    const today = new Date();
    const lastWeekDate = new Date(today);
    lastWeekDate.setDate(today.getDate() - 7);

    cy.wait(2000);
    // Format last week's date in YYYY-MM-DD format
    const lastWeekFormatted = lastWeekDate.toISOString().split('T')[0];

    // Check if initial date is set correctly
    cy.get('#lastWeekButton').should(
      'have.value',
      today.toISOString().split('T')[0]
    );
    -(
      cy.contains('button', 'Vorige Week').click()
    );

    // Verify that the date input updates to last week's date
    cy.get('#lastWeekButton').should('have.value', lastWeekFormatted);

    cy.wait(2000);
  });

  it('should display the next week when "Volgende Week" is clicked', () => {
    // Get today's date and calculate the date of next week
    const today = new Date();
    const nextWeekDate = new Date(today);
    nextWeekDate.setDate(today.getDate() + 7);

    const nextWeekFormatted = nextWeekDate.toISOString().split('T')[0];
    cy.wait(2000);

    // Check if initial date is set correctly
    cy.get('#lastWeekButton').should(
      'have.value',
      today.toISOString().split('T')[0]
    );

    cy.get('#nextWeekButton').click();

    cy.wait(2000);

    cy.get('#lastWeekButton').should('have.value', nextWeekFormatted);
  });
});
