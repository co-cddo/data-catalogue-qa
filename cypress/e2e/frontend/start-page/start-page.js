import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {buttonSearch, getPageHeading, searchDataCatalogue} from "../../../support/page-objects/common-PO";
import {
    checkboxOrgsDWP,
    checkboxOrgsFoodStndAgency,
    checkboxOrgsNHSDigital, resultCount,
    resultTextNHS
} from "../../../support/page-objects/searchPage-PO";

Given("I access the service address", () => {
    //goToPage('/');
    //cy.findByText(`${linkText}`).click();
    cy.visit("https://data-catalogue-test.herokuapp.com/", {
        auth: {
            username: 'cddo',
            password: '$!?4theAk8Hm'
        }
    })
   // cy.checkA11y();
});

Then("I will be able to view the catalogue landing page", () => {
    getPageHeading().should('contain.text', 'Find government data');
    cy.findByText("Search for government APIs, data services and data sets that are available to share between departments.");
    searchDataCatalogue().should('be.visible');
});

Given("a user is on the catalogue landing page", () => {
    cy.visit("https://data-catalogue-test.herokuapp.com/", {
        auth: {
            username: 'cddo',
            password: '$!?4theAk8Hm'
        }
    })
});
When("the user enters keyword into the search box {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});
When("the user submits by clicking the search button OR pressing enter", () => {
    buttonSearch().click();
});
Then("the user is directed to a results page linked to the entered keyword", () => {
    resultCount().should('be.visible');
    resultTextNHS().should('be.visible');
});
Then("no other filters will be applied", () => {
    checkboxOrgsDWP().should('not.be.checked');
    checkboxOrgsFoodStndAgency().should('not.be.checked');
    checkboxOrgsNHSDigital().should('not.be.checked');
});