describe('How to',()=>{
    it('basic test 1',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text',"Congratulations")

    })
    it('Basic test 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            headers:{
                Authorization : "Basic YWRtaW46YWRtaW4="
            }
        })
    })
})