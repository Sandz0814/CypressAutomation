// LoginPage.js

// Approach 1
let userinput = '[data-test="username"]'
let passinput = '[data-test="password"]'
let btn = '[data-test="login-button"]' 

//let username = 'standard_user'
//let password = 'secret_sauce'


// Approach 1 -- This Approach can handle multiple Imports
export const LoginPage = {

    OpenApp() {
        cy.visit('https://www.saucedemo.com/');
    },

    login(username, password) {
        cy.get(userinput).type(username);
        cy.get(passinput).type(password);
        cy.get(btn).click();
    }
};

// Approach 2 -- Single Import
class OpenApps
{
    OpenPage()
    {
        cy.visit('https://www.saucedemo.com/');  
    }
    setUserName(username)
    {
        cy.get(userinput).type(username);
    }
    setPassword(password)
    {
        cy.get(passinput).type(password);    
    }
    clickSubmit()
    {
        cy.get(btn).click();  
    }
}

// export default OpenApps;


// Approach 3 --- Single Import
class OpenApps2
{
    userinput = '[data-test="username"]'
    passinput = '[data-test="password"]'
    btn = '[data-test="login-button"]' 
    
    OpenPageToLogin(usrname, passwrd)
    {
        cy.visit('https://www.saucedemo.com/');
        cy.get(this.userinput).type(usrname);
        cy.get(this.passinput).type(passwrd);
        cy.get(this.btn).click();
    }
}
export default OpenApps2;




