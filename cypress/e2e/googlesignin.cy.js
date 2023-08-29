describe('Google Auth Sign-in', () => {
    it('should sign in with Google', () => {
      //it('Basic test 2',()=>{
        cy.visit('dev-app.pickmyad.com/auth/admin/login',{ failOnStatusCode: false },{
            headers:{
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4YzBmMWY4LTZmZmItNDI0My05NjQxLTQwZmZmNmZiMjIxNCIsIm5hbWUiOiJzYW50aG9zaEsiLCJlbWFpbCI6InNhbnRoMTY5MjAwMEBnbWFpbC5jb20iLCJpYXQiOjE2ODMwMDY0ODEsImV4cCI6MTY4NTU5ODQ4MX0.h5xPhUjWDrRaGK44kBOA44YX50T7iNH8jqrCfnbnwS8"
            }
       // })
    })
      cy.get('.google-btn').click()

      //cy.googleSignIn();
      // Add assertions or further actions after sign-in
    });
  });
  