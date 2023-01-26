import 'cypress-html-validate/dist/commands';
import "cypress-real-events/support";
import '@testing-library/cypress/add-commands';

const COOKIE_NAME = "cookie_notice";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = "ACCEPTED";

Cypress.on("window:before:load", window => {
    window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});