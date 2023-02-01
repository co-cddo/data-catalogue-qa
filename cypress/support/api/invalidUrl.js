export  const invalidUrl = () => {
    cy.request({
        method: 'GET',
        url:'https://jsonplaceholder.cypress.io/invalid',
        failOnStatusCode: false,
    }).as ('invalidErrorCode')
}