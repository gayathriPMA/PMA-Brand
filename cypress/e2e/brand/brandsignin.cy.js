describe('admin signin page', () => {
  it('Launch URL', () => {
    cy.visit('dev-app.pickmyad.com/auth')
    cy.get('#mat-select-value-1').click()
    cy.xpath('//span[normalize-space()="Brand"]').click()
    cy.wait(2000)
    cy.get('#mat-input-0').type('9999955555')
    cy.xpath('//p[@class="ng-star-inserted"]').click()
    cy.get('#mat-input-2').type('100512')
    cy.xpath('//p[@class="ng-star-inserted"]').click()

    //To check new url
    cy.url().should('eq', 'https://dev-app.pickmyad.com/brand/campaigns')
    //To check browser title
    cy.title().should('eq', 'Campaigns | PickMyAd')
    //To test Pickmyad logo
    cy.get('.logo-side > img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0); // Verify that the image has a width greater than zero
      });
    //To test site font family
    cy.get('body')
      .should('have.css', 'font-family')
      .and('contain', 'Figtree, sans-serif');
    //To check side nav bar present or not
    //To test side nav options
    cy.get('.platform-top')
      .find(':nth-child(1)')
      .filter(':contains("Dashboard"), :contains("Campaigns"), :contains("Settings")')
      .should('be.visible');

    cy.get('.platform-logout')
    //cy.xpath('//div[contains(text(),"Campaigns")]').should('be.visible')

  })
})


