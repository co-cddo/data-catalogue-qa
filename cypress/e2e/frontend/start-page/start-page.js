import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {getPageHeading, searchDataCatalogue} from "../../../support/page-objects/common-PO";

Given("I access the service address", () => {
    //goToPage('/');
    //cy.findByText(`${linkText}`).click();
    cy.visit("https://data-catalogue-test.herokuapp.com/", {
        auth: {
            username: 'cddo',
            password: '$!?4theAk8Hm'
        }
    })
});

Then("I will be able to view the catalogue landing page", () => {
    getPageHeading().should('contain.text', 'Find government data');
    cy.findByText("Search for government APIs, data services and data sets that are available to share between departments.");
    searchDataCatalogue().should('be.visible');
});