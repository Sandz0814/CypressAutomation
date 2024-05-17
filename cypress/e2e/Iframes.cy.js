import 'cypress-xpath';
import 'cypress-iframe'


describe('Handling Iframes', ()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress
        // inside the cy.origin() method from failing the test
        return false
      })


    it('Approcah 1', ()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        
        const iframe = cy.xpath("//iframe[@id='mce_0_ifr']")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type('Sandro Pogi {ctrl+a}'); // Making the text bold
            cy.get('[aria-label="Bold"]').click()

    })
    // Custom command making a function that store in command.js
    it('Approcah 2 using custom command', ()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        
        cy.getIframe('#mce_0_ifr')

            .clear().type('Sandro Pogi {ctrl+a}'); // Making the text bold
            cy.get('[aria-label="Bold"]').click()

    })
        // Using Plugins  -- npm install -D cypress-iframe
    it('Approcah 3 Using Cypress Plugins', ()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        
        cy.frameLoaded('#mce_0_ifr') // loading the frame

        cy.iframe('#mce_0_ifr')
            .clear().type('Sandro Pogi {ctrl+a}'); // Making the text bold
            
            cy.get('[aria-label="Bold"]').click()

    })
    

})