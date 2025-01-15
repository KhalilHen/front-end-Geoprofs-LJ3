describe('Link Click Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  it('should navigate to the Calendar page when the link is clicked', () => {
    cy.get('#email-input').click().type('khalil@hotmail.com');
    cy.get('#password-input').click().type('test');

    cy.get('#login-button').click();

    cy.url().should('include', '/front-page');
  });
});
