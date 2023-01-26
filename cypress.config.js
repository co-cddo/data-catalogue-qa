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
  });
  htmlvalidate.install(on, null, {
    exclude: [],
    include: [],
  });
  return config;
};
module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    baseUrl: '',
    viewportWidth: 1024,
    viewportHeight: 1600,
    video: true,
    responseTimeout: 60000,
    defaultCommandTimeout:6000,
    setupNodeEvents,
    retries:{
      openMode:0,
      runMode:1
    }
  },
});
