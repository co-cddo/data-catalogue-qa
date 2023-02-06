export const goToPage = (url) => {
    cy.clearCookies();
    cy.visit(url, {
        auth: {
            username: 'cddo',
            password: '$!?4theAk8Hm'
        },
//    cy.checkPageA11y();
})
}