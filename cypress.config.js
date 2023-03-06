const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const htmlvalidate = require('cypress-html-validate/plugin').default;
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on,config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  });
  htmlvalidate.install(on, null, {
    exclude: [],
    include: [],
  });
  return config;
};
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    chromeWebSecurity: false,
    baseUrl: 'https://data-catalogue-staging.herokuapp.com',
   // baseUrl: 'https://data-catalogue-test.herokuapp.com/',
    viewportWidth: 1024,
    viewportHeight: 1600,
    video: true,
    responseTimeout: 60000,
    defaultCommandTimeout:6000,
    setupNodeEvents,
    retries:{
      openMode:0,
      runMode:1
    },
    stepDefinitions: [
      "cypress/e2e/**/*.js",
      "cypress/e2e/common/**/*.js"
    ],
  },
  env: {
    APIURL: 'https://jsonplaceholder.cypress.io'
  }
});
