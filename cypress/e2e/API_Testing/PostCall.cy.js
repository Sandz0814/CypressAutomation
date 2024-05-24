describe('Post call testing', ()=> {

    // Hardcoded meaning the data is written within the code and not data driven
    it('Approcah 1 - Hard code json object', ()=> {

        const requestBody = {
            "tourist_name":"Jimena Sandro",
            "tourist_email":"sandro1234@gmail.com",
            "tourist_location": "Paranaque"
        }

        cy.request( {
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq('Jimena Sandro')
            expect(response.body.tourist_email).to.eq('sandro1234@gmail.com')
            expect(response.body.tourist_location).to.eq('Paranaque')
        })
    })

   // This Approach is for creating randon data entry
   it('Approach 2 - Hard coded but Dynamically Generating JSON object randomly', () => {

    const getRandomString = (length) => {
        return Math.random().toString(36).substring(2, 2 + length);
    };

    const requestBody = {
        "tourist_name": getRandomString(10),
        "tourist_email": getRandomString(5) + '@gmail.com',
        "tourist_location": "Paranaque"
    };

    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/posts',
        body: requestBody
    })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(response.body.tourist_location).to.eq('Paranaque');
        });
    });

    // Data is coming from fixture Data driven
    it('Approach 3 - Using fixture json object', ()=> {
        
        // extracting data from fixture file
        cy.fixture('PostCall').then(function(data) {

            // You can use index if there are many data in a list
            const requestBody = data[1]

            cy.request( {
                method: 'POST',
                url: 'http://localhost:3000/posts',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                expect(response.body).has.property('tourist_email', requestBody.tourist_email)
                expect(response.body).have.property('tourist_email', requestBody.tourist_email)
            })
        })
    })

    // Get the data from other server and POST to other server, This is API to API approch       
    it.only('Approach 4 - GET and POST - API to API', () => {
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

          // Duplicated data can cause test failure need to POST in other server
    
          // Send a POST request with the extracted userdata
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: userdata
            })
            .then((response)=> {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(userdata.tourist_name)
            expect(response.body.tourist_email).to.eq(userdata.tourist_email)
            expect(response.body.tourist_location).to.eq(userdata.tourist_location)

           })
        })
    })
})



    