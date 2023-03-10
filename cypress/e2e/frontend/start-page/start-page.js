import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {
    buttonSearch,
    checkBoxOrganisation, footerLinkOpenGovtLicence,
    getPageHeading, logoLinkDwp, logoLinkFsa, logoLinkNhsDigital,
    searchDataCatalogue
} from "../../../support/page-objects/common-PO";
import {
    checkboxOrgsDWP,
    checkboxOrgsFoodStndAgency,
    checkboxOrgsNHSDigital, linkClearFilters, resultCount,
    resultTextNHS
} from "../../../support/page-objects/searchPage-PO";


Then("I will be able to view the catalogue landing page", () => {
    getPageHeading().should('contain.text', 'Find government data');
    cy.findByText("Search for government APIs, data services and data sets that are available to share between departments.");
    searchDataCatalogue().should('be.visible');
});

Given("a user is on the catalogue landing page", () => {
    goToPage('/');
});
When("the user enters keyword into the search box {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});
When("the user submits by clicking the search button OR pressing enter", () => {
    buttonSearch().click();
});
Then("the user is directed to a results page linked to the {string}", (linkText) => {
    resultCount().should('be.visible');
    cy.findAllByText(linkText).should('be.visible');
});
Then("no other filters will be applied", () => {
    checkboxOrgsDWP().should('not.be.checked');
    checkboxOrgsFoodStndAgency().should('not.be.checked');
    checkboxOrgsNHSDigital().should('not.be.checked');
});
When("the user clicks on an organisation {string}", (link) => {
    switch (link)
    {
        case 'NHS Digital':
        {
            logoLinkNhsDigital().click();
            break;
        };
        case 'Department for Work and Pensions':
        {
            logoLinkDwp().click();
            break;
        };
        case 'Food Standards Agency':
        {
            logoLinkFsa().click();
            break;
        }
    }
});
Then("the user will be directed to the results page", () => {

});
Then("the result will be filtered by the {string}", (linkText) => {
    resultCount().should('be.visible');
    cy.findAllByText(linkText).should('be.visible');
});
Then("the {string} checkbox is selected", (linkText) => {
    switch (linkText)
    {
        case 'NHS Digital':
        {
            checkboxOrgsNHSDigital().should('be.checked');
            break;
        };
        case 'Department for Work and Pensions':
        {
            checkboxOrgsDWP().should('be.checked');
            break;
        };
        case 'Food Standards Agency':
        {
            checkboxOrgsFoodStndAgency().should('be.checked');
            break;
        }
    }

});
Then("no other organisation filters will be applied", (linkText) => {
    switch (linkText)
    {
        case 'NHS Digital':
        {
            checkboxOrgsDWP().should('not.be.checked');
            checkboxOrgsFoodStndAgency().should('not.be.checked');
            break;
        };
        case 'Department for Work and Pensions':
        {
            checkboxOrgsFoodStndAgency().should('not.be.checked');
            checkboxOrgsNHSDigital().should('not.be.checked');
            break;
        };
        case 'Food Standards Agency':
        {
            checkboxOrgsDWP().should('not.be.checked');
            checkboxOrgsNHSDigital().should('not.be.checked');
            break;
        }
    }
})
Then("the user is directed to a results page linked to the entered keyword", () => {
    resultCount().should('be.visible');
    resultTextNHS().should('be.visible');
});