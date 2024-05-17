import 'cypress-xpath';

// Alternatively, if you are using CommonJS syntax:
// require('cypress-xpath');

describe('landingPage', () => {
  
  // Verifiying the Page Title
  it('Verify Title', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.title().should('eq', 'Swag Labs')
  })
  
  // Verifiying the Url 
  it('Verify Url', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
    .and('include', 'saucedemo.com')
    .and('contain', 'saucedemo')
  })

  it('Verify Landing Page content', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('.login_logo').should('be.visible').and('exist')

    // npm install -D cypress-xpath - need to install and import to use xpath

    cy.xpath("//a").should('have.length', '0')
    
  })
})





