// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//https://docs.cypress.io/api/commands


// Custom command for Iframe
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get("iframe")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
    
})

// Command for clicking the links
Cypress.Commands.add('clicklink', function(label){
    cy.get('a').contains(label).click()
})

/* // Over write contains to disregard key sensitivity of cases
Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) => {
    if (typeof text === 'object') {
        options = text;
        text = filter;
        filter = undefined;
    }

    options.matchCase = false;

    return originalFn(subject, filter, text, options)

}); */


// Overwriting existing command of scrollintoview
Cypress.Commands.add('scroll', (el) => {
    cy.get(el).scrollIntoView({ duration: 1000 });
});

Cypress.Commands.add('scroll', (selector) => {
    if (typeof selector !== 'string') {
        throw new Error('Selector must be a string');
    }
    cy.get(selector).scrollIntoView({ duration: 2000 });
});

// Custom command for login
Cypress.Commands.add('LogingIn', () => {
    // Visit the specified site
    cy.visit('https://www.saucedemo.com/');

    // Load user credentials from fixture
    let userdata;
    cy.fixture('CreateUser').then(function(data) {
        userdata = data[2]
        // Type the username and password into the input fields
        cy.get("#user-name").type(userdata.username);
        cy.get("#password").type(userdata.password);

        // Click the login button
        cy.get("#login-button").click();
    });
});
















   