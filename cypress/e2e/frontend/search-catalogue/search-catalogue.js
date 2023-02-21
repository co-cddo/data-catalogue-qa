import {goToPage} from "../../../support/common/go-to-page";
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {buttonSearch, searchDataCatalogue} from "../../../support/page-objects/common-PO";
import {searchResults, searchResultsCount} from "../../../support/page-objects/searchPage-PO";


Given("Data Acquirer is on search results page", () => {
    goToPage('/');
});
When("Data Acquirer enter a search term", () => {
    searchDataCatalogue().clear().type('Award');
});
When("Data Acquirer clicks on Search button or hits Enter", () => {
    buttonSearch().click();
});
Then("Search Results including a number are displayed with full keyword match against title description or department", () => {
    searchResults().should('contain.text', 'Award Details');
});
When("Data Acquirer enters no search term", () => {
    searchResultsCount().should('contain', '124 results');
    searchDataCatalogue().clear();
});
Then("there is no change in the page content", () => {
    searchResultsCount().should('contain', '124 results');
});
When("Data Acquirer enter a random search term {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});
Then("{string} found message is displayed", (results) => {
    searchResultsCount().should('contain', results);
})