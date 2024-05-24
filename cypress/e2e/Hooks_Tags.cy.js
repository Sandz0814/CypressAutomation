// before
// after
//beforeEach
//afterEach

describe('Hooks', function() {
    before('Before hook', function(){
        // I want to print " Hello po" before executing the test
        cy.log('Hello po')
    })
    
    after('After hook', function(){
        // I want to print " Good bye" after executing the test
        cy.log('Good bye')
    })

    beforeEach('beforeEach hook', function(){
        // I want to print " Hello world" in every test before executing
        cy.log('Hello world')
    })

    afterEach('beforeEach hook', function(){
        // I want to print " Good bye world" in every test after executing
        cy.log('Goodbye world')
    })


    
    it('Before', function() {

    })

    it('After', function() {

    })

    it('beforeEach', function() {

    })

    it('afterEach', function() {

    })
})
