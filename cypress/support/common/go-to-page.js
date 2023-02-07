export const goToPage = (url) => {
    cy.clearCookies();
    cy.visit(url, {
        auth: {
            username: 'cddo',
            password: 'NzAfCGA8L$3z'
        },
//    cy.checkPageA11y();
})
}