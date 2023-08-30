describe('Signin Page', () => {
    beforeEach(() => {
        cy.wait(10000); // Wait for 1 second before each command execution
    });
    //Launch URL
    it('Launch URL', () => {


        cy.visit('https://dev-app.pickmyad.com/auth/admin/login', { failOnStatusCode: false })
        cy.get('.google-btn').invoke('css', 'font-size').should('eq', '14px'); 
        cy.get('.google-btn').should('have.css', 'font-family', 'Figtree, sans-serif');
        cy.get('.google-btn').click()
        cy.origin("https://accounts.google.com/o/oauth2/v2/auth/", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            })
            cy.get('#identifierId').type('gayathri@pickmyad.com')
            cy.get('.VfPpkd-vQzf8d').contains('Next').click()
            cy.wait(5000)
            cy.get('body').type('Sajith!0708')
            cy.get('.VfPpkd-vQzf8d').contains('Next').click()
            cy.wait(10000)

        })
        //Campaign table view
        cy.get('.table-layout').should('exist');
        cy.get('.table-layout')
            .find('th')
            .should('have'
            , 7)
            // .each((header, index) => {
            //     cy.wrap(header)
            //         .should('have', [
            //             'brand_name',
            //             'name',
            //             'progression_status',
            //             'budget',
            //             'updated_at',
            //             'status',
            //             'action',
            //         ]);
            // });

        cy.get('.table-layout')
            .find('tr')
            .should('have.length', 51);
        cy.get('.table-layout')
            .find('tr')
            .eq(1) // Replace rowIndex with the index of the row you want to target
            .find('td')
            .eq(3) // Replace cellIndex with the index of the cell you want to target

            .invoke('text')
            .should('eq', 'Budget');





        // //Create campaign
        // cy.visit('https://dev-app.pickmyad.com/brand/campaigns/create', { failOnStatusCode: false })
        // cy.get('#mat-input-0').type('Camp123')
        // cy.get('#mat-input-1').type('gayathri')
        // cy.get('.brand-name')

    })

})

