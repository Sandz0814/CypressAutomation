import 'cypress-xpath';
/// <reference types="Cypress" />

describe('Check UI elements', () => {

    it.skip('Checking radio button', () => {
        cy.visit('http://test.rubywatir.com/radios.php')
        cy.xpath("//input[@value='Radio1']").check()
        .should('be.checked')
        cy.wait(1000)
        cy.get('.radioclass').check().should('be.checked')
        cy.xpath("//input[@value='Radio1']").should('not.be.checked')
    })

    it.skip('Checking Check box wiht element', () => {
        cy.visit('http://test.rubywatir.com/checkboxes.php')
        cy.get('[value="football"]').then(($checkbox) => {
            if ($checkbox.prop('checked')) {
                // If checkbox is checked, uncheck it
                cy.get('[value="football"]').check();
            } else {
                // If checkbox is unchecked, check it
                cy.get('[value="football"]').check();
            }
        })
        cy.get('[value="football"]').should('be.checked')
        //cy.get('[value="football"]')
        //"//input[@value='soccer']"
    })
    it('Unchecking and checking all checkbox', () => {
        cy.visit('http://test.rubywatir.com/checkboxes.php')
        
        // Getting the checkbox block that contains 8 elements and uncheck all
        cy.xpath("//input[@type='checkbox']").check().should('be.checked')
        cy.wait(2000)
        // Getting the checkbox block that contains 8 elements and uncheck all
        cy.xpath("//input[@type='checkbox']").uncheck().should('not.be.checked')
        // checking the 1st checkbox
        cy.xpath("//input[@type='checkbox']").first().check().should('be.checked')
        // checking the last checkbox
        cy.xpath("//input[@type='checkbox']").last().check().should('be.checked')
    })

    
})
