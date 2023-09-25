
describe('Brand signup', () => {

    it('Fill signup form', () => {
        cy.visit('https://dev-app.pickmyad.com/auth')
        cy.get('.have-btn').click()
        cy.get('#mat-select-value-1').click()
        cy.get('#mat-option-0').click()
        cy.get('#mat-input-0').click().type('Testauto')
        cy.get('#mat-input-3').click().type('Test')
        cy.get('#mat-input-1').click().type('surya@am.com')
        cy.get('#mat-input-2').click().type('6379567885')
        cy.get('#mat-select-value-3').click()
        cy.get('#mat-option-3').click()
        cy.get('.sign-in-btn').click()
        cy.pause()
        cy.wait(20000)
        cy.get('.verifybtn').click()
        cy.wait(20000)
        //should load the onboarding page and display the language component
        cy.url().should('include', '/stepper/language')
        // Verify the LanguageComponent is displayed
        cy.get('pma-web-language').should('be.visible')
        cy.get('#mat-input-0').click()
        cy.get('#mat-checkbox-1').click()
        cy.get('.onboard-scroll').click()
        cy.get('.mat-chip').should('be.visible')

        // Verify the PickMyAd logo is visible
        cy.get('.step-sub img').should('be.visible');
        //verify header
        cy.get('h1').should('have.text', 'Select your languages of communication')

        cy.get('.language-next').click()
        cy.url().should('include', '/stepper/category');
        // Verify the CategoryComponent is displayed
        cy.get('app-category').should('be.visible');
        cy.get('.language-option-button').first().click();
        cy.get('#mat-input-1').type('Tamil')
        cy.get('#mat-option-72').click()
        cy.get('.onboard-scroll').click()
        cy.get('.mat-chip').should('be.visible')

        // language component is step 1, and app-category is step 2
        cy.get('.stepper-body cdk-step').should('have.length', 2);

        //should navigate back to the language step using the "Back" button'
        cy.visit('/stepper/category');
        cy.get('.back-btn').click();
        cy.url().should('include', '/stepper/language');

        //should complete the onboarding and navigate back to the start
        cy.visit('/stepper/category');
        cy.get('.stepper.btn').click();
        cy.url().should('eq', Cypress.config().baseUrl); // Assuming the base URL is the start page

        // Verify that elements are visible and positioned correctly
        cy.get('.stepper-header').should('be.visible');
        cy.get('.stepper-body').scrollTo('bottom');
    })
})