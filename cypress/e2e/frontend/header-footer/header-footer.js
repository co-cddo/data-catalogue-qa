import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../../support/common/go-to-page";
import {
    footerCopyRightCrownLogo, footerLinkOpenGovtLicence,
    getPageHeading, headerCrownLogoGovUK, headerNameFindGovtData, linkAddressLookup, linkFeedback, textWelcomeToGovUK,
} from "../../../support/page-objects/common-PO";
import {verifyPageHeading} from "../../../support/common/verify-page-heading";

Given("the user is on the Data Catalogue Home Page", () => {
    goToPage('/');
});
Given("the user is on the Data Catalogue Journey for {string}", (linkText) => {
    goToPage('/');
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
Then("there will be no change in the webpage and the heading {string} exists", (homePageHeaderText) => {
    getPageHeading(homePageHeaderText);
});
// Given("the user is on the Data Catalogue Journey", () => {
//     goToPage('/');
//     linkAddressLookup().click();
// });
Then("the webpage will return to the homepage and the heading {string} exists", (homePageHeaderText) => {
    verifyPageHeading(homePageHeaderText);
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
})