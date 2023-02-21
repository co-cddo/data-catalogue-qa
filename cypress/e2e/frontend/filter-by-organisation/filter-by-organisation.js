import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {
    buttonApplyFilters,
    checkboxOrgsDWP,
    checkboxOrgsFoodStndAgency,
    linkClearFilters,
    resultAddressLookup,
    resultHeaderDWP,
    resultHeaderFoodStndAgency,
    resultLinkFoodAlerts, resultLinkFoodHygiene
} from "../../../support/page-objects/searchPage-PO";
import {buttonSearch, searchDataCatalogue} from "../../../support/page-objects/common-PO";


Given("Data Acquirer is on search results page", () => {
    goToPage('/');
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
    goToPage('/');
    checkboxOrgsDWP().uncheck().check();
    checkboxOrgsFoodStndAgency().uncheck().check();
    buttonApplyFilters().click();
});
When("Data Acquirer resets the filters by selecting Clear filters link", () => {
    linkClearFilters().click();
});
Then("Search Results are no longer filtered based on the filter previously selected", () => {
    cy.url().should('contain','/data_services');
    checkboxOrgsDWP().should('not.be.checked');
    checkboxOrgsFoodStndAgency().should('not.be.checked');
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
When("Data Acquirer unselects one department and clicks Apply filters button", () => {
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
