import 'cypress-xpath';


 // instead of using the actual syntax you can create a custom command - command was set up in command.js
describe(' Test using Custom Commands', function() {
    

    it('Custom command for click Link', ()=>{

        cy.visit('https://demo.nopcommerce.com/')
        // cy.xpath("//a[normalize-space()='Apple MacBook Pro 13-inch']").scrollIntoView({duration:2000})
        // This command was already overwritten the original command is in the top
        cy.scroll("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
       
        cy.clicklink('Apple MacBook Pro 13-inch')
        
        // cy.get('[data-pictureid="24"] > img').scrollIntoView({duration:2000})
        // This command was already overwritten the original command is in the top
        cy.scroll('[data-pictureid="24"] > img')

        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch')
        cy.wait(5000)
        
    })

    it('Custom Command for login', ()=> {
        cy.LogingIn()
        
    })

})