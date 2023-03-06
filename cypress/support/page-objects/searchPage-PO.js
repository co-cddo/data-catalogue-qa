export const searchResults = () => cy.findByRole('link', {name:'Award Details'});
export const noSearchResults = () => cy.findByText('[data-cy="data-services-results-count]');
export const searchResultsCount = () => cy.get('[data-cy="data-services-results-count"]');

export const buttonApplyFilters = () => cy.get('[data-cy="data-service-apply-filters-button"]');
export const linkClearFilters = () => cy.get('[data-cy="data-service-clear-filters-button"]');
export const textFilterByTopic = () => cy.get('.govuk-heading-m');
export const textTopic = () => cy.get('[data-cy=""]');
export const textOrganisations = () => cy.get('.govuk-fieldset__legend govuk-fieldset__legend--s');

export const checkboxTopicHealth = () => cy.get('[data-cy=""]');
export const checkboxTopicBusinessAndEconomy = () => cy.get('[data-cy=""]');
export const checkboxTopicEnvironment = () => cy.get('[data-cy=""]');
export const checkboxTopicCrimeAndJustice = () => cy.get('[data-cy=""]');
export const checkboxTopicMapping = () => cy.get('[data-cy=""]');

export const checkboxOrgsNHSDigital = () => cy.get('[data-cy="organisation-NHS Digital-checkbox-input"]');
export const checkboxOrgsDWP = () => cy.get('[data-cy="organisation-Department for Work and Pensions-checkbox-input"]');
export const checkboxOrgsCompaniesHouse = () => cy.get('[data-cy=""]');
export const checkboxOrgsFoodStndAgency = () => cy.get('[data-cy="organisation-Food Standards Agency-checkbox-input"]');

//results
export const resultAddressLookup = () => cy.get('[data-cy="data-service-Address Lookup-link"]');
export const resultHeaderDWP = () => cy.get('[data-cy="data-service-Department for Work and Pensionsorganisation-name"]');
export const resultHeaderFoodStndAgency = () => cy.get('[data-cy="data-service-Food Alerts-link"]');
export const resultLinkFoodAlerts = () => cy.get('[data-cy="data-service-Food Alerts-link"]');
export const resultLinkFoodHygiene = () => cy.get('[data-cy="data-service-Food Hygiene Ratings Scheme (FHRS)-link"]');
export const resultList = () => cy.get('[data-cy="data-service-organisation-list"]');
export const resultNoRecords = () => cy.get('p[class="govuk-heading-l"]');
export const resultCount = () => cy.get('[data-cy="data-services-results-count"]');

//organisation

export const resultTextNHS = () => cy.findAllByText('NHS Digital');
