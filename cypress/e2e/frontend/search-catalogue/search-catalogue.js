import {goToPage} from "../../../support/common/go-to-page";
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {buttonSearch, searchDataCatalogue} from "../../../support/page-objects/common-PO";
import {
    resultCount,
    resultList,
    resultNoRecords, resultTextNHS,
    searchResults,
    searchResultsCount
} from "../../../support/page-objects/searchPage-PO";


Given("the user is on the Data Catalogue Home Page", () => {
    goToPage('/');
});
When("the user enters keyword into the search box {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});
When("the user submits by clicking the search button OR pressing enter", () => {
    buttonSearch().click();
});
When('Data Acquirer enter a search term', () => {
    searchDataCatalogue().clear().type('Award');
});
Then("the user is directed to a results page linked to the entered keyword", () => {
    resultCount().should('be.visible');
    resultTextNHS().should('be.visible');
});
Then("the user is directed to a results page", () => {
    resultCount().should('be.visible');
});

When("user clicks on Search button or hits Enter", () => {
    buttonSearch().click();
});
Then("Search Results including a number are displayed with full keyword match against title description or department", () => {
    searchResults().should('contain.text', 'Award Details');
});
When("Data Acquirer enters no search term", () => {
     resultList().get('li').then(elm=>{
         let count = elm.length;
         searchResultsCount().should('contain', `${count} results`);
         searchDataCatalogue().clear();
    })

});
Then("there is no change in the page content", () => {
    resultList().get('li').then(elm=>{
        let count = elm.length;
        searchResultsCount().should('contain', `${count} results`);
        searchDataCatalogue().clear();
    })
});

Then("{string} found message is displayed", (results) => {
    resultNoRecords().should('contain', results);
});

When('user enter a partial search term',()=>{
    searchDataCatalogue().clear().type('exam');
});

Then('Search Results including a number are displayed with partial keyword match',()=>{
    let orgName;
    resultList().get('li').eq(0).get('a[class="govuk-link"]').eq(1).invoke('text').then((text)=>{
        orgName  = text;
        let pageObject = 'data-service-'+orgName+'-description';
        resultList().get(`[data-cy="${pageObject}"]`).first().invoke('text').should('contain', 'Exam');
});
});
When("user enter a random search term {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});


Then('the results that fully match the search term are ranked above partial matches for {string}',(searchTerm)=>{
    let orgName;
    resultList().get('li').eq(0).get('a[class="govuk-link"]').eq(1).invoke('text').then((text)=>{
        orgName  = text;
        let pageObject = 'data-service-'+orgName+'-description';
        resultList().get(`[data-cy="${pageObject}"]`).first().invoke('text').should('contain', searchTerm);
    });
});

Then('results that match on multiple fields are ranked above those that match a smaller number of fields',()=>{
    let orgName;
    resultList().get('li').eq(0).get('a[class="govuk-link"]').eq(1).invoke('text').then((text)=>{
        orgName  = text;
        let pageObject = 'data-service-'+orgName+'-description';
        resultList().get(`[data-cy="${pageObject}"]`).first().invoke('text').should('contain', 'test');
        resultList().get(`[data-cy="${pageObject}"]`).first().invoke('text').then(text =>{
            let textCount = text.split('test');
           cy.wrap(textCount.length).as('result1');
            resultList().get('li').eq(1).get('a[class="govuk-link"]').eq(2).invoke('text').then((text)=>{
                orgName  = text;
                let pageObject = 'data-service-'+orgName+'-description';
                resultList().get(`[data-cy="${pageObject}"]`).first().invoke('text').should('contain', 'test');
                resultList().get(`[data-cy="${pageObject}"]`).first().invoke('text').then(text =>{
                    let textCount = text.split('test');
                    cy.wrap(textCount.length).as('result2');
                })
                cy.get('@result1').then(result1=>{
                    cy.get('@result2').then(result2 =>{
                        expect(result1).to.be.greaterThan(result2);
                    })
                })
            });
        })
    });
})