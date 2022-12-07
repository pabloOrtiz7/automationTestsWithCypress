const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    requestTimeout: 20000,
    responseTimeout: 20000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false
  },

});
