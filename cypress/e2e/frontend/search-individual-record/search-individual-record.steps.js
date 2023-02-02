import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {verifyPageHeading} from "../../../support/common/verify-page-heading";
import {getAddressLookUpLink} from "../../../support/page-objects/individualPage-PO";
import {verifyDepartmentName} from "../../../support/common/verify-department-name";

Given('Data Acquirer navigates to the individual record page',()=>{
    goToPage('/');
    verifyPageHeading('Find data');
    verifyDepartmentName('Department for Work and Pensions');
getAddressLookUpLink().should('be.visible').should('have.attr','href','/data_services/1').click();
});

Then('Data Acquirer is able to view the individual record page details',()=>{
cy.url().should('contain','/data_services/1');
    verifyPageHeading('Address Lookup');
    verifyDepartmentName('Department for Work and Pensions');

})
