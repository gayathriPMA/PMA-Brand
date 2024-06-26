// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// In your Cypress commands file (e.g., commands.js or index.js)
import 'cypress-iframe';

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
Cypress.Commands.add('login', () => {
    cy.visit('http://localhost:7070/brand/signin');
    cy.wait(2000);
    cy.get('#mat-input-0').type('9999955555');
    cy.get('.get-otp-btn').click();
    cy.get('#mat-input-1').type('100512');
    cy.get('.get-otp-btn').click();
    // Wait for the login process to complete
    cy.url().should('eq', 'http://localhost:7070/brand/home');
  });
  