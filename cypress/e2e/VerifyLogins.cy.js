import 'cypress-xpath';


describe('Login', () => {
    it('Verify Login', () => {
        cy.visit("https://www.saucedemo.com/");

        cy.get('[data-test="username"]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('[data-test="login-button"]').click();

        let expName = 'Swag Labs';

        cy.get('.app_logo').then((x) => {
            let actualName = x.text();
            expect(actualName).to.equal(expName);
            assert(actualName, expName);

            // Define the XPath of expected items for each filter
            let backpack = "//div[normalize-space()='Sauce Labs Backpack']"
            let redShirt = "//div[normalize-space()='Test.allTheThings() T-Shirt (Red)']"
            let Onesie = "//div[normalize-space()='Sauce Labs Onesie']"
            let FleeceJacket = "//div[normalize-space()='Sauce Labs Fleece Jacket']"


            const expectedItems = {
                'az': backpack,
                'za': redShirt,
                'lohi': Onesie,
                'hilo': FleeceJacket
            };
            
            // verifying filter function and asserting the item being filtered
            const filter = ['az', 'za', 'lohi', 'hilo'];
            filter.forEach((item) => {
                // Select filter item
                cy.get('select').select(item);
                cy.wait(1000);
                cy.get('select').should('have.value', item);

                // Assert the presence of expected item
                cy.xpath(expectedItems[item]).should('be.visible');
        
        // Verifying if the cart logo is visible
        cy.xpath("//a[@class='shopping_cart_link']").should('be.visible').and('exist')

        let twitter = "//li[@class='social_twitter']"
        let facebook = "//li[@class='social_facebook']"
        let linkedin = "//li[@class='social_linkedin']"

        let x = "//*[name()='path' and contains(@d,'M18.244 2.')]"
        let fb = "//img[@data-imgperflogname='profileCoverPhoto']"
        let linkdn = "//img[@id='ember32']"
                
    
        

    });
           
        });
    });
});
