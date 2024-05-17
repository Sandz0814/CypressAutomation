describe('Handling Tables', ()=> {

    beforeEach('Login', ()=> {
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get("#input-username").type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()
    })
    it('Check number and row and column', ()=> {

        // Asserting the number of row in table pagination
        cy.get('.table.table-bordered.table-hover >tbody>tr')
        .should('have.length', '10')

        // Asserting the number of column in the table
        cy.get(".table.table-bordered.table-hover >thead>tr>td")
        .should('have.length', '7')
    })

    it('Checking the data form row and column', ()=> {

        // cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)')
        cy.get("tbody tr:nth-child(5) td:nth-child(3)")
        .contains('gorankrezic90@gmail.com')
    })

    it('How to read all column and rows in the 1st page and printing it', ()=> {
        
        cy.get(".table.table-bordered.table-hover>tbody>tr")
        .each(($row, index, $rows) =>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols)=> {
                    cy.log($col.text());

                })

            })

        })    
    })

    // find the total number of pages
    it.only('How to Handle the pagination', function() {
        let totalPages;
        cy.get(".col-sm-6.text-end").then( (e)=> {
            let mytext = e.text(); // Showing 1 to 10 of 20209 (2021 Pages)
            totalPages = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("Pages") - 1)
            cy.log("Total number of pages in the table are: "+totalPages);

        // click 5 pages only

        let clickPages = 5;

        for(let p=1;p<=clickPages; p++)
            {
              if(clickPages>1) {
                cy.log('Active Pages are:' + p)

                cy.get(".pagination>li:nth-child("+p+")").click()
                cy.wait(3000)
                cy.get(".table.table-bordered.table-hover>tbody>tr")
                .each(($row, index, $rows) =>{
                    cy.wrap($row).within( ()=>{
                    cy.get("td:nth-child(3)").then((e)=> {
                        cy.log(e.text());

                })

            })

        })    

            }  
            }



        })

    })
})