// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
    
//     "chromeWebSecurity": false,
//     "failOnStatusCode": false,
//     "experimentalSessionAndOrigin": true,
    
    
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
      
//     },
//   },
// });



const { defineConfig } = require("cypress");


//const { defineConfig } = require('cypress')
// Populate process.env with values from .env file
require('dotenv').config()

module.exports = defineConfig({
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  },
})

module.exports = defineConfig({
  e2e: {

    "experimentalSessionAndOrigin": true,
    "chromeWebSecurity": false,
    "failOnStatusCode": false,
    
      "baseUrl": "https://dev-app.pickmyad.com/auth/admin/login",
      "chromeWebSecurity": false,
       //"experimentalModifyObstructiveThirdPartyCode": true,
    //defaultCommandTimeout: 10000,
    //pageLoadTimeout: 100000,


     //baseUrl: "https://dev-app.pickmyad.com/auth",
  
     // setupNodeEvents(on, config) {
    //   require("cypress-localstorage-commands/plugin")(on, config);
    //   return config;
     
      






    // },
  },
});





