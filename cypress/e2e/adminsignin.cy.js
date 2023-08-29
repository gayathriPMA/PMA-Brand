describe('Signin Page', () => {

  //Launch URL
  it('Launch URL', () => {
    cy.visit('dev-app.pickmyad.com/auth/admin/login', { failOnStatusCode: false });
    cy.wait(2000)

    cy.get('.google-btn').click()
    cy.wait(2000)
    cy.origin("https://accounts.google.com/v3/signin/", () => {
      cy.visit('/', {
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'axios/0.27.2'
        }
    });
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err,runnable);
        return false;
      })
      // cy.get('#identifierId').type('cherath@amwhiz.com')
      // cy.get('.VfPpkd-vQzf8d').contains('Next').click()
      // cy.wait(5000)
      // //cy.get('input[name="password"]').type('Parimale')
      // cy.get('body').type('cherath@123')
      // cy.get('.VfPpkd-vQzf8d').contains('Next').click()
      // cy.url().should('include', '/home')

    })
  })

})

