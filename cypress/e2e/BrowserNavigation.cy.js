describe('How to navigate browser', ()=> {
    
    it('Navigation Go Back to Previous page', ()=> {
        cy.visit('https://demo.opencart.com/')
        // you can put assertion
        cy.title().should('eq', 'Your Store')

        cy.get(':nth-child(7) > .nav-link').click()
        cy.title().should('eq', 'Cameras')
        cy.get("div[id='content'] h2").should('have.text', 'Cameras')
        
        cy.wait(2000)

        // After clicking the camera link, were trying to go back arrow to previous page
        cy.go('back')
        cy.title().should('eq', 'Your Store')

        cy.wait(2000)

        // Going Back again to the Camera page now were going to automate the forward arrow
        cy.go('forward')
        cy.title().should('eq', 'Cameras')
        cy.get("div[id='content'] h2").should('have.text', 'Cameras')

        // Same as 'Back'
        cy.go(-1)
        cy.title().should('eq', 'Your Store')

        // Same as 'forward'
        cy.go(1)
        cy.title().should('eq', 'Cameras')
        cy.get("div[id='content'] h2").should('have.text', 'Cameras')


        // To reload the page
        cy.reload()




    })
})