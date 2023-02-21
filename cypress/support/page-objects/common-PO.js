export const headerNameFindGovtData = () => cy.get('[data-cy="govuk-header-service-name"]');
export const headerCrownLogoGovUK = () => cy.get('[data-cy="govuk-logo-text"]');
export const verifyHeaderText = () => cy.get('.govuk-header');
export const textWelcomeToGovUK = () => cy.findAllByText('Welcome to GOV.UK');
export const linkFeedback = () => cy.get('[data-cy="govuk-phase-bannner-link"]');

export const footerLinkOpenGovtLicence = () => cy.get('[data-cy="govuk-footer-licence-link"]');
export const footerCopyRightCrownLogo = () => cy.get('[data-cy="govuk-footer-copyright-logo"]');

export const getPageHeading = () => cy.get('h1');
export const getDepartmentName = () => cy.get('h2');
export const linkAddressLookup = () => cy.findByText('Address Lookup');

export const backLink = () => cy.get('[data-cy="govuk-back-link"]');

//export const searchDataCatalogue = () => cy.get('[data-cy="data-service-search-input"]');
//export const searchDataCatalogue = () => cy.findByRole('search');
export const searchDataCatalogue = () => cy.get('input[name="query"]');
//export const buttonSearch = () => cy.get('[data-cy="data-service-search-button"]');
export const buttonSearch = () => cy.get('.gem-c-search__submit');

