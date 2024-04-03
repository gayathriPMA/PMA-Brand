describe('Sign In Page', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should successfully sign in with valid credentials and fill campaign information', () => {
    cy.get(':nth-child(2) > .card > .footer-info > .info-btn').click();
    cy.get('.find-btn').should('be.disabled');

    // Fill campaign information
    cy.get('#mat-input-2').type('Test Campaign').tab()
    cy.get('#mat-input-3').type('5000')
    
    cy.wait(10000).tab()

    // Interact with TinyMCE editor within the pma-web-reuse-text-editor component
    cy.get('.signup-v3-input.bio-v3.campaign-bio-v3 iframe').eq(0).should('be.visible').then(($iframe) => {
      cy.wait(10000)
      // Wait for the iframe's body to be ready
      cy.wrap($iframe).its('0.contentDocument').should('exist').then((doc) => {
        cy.wait(10000)
        return cy.wrap(doc.body);
        cy.wait(10000)
      }).then(($body) => {
        cy.wait(10000)
        // Once the iframe's body is ready, set the HTML content
        const multiLineText = `Line 1 cy.wait(10000)<br>Line 2 cy.wait(10000)<br>Line 3cy.wait(10000)`;
        cy.wait(10000)
        cy.wrap($body).invoke('html', multiLineText).then(() => {
          cy.wait(10000)
          // Focus on the iframe body
          cy.wrap($body).focus().tab();
        });
      });
    });
    

    // Click on the form or any other element after filling objectives
    cy.get('.campagin-platforms').click();
    cy.get('#mat-option-3').click();
    cy.get('.campagin-ad-type').click();
    cy.get('#mat-option-4').click();
    cy.get('.ad-type-qty').click();
    cy.get('#mat-option-5').click();
    cy.get('.find-btn').should('be.enabled').click();
    //Checking redirect URL
    cy.url().should('include', 'http://localhost:7070/brand/discover?createEditCampaign=true');
    //Add Influencer into campaign
    cy.get('#autoCompleteInput').type('anushka');
    cy.wait(2000);
    cy.get('.user-info > .mat-tooltip-trigger').should('contain', 'anushka');
    cy.get('.add-influ > .mat-focus-indicator').click()
    cy.get('.create-campaign').click()
    cy.get('add-platform-popup welcome-dialog').should('exist')

    


  });
});
