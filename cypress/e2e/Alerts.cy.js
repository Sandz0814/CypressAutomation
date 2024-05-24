describe('Handling Alerts', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
    });
    // Javascript Alert: It will have some text and an OK button
    it('Javascript alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").should('be.visible').and('exist').click()

        // on the window alert
        cy.on('window:alert', (Alert) => {
            expect(Alert).to.contains('I am a JS Alert')
        })
        // Alert window automatically close by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')    
    })

    // Javascript confirm Alert: It will have some text and an OK button and Cancel buttons
    it('Javascript Confirm alert OK', function () {
        // URL launched
        //cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // other syntax for cancel alert
        
       //fire confirm browser event
        cy.on("window:confirm", () => {
           return true;
        // cy.on("window:confirm", ()=> false)   
        });
        // click on Click for JS Confirm button
        cy.get(':nth-child(2) > button').click().should('be.visible').and('exist')
        // verify application message on Cancel button click
        cy.get('#result').should('have.text', 'You clicked: Ok')  
    })

    // Javascript confirm Alert: It will have some text and an OK button and Cancel buttons
    it('Javascript Confirm alert CANCEL', function () {
        // URL launched
        //cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //fire confirm browser event
        cy.on("window:confirm", () => {
           return false;
        });
        // click on Click for JS Confirm button
        cy.get(':nth-child(2) > button').click().should('be.visible').and('exist')
        // verify application message on Cancel button click
        cy.get('#result').should('have.text', 'You clicked: Cancel')
     });

     it('Javascript with prompt OK BUTTON', () => {
        // Intercept the window:prompt event and return the desired response
        cy.window().then((win) => {
            
            cy.stub(win, 'prompt').returns("I'm Sandro the Pogi");
        });
    
        // Click the button that triggers the prompt
        cy.get(':nth-child(3) > button').click();
    
        // Assert that the result contains the expected text
        cy.get('#result').should('be.visible').and('contain', "I'm Sandro the Pogi");
    });

    it('Javascript with prompt  CANCEL BUTTONL', function () {
        //cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //fire confirm browser event
        cy.window().then(win=> {
            cy.stub(win, 'prompt').callsFake(() => null);
            
        });
        // click on Click for JS Prompt button
        cy.get(':nth-child(3) > button').click().should('be.visible').and('exist')
        // verify application message on Cancel button click
        cy.get('#result').should('have.text', 'You entered: null')
     });

     it('Authentication Alert', ()=> {
        // 1st Approach
        /* cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:{username:"admin", password:"admin"}})
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')*/

        // 2nd Approach
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

    })
  }); 
    
