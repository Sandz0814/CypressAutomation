import 'cypress-xpath';

describe('Handle dropdowns', () => {

    it.skip('Dropdown with select', () => {
    
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Nepal')
        .should('have.value', 'Nepal')
    })

    it.skip('Dropdown without select', () => {
    
        cy.visit('https://www.dummyticket.com/')
        cy.xpath("//a[contains(text(),'Buy Ticket')]").click()
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('japan').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Japan')
    })
    
    it.skip('Dropdown Auto Suggestion', () => {
    
        cy.visit('https://www.wikipedia.org/')
        cy.xpath("//input[@id='searchInput']").type('Japan')
        // cy.xpath("//input[@id='searchInput']").type('Japan').type('{enter}')
        cy.get('.suggestion-title').contains('Japan').click()
        cy.xpath("//span[@class='mw-page-title-main']").should('have.text', 'Japan')
        cy.url().should('eq', 'https://en.wikipedia.org/wiki/Japan')
        cy.title().should('eq', 'Japan - Wikipedia')

    })

    it('Dynamic suggestion Dropdown', () => {
    
        cy.visit('https://www.google.com/')
        cy.xpath("//textarea[@id='APjFqb']").type('Cypress Automation')
        cy.wait(2000)
        cy.get('div.wM6W7d>span').should('have.length', 13)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })
        cy.xpath("//textarea[@id='APjFqb']").should('have.value', 'cypress automation tutorial')

    })
    
})    

