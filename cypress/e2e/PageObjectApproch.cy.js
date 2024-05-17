import { LoginPage } from '../CypressPageObject/LoginPageObject'; // Import Approach 1
import OpenApps from "../CypressPageObject/LoginPageObject"; // Import Approach 2
import OpenApps2 from "../CypressPageObject/LoginPageObject"; // Import Approach 3

// Benefits of This Approach:
// Modularity: Test code becomes modular and reusable, making it easier to maintain.
// Readability: Tests become more readable and self-explanatory.
// Separation of Concerns: Clear separation between test logic and page interactions.
// Ease of Maintenance: Changes to page structure can be localized to page objects, minimizing the impact on tests.

// Page object cannot run multiple import from POM


// Page Object Approach 1
describe('Page object approach 1', ()=>{

    it('Basic Approach', () => {
        cy.visit("https://www.saucedemo.com/");

        cy.get('[data-test="username"]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('[data-test="login-button"]').click();
    })

    it('POM Approach 1', ()=> {
        LoginPage.OpenApp();
        LoginPage.login('standard_user', 'secret_sauce');
    })

    it('POM Approach 2', ()=>{
        const lp = new OpenApps();
        lp.OpenPage();
        lp.setUserName('standard_user');
        lp.setPassword('secret_sauce');
        lp.clickSubmit();
    })

    it('POM Approach 3', ()=> {
        const ln = new OpenApps2();
        ln.OpenPageToLogin('standard_user','secret_sauce');
    })

    // Approach 4 Using Fixture
    it.only('POM using Data Driven', ()=>{
        
        
        cy.fixture('CreateUser').then(function(data){
            // need to create a variable to extract the specific data from the list -- Single data in a list no need to create variable
            let userdata = data[2]; // index 2 because valid data is in index number 2

            const ln = new OpenApps2();
            ln.OpenPageToLogin(userdata.username, userdata.password);
        })
    })
})

