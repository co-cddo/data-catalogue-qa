import {searchPage} from "../../../support/api/searchPage";
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {invalidUrl} from "../../../support/api/invalidUrl";

const searchEndpoint = Cypress.env('APIURL');


Given("I am on the search page", () => {
    searchPage(searchEndpoint);
})
Then("results are fetched from API", () => {
    //cy.get('@searchFilterRequest').its('response.body').should('eq', 200)
    cy.get("@searchFilterRequest")
        .then((result)=>{
            for (let i = 0; i<result.length; i++)
            {
                if(result[i].email === 'Hayden@althea.biz')
                {
                    cy.log('email id found');
                    cy.log('record found at = ' + i);
                    break;
                }
            }
            expect(result[4].id).to.eq(5)
            cy.log(result[4].id)
        })
});

When("the URL has an invalid character", () => {
    invalidUrl();
});

Then("results should have a status code of {string}", (statusCode) => {
            switch (statusCode) {
                case '400': {
                    cy.get( '@invalidErrorCode' ).its( 'status' ).should( 'eq', 400 );
                    cy.log( 'the result error code is: ' + statusCode );
                    break;
                }
                case '401': {
                    cy.get( '@invalidErrorCode' ).its( 'status' ).should( 'eq', 401 );
                    cy.log( 'the result error code is: ' + statusCode );
                    break;
                }
                case '403': {
                    cy.get( '@invalidErrorCode' ).its( 'status' ).should( 'eq', 403 );
                    cy.log( 'the result error code is: ' + statusCode );
                    break;
                }
                case '404': {
                    cy.get( '@invalidErrorCode' ).its( 'status' ).should( 'eq', 404 );
                    cy.log( 'the result error code is: ' + statusCode );
                    break;
                }
                default : {
                    cy.log('Error code does not match');
                }

            }

});



