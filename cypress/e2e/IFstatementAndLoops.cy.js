import 'cypress-xpath';

describe('Check UI elements', () => {


    it('Checking Check box', () => {
        cy.visit('http://test.rubywatir.com/ifelse.php?randno=3&noclicked=3')

        cy.get('form').should('have.length', 5)
        cy.xpath("//div[@id='buttonNumber']").should('be.visible').and('exist')
        
        cy.xpath("//div[@id='buttonNumber']").invoke('text').then((random) => {
            const submit1 = "//input[@name='1st']";
            const submit2 = "//input[@name='2nd']";
            const submit3 = "//input[@name='3rd']";
            const submit4 = "//input[@name='4th']";
            const submit5 = "//input[@name='5th']";

            switch (random) {
                case '1':
                    cy.xpath(submit1).click();
                    break;
                case '2':
                    cy.xpath(submit2).click();
                    break;
                case '3':
                    cy.xpath(submit3).click();
                    break;
                case '4':
                    cy.xpath(submit4).click();
                    break;
                case '5':
                    cy.xpath(submit5).click();
                    break;
                default:
                    cy.log("You clicked the wrong button");
            }
            cy.get('font').should('contain', 'You clicked the correct button')
        })
    })
})
