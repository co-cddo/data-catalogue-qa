export const searchResults = () => cy.findByRole('link', {name:'Award Details'});
export const noSearchResults = () => cy.findByText('[data-cy="data-services-results-count]');
export const searchResultsCount = () => cy.get('[data-cy="data-services-results-count"]');
