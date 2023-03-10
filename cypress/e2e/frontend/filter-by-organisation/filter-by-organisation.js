import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {
    buttonApplyFilters,
    checkboxOrgsDWP,
    checkboxOrgsFoodStndAgency,
    linkClearFilters,
    resultAddressLookup, resultCount,
    resultHeaderDWP,
    resultHeaderFoodStndAgency,
    resultLinkFoodAlerts, resultLinkFoodHygiene, resultTextNHS
} from "../../../support/page-objects/searchPage-PO";
import {
    buttonSearch,
    linkDwpAwardDetails,
    linkFSAFoodAlerts,
    searchDataCatalogue
} from "../../../support/page-objects/common-PO";

Given("the user is on the Data Catalogue Home Page", () => {
    goToPage('/');
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
When("Data Acquirer selects filter for a department and clicks Apply filters button", () => {
    checkboxOrgsDWP().uncheck().check();
    buttonApplyFilters().click();
});
Then("Search Results are filtered based on the filter selected", () => {
    resultAddressLookup().should('contain.text', 'Address Lookup');
    resultHeaderDWP().should('contain.text','Department for Work and Pensions');
});


Given("Data Acquirer is on search results page and one or more filters have been applied", () => {
    checkboxOrgsDWP().uncheck().check();
    checkboxOrgsFoodStndAgency().uncheck().check();
    buttonApplyFilters().click();
    linkDwpAwardDetails().should('be.visible');
    linkFSAFoodAlerts().should('be.visible');
});
When("Data Acquirer resets the filters by selecting Clear filters link", () => {
    linkClearFilters().click();
});
Then("Search Results are no longer filtered based on the filter previously selected", () => {
    cy.url().should('contain','/data_services');
    checkboxOrgsDWP().should('not.be.checked');
    checkboxOrgsFoodStndAgency().should('not.be.checked');
    cy.findAllByText('NHS Digital').should('exist');
});
When("Data Acquirer unselects one department and clicks apply filter button", () => {
    checkboxOrgsDWP().uncheck();
    buttonApplyFilters().click();
});
Then("Search Results are filtered based on the updated filter selection", () => {
    resultHeaderDWP().should('not.exist');
    resultHeaderFoodStndAgency().should('exist');
    resultLinkFoodAlerts().should('exist');
    resultLinkFoodHygiene().should('exist');
});
When("Data Acquirer unselects one department 'DWP' and clicks Apply filters button", () => {
    checkboxOrgsDWP().uncheck();
    buttonApplyFilters().click();
});

When("Data Acquirer enters a search term {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});
Then("selects Organisations 'Department for Work and Pensions'", () => {
    checkboxOrgsDWP().uncheck().check();
});
Then("click Search button instead of Apply filters button", () => {
    buttonSearch().click();
});
Then("{string} text is displayed", (text) => {
    switch (text) {
        case '0 results':
            cy.contains( text );
            break;
        case 'There are no matching results.':
            cy.contains( text );
            break;
        case 'Improve your search results by:':
            cy.contains( text );
            break;
    }
});

When("click on Search button", () => {
    buttonSearch().click();
});
