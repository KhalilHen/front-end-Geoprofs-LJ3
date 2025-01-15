describe("Logout user", () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/front-page');
    });

    it('should log out the user', () => {
        // Click the profile image first
        cy.get('#profileButton').click();
        // Click the logout button in the pop-up
        cy.get('#logoutButton').click();

        // Check if the user is redirected to the landing page
        cy.url().should('eq', 'http://localhost:5173/');
    });
});
