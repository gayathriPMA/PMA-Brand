describe('Add Influencer', () => {
    it('should successfully submit the form', () => {

        cy.visit('https://dev-app.pickmyad.com/auth')
        cy.get('#mat-select-value-1').click()
        cy.xpath('//span[normalize-space()="Brand"]').click()
        cy.wait(2000)
        cy.get('#mat-input-0').type('gayathri@pickmyad.com')
        cy.xpath('//p[@class="ng-star-inserted"]').click()
        cy.pause()
        //cy.get('#mat-input-2').type('100512')
        cy.get('.verifybtn > .mat-focus-indicator').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .platform').click()
        cy.get('.addInfluencer').click()
        // Fill out the form fields with valid data
        cy.get('[formControlName=email]').type('new@example.com');
        cy.get('[formControlName=whatsapp]').type('8867543211');
        cy.get('[formControlName=pan]')
        cy.get('[formControlName=gst]')
        cy.get('[formControlName=alternate_whatsapp]')
        cy.get('[formControlName=name]').type('John Doe');
        cy.get('[formControlName=username]').type('johndoe');
        cy.get('[formControlName=categories]').click();
        cy.get('#mat-option-37').click().type('Beauty') // Select some categories
        cy.get('#mat-select-0-panel').contains(' Beauty, cosmetic & personal care ').select()
        cy.get('[formControlName=address]').type('Tamilnadu');
        cy.get('[formControlName=age]').select('18-24');
        cy.get('[formControlName=host]').select('Host Option');
        cy.get('[formControlName=language]').select('English');
        cy.get('[formControlName=yt_url]').type('https://www.youtube.com/@TechnicalSuneja');
        cy.get('[formControlName=insta_url]').type('https://www.instagram.com/sunejaajayy/');

        // Submit the form
        cy.get('button[type=submit]').click();

        // Add assertions here to verify the successful submission behavior
    });
})
