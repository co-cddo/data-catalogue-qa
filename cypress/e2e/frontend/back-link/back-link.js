const {Given, When, Then} = require( "@badeball/cypress-cucumber-preprocessor" );
const {goToPage} = require( "../../../support/common/go-to-page" );
const {linkAddressLookup, backLink, getPageHeading} = require( "../../../support/page-objects/common-PO" );
const {verifyPageHeading} = require( "../../../support/common/verify-page-heading" );

Given("the user is on the Data Catalogue Journey for the {string}", (linkText) => {
    goToPage('/');
    cy.findByText(`${linkText}`).click();
    getPageHeading().should('contain.text',`${linkText}`);
});
When('the user presses the back button', () => {
    backLink().should('exist');
    backLink().click();
});
Then('the user should view his last activity on the previous page', () => {
    verifyPageHeading('Find government data');
});
Then('back link should not exist', () => {
   backLink().should('not.exist');
});
Given("the user is on the Data Catalogue Home Page", () => {
    goToPage('/');
});