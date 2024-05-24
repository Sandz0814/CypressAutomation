import '@4tw/cypress-drag-drop'
require ('@4tw/cypress-drag-drop')
import 'cypress-iframe'
import 'cypress-xpath';

describe('Mouse Event Hover', function() {
    
    // beforeEach('Landing Page', function() {
        
    it('How to hover to Element', function() {
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').click()
        cy.get('h2').should('have.text', 'PC')
        cy.title().should('eq', 'PC')

    })    
        
    it(' How to execute right click', function() {
        
        // 1st Approarch
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        /* cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        cy.get('.context-menu-icon-edit > span').should('be.visible')
        */

        // 2nd Approach
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get('.context-menu-icon-edit > span').should('be.visible')

    })

    it('How to execute Double click', function() {
        cy.visit('https://demoqa.com/buttons')
        
        // Approach 1 using direct dblclick() method
        cy.get("#doubleClickBtn").dblclick();
        cy.get("#doubleClickMessage").should('have.text', 'You have done a double click')
        

        // Approach 2 Using Trigger Method
        /*cy.get("#doubleClickBtn").trigger('dblclick')
        cy.get("#doubleClickMessage").should('have.text', 'You have done a double click')
        */
    })

    it('Drag and Drop in Iframe and covered by another element:', function() {
        // Visit the page
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/');
    
        
        let iframes = "div[class='single_tab_div resp-tab-content resp-tab-content-active'] iframe[class='demo-frame lazyloaded']"
        let elementToDrop = "li:nth-child(1)"
        let elementTrash = "#trash"
        
        // Process to Load and switch to Iframe
        cy.frameLoaded(iframes);

        // This is the Drag and Drop process
        
        /* We added .scrollIntoView() before performing
         the drag and drop action. This ensures that the
          draggable element and the drop target are within 
          the viewport, which may resolve the issue of elements
           being covered by another element. */
        
        // { force: true } to passed the covered by other element 
        cy.iframe(iframes).then(iframe => {
            cy.wrap(iframe.find(elementToDrop)).should('be.visible').scrollIntoView().drag(iframe.find(elementTrash), { force: true });
        });
    });

    it('How to Scroll the Page', function() {
        cy.visit('https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/')

        // Scroll to the bottom of the page slowly
        // cy.scrollTo('bottom', { duration: 2000 }); // Adjust the duration as needed
        // cy.scrollTo('bottom');
        cy.get("#example2").scrollIntoView({duration:2000})
        cy.wait(1000)
        cy.get("a[href='/world-population/malta-population/']").scrollIntoView({duration:2000})
        cy.wait(1000)
        cy.get("a[href='/world-population/finland-population/']").scrollIntoView({duration:2000})
        cy.wait(1000)
        cy.get("a[href='/world-population/turkey-population/']").scrollIntoView({duration:2000})
        })
        




    })


   
