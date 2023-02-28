import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {verifyPageHeading} from "../../../support/common/verify-page-heading";
import {verifyDepartmentName} from "../../../support/common/verify-department-name";
import {findIndividualRecord} from "../../../support/frontend/find-individual-record";
import {buttonSearch, searchDataCatalogue} from "../../../support/page-objects/common-PO";

Given('Data Acquirer navigates is on the Find data page', () => {
    goToPage('/');
    verifyPageHeading('Find government data')
});

When('Data Acquirer selects to view the individual record {string} page for {string}', (record, department) => {
    findIndividualRecord(record, department);
})

Then('Data Acquirer is navigated to individual record page for {string} and {string}', (record, department) => {
    cy.url().should('contain', '/data_services/');
    verifyPageHeading(record);
    //verifyDepartmentName(department);
});
Then('Data Acquirer is able to view the individual record page {string}, {string} and {string} for given {string}',
    (contact_email, documentation_url, endpoint_url, record) => {

    });
When("Data Acquirer clicks on Search button or hits Enter", () => {
    buttonSearch().click();
});
When("Data Acquirer enter a random search term {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});

