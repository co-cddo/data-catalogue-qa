const {Given, When, Then} = require( "@badeball/cypress-cucumber-preprocessor" );
const {goToPage} = require( "../../../support/common/go-to-page" );
const {linkAddressLookup, backLink, getPageHeading, searchDataCatalogue, buttonSearch, logoLinkFsa, linkFSAFoodAlerts} = require( "../../../support/page-objects/common-PO" );
const {verifyPageHeading} = require( "../../../support/common/verify-page-heading" );
const {resultCount, checkboxOrgsFoodStndAgency} = require( "../../../support/page-objects/searchPage-PO" );

Given("the user is on the Data Catalogue Journey of {string} for the {string}", (department, linkText) => {
    goToPage('/');
    searchDataCatalogue().clear().type(department);
    buttonSearch().click();
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

Given("the user is on the Data Catalogue Home Page", () => {
    goToPage('/');
});
Then("back link should not exist", () => {
    backLink().should('not.exist');
});
When("user enter {string} and click on search button", (text) => {
    searchDataCatalogue().clear().type(text);
    buttonSearch().click();
});
Then("user is on the results page", () => {
    resultCount().should('contain', 'results');
});
When("user click on back link", () => {
    backLink().click();
});
Then("Start Page is displayed", () => {
    cy.findByText("Search for government APIs, data services and data sets that are available to share between departments.").should('exist');
});
When("user click on 'Food Standard Agency' image link", () => {
    logoLinkFsa().click();
});
When('user click on the result link "Food Alerts"', () => {
    checkboxOrgsFoodStndAgency().should('be.checked');
    linkFSAFoodAlerts().should('be.visible').click();
});
Then('user is taken to the "Food Alerts" individual record page', () => {
    getPageHeading().should('contain.text','Food Alerts');
})