export const goToPage = (url) => {
    cy.clearCookies();
    cy.visit(url);
//    cy.checkPageA11y();
}