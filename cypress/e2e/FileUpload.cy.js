import 'cypress-file-upload';

// Need to install - npm install --save-dev cypress-file-upload
// import 'cypress-file-upload';

describe('File Uploading', function() {

    

    it('Single file upload', function() {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#file-upload").attachFile('CreateUser.json')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        
    })

    it('Rename the file being uploaded', function() {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#file-upload").attachFile({filePath:'CreateUser.json', fileName:'test.json'});
        cy.wait(3000)
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get("#uploaded-files").contains('test.json')

    })
    
    it('Upload the file - Drag and Drop', function() {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#drag-drop-upload").attachFile('CreateUser.json', {subjectType: 'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .should('be.visible').and('exist')
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.get('h1').should('have.text','Internal Server Error')
        
    })

    it('Multiple file Upload', function() {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile(['CreateUser.json', 'profile.json', 'users.json'])
        cy.get('#fileList > :nth-child(1)').should('have.text', 'CreateUser.json')
        cy.get('#fileList > :nth-child(2)').should('have.text', 'profile.json')
        cy.get('#fileList > :nth-child(3)').should('have.text', 'users.json')


    })

    it('File Upload Shadow DOM', function() {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('users.json');

        cy.get('.smart-item-name', {includeShadowDom:true}).should('have.text', 'users.json')
        
    })
}) 