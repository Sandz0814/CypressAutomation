describe('Capture Screenshot and Videos', ()=> {
    it('How to Screenshot', ()=> {

        // Screenshot the whole homepage
        cy.visit('https://demo.opencart.com/').screenshot('Homepage');

        // Screenshot the spedific element
        cy.get("img[alt='iPhone 6']").screenshot('Item Phone');

    });

    // It Only Run when executing on Terminal 
    it('How to Screenshot and video on failed test', ()=> {

       cy.visit('https://demo.opencart.com/');

       cy.get(':nth-child(7) > .nav-link').click()
       .should('have.text', 'Tablet');

    });
});