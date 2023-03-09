import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {
    buttonSearch,
    footerCopyRightCrownLogo,
    footerLinkOpenGovtLicence,
    getPageHeading,
    headerCrownLogoGovUK,
    headerNameFindGovtData,
    linkAddressLookup, linkDwpGetTasks,
    linkFeedback,
    searchDataCatalogue,
    textWelcomeToGovUK,
} from "../../../support/page-objects/common-PO";
import {verifyPageHeading} from "../../../support/common/verify-page-heading";
import {resultCount, resultTextNHS} from "../../../support/page-objects/searchPage-PO";

Given("the user is on the Data Catalogue Home Page", () => {
    goToPage('/');
});
Given("the user is on the Data Catalogue Journey for {string}", (linkText) => {
    cy.findByText(`${linkText}`).click();
})
Then("the user can view the Header text and logo", () => {
    headerNameFindGovtData().should('exist');
    headerNameFindGovtData().should('contain.text', 'Find government data');
    headerCrownLogoGovUK().should('exist');
    headerCrownLogoGovUK().should('contain.text', 'GOV.UK');
});
When("the user clicks on the link 'GOV.UK' in the header component", () => {
    headerCrownLogoGovUK().click();
});
Then("'Welcome to GOV.UK' page is displayed", () => {
    textWelcomeToGovUK().should('exist');
})
When("the user clicks on the image in the header component", () => {
    headerNameFindGovtData().click();
});
When("the user selects the link {string}", (link) => {
    cy.findByText(`${link}`).click();
});
Then("the user is directed to the {string} page", (text) => {
    getPageHeading().should('contain',text);
});
Then("there will be no change in the webpage and the heading {string} exists", (homePageHeaderText) => {
    getPageHeading(homePageHeaderText);
});

Then("the webpage will return to the homepage and the heading {string} exists", (homePageHeaderText) => {
    verifyPageHeading(homePageHeaderText);
    cy.findByText("Search for government APIs, data services and data sets that are available to share between departments.")
});

When("the user clicks on the footer link {string}", (text) => {
    switch (text) {
        case 'Open Government Licence v3.0':
        {
            footerLinkOpenGovtLicence().should('exist');
            footerLinkOpenGovtLicence().should('contain.text', text);
            footerLinkOpenGovtLicence().invoke('removeAttr','target').click();
            break;
        }
        case '© Crown copyright':
        {
            footerCopyRightCrownLogo().should('exist');
            footerCopyRightCrownLogo().should('contain.text', text);
            footerCopyRightCrownLogo().invoke('removeAttr', 'target').click();
            break;
        }
}
});
Then("a new tab will open and go to the following URL Open Government Licence", () => {
    cy.contains('Open Government Licence for public sector information');
});

Then("a new tab will open and go to the following URL Crown copyright - Re-using PSI", () => {
    cy.contains('Crown copyright is defined under section 163 of the Copyright, Designs and Patents Act 1988');
    cy.url().should('contain', 'information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/');
});

Then('feedback link is displayed in the header', () => {
    linkFeedback().should('exist');
});
When("the user enters keyword into the search box {string}", (text) => {
    searchDataCatalogue().clear().type(text);
});
When("the user submits by clicking the search button OR pressing enter", () => {
    buttonSearch().click();
});
Then("the user is directed to a results page linked to the entered keyword", () => {
    resultCount().should('be.visible');
    linkDwpGetTasks().should('be.visible');
});