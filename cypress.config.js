const { defineConfig } = require('cypress')

//require('test').config()
module.exports = defineConfig({
  projectId: 'pvpkki',
  
  e2e: {
    reporter : "mochawesome",
    baseUrl : 'https://rahulshettyacademy.com/angularpractice/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      

    },
       specPattern: 'cypress/integration/examples/*.js'

  }
})

