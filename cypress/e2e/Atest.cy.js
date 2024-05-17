describe('HTTP Request Testing', () => {
    it('GET and POST Call', () => {
      // Perform GET request
      cy.request('GET', 'http://localhost:3000/posts').then((response) => {
        // Ensure the response is successful
        expect(response.status).to.eq(200);
  
        // Extract response body
        const data = response.body;
  
        // Verify the data length is sufficient to access the 5th element (index 4)
        expect(data).to.have.length.greaterThan(4);
  
        // Extract the specific userdata from the response
        const userdata = data[4];
  
        // Log the extracted userdata for debugging purposes
        cy.log('User Data:', JSON.stringify(userdata));
  
        /* // Send a POST request with the extracted userdata
        cy.request({
          method: 'POST',
          url: 'https://jsonplaceholder.typicode.com/posts/',
          body: userdata */
        
      });
    });
  });
