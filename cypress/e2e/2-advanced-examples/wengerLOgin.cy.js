/// <reference types="cypress" />
describe('Login', () => {
    it('login into application', () => {
      cy.visit('https://dev.44ti.me/#/login');
      cy.get("[type='email']").type('pradip.patil@pratititech.com');
      cy.get("[type='password']").type('Demo@1234');
      cy.get("[type='button']").click({ multiple: true })
     // cy.get("[type='button']").click({ multiple: true })
      cy.get(".MuiButton-endIcon > img").click();
    })
})
   


