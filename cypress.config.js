const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // For Html Reports
  // projectId: 'pkyn42',
  e2e: {
    setupNodeEvents(on, config) {
      // take screenshot on failure
      screenshotOnRunFailure = true
      
      // for Html reports
      require('cypress-mochawesome-reporter/plugin')(on);
 
    },
  },
});
