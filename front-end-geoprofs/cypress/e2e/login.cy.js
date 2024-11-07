describe('Link Click Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  it('should navigate to the Calendar page when the link is clicked', () => {
    cy.get('#my-button').click();

    cy.url().should('include', '/Calander');
  });
});
