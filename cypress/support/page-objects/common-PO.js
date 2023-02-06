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
