describe('Dashboard Page', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('should perform deep testing of the home', () => {
      // Get the username dynamically
    cy.get('.dashboard-layout .header-info h3')
    .invoke('text')
    .then(username => {
      // Assert the greeting message with dynamic username
      cy.get('.dashboard-layout .header-info h3')
        .should('be.visible')
        .and('contain.text', `Hi ${username.trim()}👋`);
    });

  // Assert the additional information message
  cy.get('.dashboard-layout .header-info h6')
    .should('be.visible')
    .and('contain.text', 'Here’s what happening in your account');
      // cy.get('h3').should('be.visible')
      // cy.get('h6').should('be.visible')
      // cy.get('.card-container > :nth-child(1) > .card').should('be.visible')
      // cy.get(':nth-child(2) > .card').should('be.visible')
      // cy.get(':nth-child(3) > .card').should('be.visible')
      // cy.get('.recent-activity > :nth-child(1)').should('be.visible')
      // cy.get('.cards-layout > :nth-child(1)').should('be.visible')
      // cy.get('.cards-layout > :nth-child(2)').should('be.visible')
      // cy.get('.feature-influ > :nth-child(1)')
      // cy.get('.influencer-list > :nth-child(1)')
      // cy.get('.influencer-list > :nth-child(2)')
      // cy.get('.influencer-list > :nth-child(3)')
      // cy.get('.top-category > :nth-child(1)')
      // cy.get('.top-category > :nth-child(2) > p')
      // cy.get('.top-category > :nth-child(2) > p')

    });
  });
  