// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe("Leave requests", () => {
  it("Log in", () => {
    cy.visit('http://localhost:5173/');
    
    cy.get('input[id="LoginEmail"]').should("be.visible").type("1");
    cy.get('input[id="LoginPassword"]').should("be.visible").type("password1");
    cy.get('button[id="LoginButton"]').should("be.visible").click();
    cy.url().should('eq', 'http://localhost:5173/front-page')

    cy.get('a[href*="/leave-request"]').click();
    cy.get('button[id="SubmitLeaveRequestButton"]').should("be.visible").click();
  });
});