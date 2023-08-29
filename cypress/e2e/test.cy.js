describe('Google Auth Sign-in', () => {
    it('should sign in with Google', () => {
        cy.visit('dev-app.pickmyad.com/auth/admin/login', { failOnStatusCode: false })
        cy.get('.google-btn').click()
        cy.wait(2000)
        cy.origin("https://accounts.google.com/v3/signin/", () => {

        headers:{
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4YzBmMWY4LTZmZmItNDI0My05NjQxLTQwZmZmNmZiMjIxNCIsIm5hbWUiOiJzYW50aG9zaEsiLCJlbWFpbCI6InNhbnRoMTY5MjAwMEBnbWFpbC5jb20iLCJpYXQiOjE2ODMwMDY0ODEsImV4cCI6MTY4NTU5ODQ4MX0.h5xPhUjWDrRaGK44kBOA44YX50T7iNH8jqrCfnbnwS8"
        }
    });
});

})

