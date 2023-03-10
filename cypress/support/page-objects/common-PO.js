export const headerNameFindGovtData = () => cy.get('[data-cy="govuk-header-service-name"]');
export const headerCrownLogoGovUK = () => cy.get('[data-cy="govuk-logo-text"]');
export const verifyHeaderText = () => cy.get('.govuk-header');
export const textWelcomeToGovUK = () => cy.findAllByText('Welcome to GOV.UK');
export const linkFeedback = () => cy.get('[data-cy="govuk-phase-bannner-link"]');

export const footerLinkOpenGovtLicence = () => cy.get('[data-cy="govuk-footer-licence-link"]');
export const footerCopyRightCrownLogo = () => cy.get('[data-cy="govuk-footer-copyright-logo"]');


//Landing Page Service logo and links
export const logoLinkDwp = () => cy.get('.gem-c-organisation-logo__name');
export const logoLinkNhsDigital = () => cy.get('[data-cy="NHS Digital-filter-link"]');
export const logoLinkFsa = () => cy.get('[data-cy="Food Standards Agency-filter-link"]');

//checkbox in Results page
export const checkBoxOrganisation = () => cy.get('.govuk-checkboxes__item');

export const getPageHeading = () => cy.get('h1');
export const getDepartmentName = () => cy.get('h2');
export const linkAddressLookup = () => cy.findByText('Address Lookup');
export const linkDwpAwardDetails = () => cy.get('[data-cy="data-service-Award Details-link"]');
export const linkFSAFoodAlerts = () => cy.get('[data-cy="data-service-Food Alerts-link"]');
export const linkDwpGetTasks = () => cy.get('[data-cy="data-service-Get Tasks-link"]');

export const headerTextGetTasks = () => cy.get('[data-cy="data-service-Get Tasks-name"]')

export const backLink = () => cy.get('[data-cy="govuk-back-link"]');

export const searchDataCatalogue = () => cy.get('#data-service-search-input');
export const buttonSearch = () => cy.get('.gem-c-search__submit');

