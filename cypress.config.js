const { defineConfig } = require('cypress');


// load the environment variables from the local .env file
require('dotenv').config()

module.exports = defineConfig({
  env: {
    
  },
  fixturesFolder: "cypress/fixtures",
 // experimentalShadowDomSupport: true,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl: 'https://lightforth.org',
    supportFile: false,
    watchForFileChanges: false,
    
    setupNodeEvents (on, config) {

      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {}

      // you could extract only specific variables
      // and rename them if necessary
      config.env.FOO = process.env.FOO
      config.env.BAR = process.env.BAR
      config.env.USER_NAME = process.env.USER_NAME
      //console.log('extended config.env with process.env.{FOO, BAR, USER_NAME}')

      return config
    },

  
  },

 
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
   mochawesomeReporterOptions:{
    reportDir: 'cypress/reports/mocha',
    mochaFile: 'cypress/reports/results/my-test-output-[hash].xml',
    quite:true,
    overwrite: false,
    html: true,
    json: true
  }
  
} 



})
      
