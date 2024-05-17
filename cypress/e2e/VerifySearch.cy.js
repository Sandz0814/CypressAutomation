import 'cypress-xpath';

describe('Login, Search, and Cart', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('Verify Login', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('Verify Search', () => {
        // Define the XPath of expected items for each filter
        const expectedItems = {
            'az': "//div[normalize-space()='Sauce Labs Backpack']",
            'za': "//div[normalize-space()='Test.allTheThings() T-Shirt (Red)']",
            'lohi': "//div[normalize-space()='Sauce Labs Onesie']",
            'hilo': "//div[normalize-space()='Sauce Labs Fleece Jacket']"
        };

        // verifying filter function and asserting the item being filtered
        const filter = ['az', 'za', 'lohi', 'hilo'];
        filter.forEach((item) => {
            // Select filter item
            cy.get('select').select(item);
            cy.get('select').should('have.value', item);

            // Assert the presence of expected item
            cy.xpath(expectedItems[item]).should('be.visible');
        });
    });

    it('Verify Cart Icon', () => {
        // Wait for the cart icon to be visible
        cy.xpath("//a[@class='shopping_cart_link']").should('be.visible').click();

        // Assert the title of the cart page
        cy.get('[data-test="title"]').should('have.text', 'Your Cart');
    });    

});
