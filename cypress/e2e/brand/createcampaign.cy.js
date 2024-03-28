describe('Sign In Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:7070/brand/signin/', { failOnStatusCode: false });
  });

  it('should successfully sign in with valid credentials and fill campaign information including TinyMCE editor', () => {
    // Sign in with valid credentials
    cy.get('#mat-input-0').type('9999955555');
    cy.get('.get-otp-btn').click();
    cy.get('#mat-input-1').type('100512');
    cy.get('.get-otp-btn').click();
    cy.get(':nth-child(2) > .card > .footer-info > .info-btn').click();
    cy.get('.find-btn').should('be.disabled')
    // Fill campaign information
    cy.get('#mat-input-2').type('Test Campaign');
    cy.wait(5000)

    // Interact with TinyMCE editor within the iframe
    const iframeSelector = '.tox-edit-area iframe';

    cy.get(iframeSelector).eq(0).should('be.visible').then($iframe => {
      const iframeDoc = $iframe.contents().find('body#tinymce');

      // Set content using TinyMCE's API
      cy.wrap(iframeDoc).invoke('html', 'Test objectives');
    });
      cy.get('.campagin-platforms').click();
      cy.get('#mat-option-3').click();
      cy.get('.campagin-ad-type').click();
      cy.get('#mat-option-4').click();
      cy.get('.ad-type-qty').click();
      cy.get('#mat-option-5').click();
      cy.get('.find-btn').should('be.enabled').click();
       
    
  });
});
