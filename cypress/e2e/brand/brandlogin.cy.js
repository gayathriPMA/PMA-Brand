describe('Signin Page', () => {
    // beforeEach(() => {
    //     cy.wait(5000); // Wait for 1 second before each command execution
    // });
    //Launch URL
    it('Launch URL', () => {

        // cy.viewport(375, 667); // Sets the viewport size to an iPhone 6/7/8 resolution

        cy.visit('http://localhost:7070/brand/signin')
        cy.get('#mat-select-value-1').click()
        cy.xpath('//span[normalize-space()="Brand"]').click()
        cy.wait(2000)
        cy.get('#mat-input-0').type('9999955555')
        cy.xpath('//p[@class="ng-star-inserted"]').click()
        cy.get('#mat-input-2').type('100512')
        cy.xpath('//p[@class="ng-star-inserted"]').click()
        cy.wait(2000)
        // cy.eyesCheckWindow('https://dev-app.pickmyad.com/auth'); // Captures a screenshot of the viewport and sends it for comparison with a baseline image

        //Campaign table view
        cy.get('.table-layout')
            .find('th')
            .should('have.length', 7)
            .each((header, index) => {
                const expectedHeaders = [
                    'Campaign Name',
                    'Progression Status',
                    'Budget',
                    'Last Modified',
                    'Campaign Status',
                    'Payment Status',
                    'Action',
                ];

                cy.wrap(header).should('have.text', expectedHeaders[index]);
            });

        cy.get('.table-layout')
            .find('tr')
            .should('have.length', 51);
        cy.get('.table-layout')
            .find('tr')
            .eq(1) // Replace rowIndex with the index of the row you want to target
            .find('td')
            .eq(3) // Replace cellIndex with the index of the cell you want to target

            .invoke('text')
            .should('eq', ' Aug 29, 2023 3:20 PM by PickmyadTest');





        // //Create campaign
        // cy.visit('https://dev-app.pickmyad.com/brand/campaigns/create', { failOnStatusCode: false })
        // cy.get('#mat-input-0').type('Camp123')
        // cy.get('#mat-input-1').type('gayathri')
        // cy.get('.brand-name')

    })

})

