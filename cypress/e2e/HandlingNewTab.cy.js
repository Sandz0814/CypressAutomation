import 'cypress-xpath';

describe('Handling NewTabs', ()=> {

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
    });

    it('Handle new tab Approch 1', () => {
        // Removing the target to Href attribute to be able to show new tab in the same window
        // Because cyress cannot perform action in new tab
        cy.get(".example >a").invoke('removeAttr', 'target').click();
        cy.get("div[class='example'] h3").should('have.text', 'New Window')
        cy.title().should('include', 'New Window')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)

        // Going Back to the Parent Tab
        cy.go('back');
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows');
    })

    it('Handle new tab Approch 2', () => {
        // Getting the Link properties
        // Because cyress cannot perform action in new tab
        cy.get(".example >a").then((newtab)=> {
            let url = newtab.prop('href');
            cy.visit(url);

        })
        cy.get("div[class='example'] h3").should('have.text', 'New Window')
        cy.title().should('include', 'New Window')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)

        // Going Back to the Parent Tab
        cy.go('back');
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows');
    })


})

