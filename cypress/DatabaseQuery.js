const sql = require('mssql');

// Replace the placeholders with your SQL Server Express details
const server = 'DESKTOP-VMMR993\\MYSQLEXPRESS';
const database = 'SAND';

// Database configuration for trusted connection
const config = {
  server: server,
  database: database,
  options: {
    trustedConnection: true // For Windows Authentication
  }
};

// Function to execute the query
async function executeQuery() {
  try {
    // Connect to the database
    await sql.connect(config);

    // Query to select all rows from UserCredentials table
    const result = await sql.query`SELECT * FROM UserCredentials`;

    // Print user and password for each row
    result.recordset.forEach(row => {
      const user = row[1];
      const passw = row[2];
      console.log(user);
      console.log(passw);
    });

    // Commit the transaction
    await sql.commit();
  } catch (err) {
    // Handle errors
    console.error('Error:', err);
  } finally {
    // Close the connection
    await sql.close();
  }
}

// Call the function to execute the query
executeQuery();
