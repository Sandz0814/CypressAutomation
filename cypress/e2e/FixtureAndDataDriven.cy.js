describe('Fixture for Data Driven', function() {

    beforeEach('Login', function(){
        cy.visit("https://www.saucedemo.com/");
        cy.log("Begin Test")
    })

    afterEach('Login', function(){
        cy.log("End of Testing")
    })
    
    let userdata;
    beforeEach('Hooks',function() {
        cy.fixture('CreateUser').then(function(data){
            userdata = data;

        })
    });   

    // Need to index the the fixture  to run -- 'userdata = data[2]'
    // Direct access passing the data from Creation.json file.
    it.skip('Direct access to data', function(){

        cy.fixture('CreateUser').then(function(data) {
        
        cy.get('[data-test="username"]').type(data.username).should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type(data.password).should('have.value', 'secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('have.text', data.expected).and('exist')
        
        
        })
    })

    
     // Need to index the the fixture  to run -- 'userdata = data[2]'
    // Accessing data in hooks
    it.skip('Access data thru hooks', function(){

        cy.get('[data-test="username"]').type(userdata.username).should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type(userdata.password).should('have.value', 'secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('have.text', userdata.expected).and('exist')

    })
        // Positive and Negative testing using Hooks
    it('Login with multiple credentials Approcah 1', function() {
        userdata.forEach(function(data) {
            cy.get('[data-test="username"]').clear().type(data.username);
            cy.get('[data-test="password"]').clear().type(data.password);
            cy.get('[data-test="login-button"]').click();

            if (data.expected !== 'Products') {
                 // Assert login failure
                 cy.get("h3[data-test='error']").should('be.visible').and('contain', 'Epic sadface');
                 cy.log("Login failed")
               
            } else {
               
                 // Assert login success
                 cy.get('.title').should('contain', 'Product');
                 cy.log("Login in Successful")
            }

            
        });
    });

         // Positive and Negative testing using Hooks
    it('Login with multiple credentials Approcah 2', function() {
        userdata.forEach(function(data) {
            cy.get('[data-test="username"]').clear().type(data.username);
            cy.get('[data-test="password"]').clear().type(data.password);
            cy.get('[data-test="login-button"]').click();

            if (data.username == 'standard_user' && data.password == 'secret_sauce') {
                 
                 cy.get('.title').should('have.text', 'Products');
                 cy.log("Login in Successful")
                 
               
            } else {
               
                 cy.get("h3[data-test='error']").should('be.visible').and('contain', 'Epic sadface');
                 cy.log("Login failed")
                 
            }

            
        });
    });
})


