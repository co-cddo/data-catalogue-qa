import '@testing-library/cypress/add-commands';
import './accessibility';
import "cypress-localstorage-commands";
import "cypress-html-validate/commands";

Cypress.Commands.add('checkPageA11y', () => {
    cy.injectAxe();

    cy.checkA11y(
        null,
        null,
        callback,
    );
});
