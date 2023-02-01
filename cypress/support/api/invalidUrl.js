export  const invalidUrl = () => {
    cy.request({
        method: 'GET',
        url:'https://jsonplaceholder.cypress.io/invalid',
        failOnStatusCode: false,
    }).then(response => {
        cy.wrap( response.status).as( 'invalidErrorCode' )
    } )
}