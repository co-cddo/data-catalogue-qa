//const searchEndpoint = Cypress.env('APIURL');
//const url = `${searchEndpoint}/comments`
export const searchPage =  (searchEndpoint) => {
        cy.request( {
            method: 'GET',
            url: `${searchEndpoint}/comments`

        } ).then(response => {
            expect(response.status).to.eq( 200 )
            cy.wrap( response.body).as( 'searchFilterRequest' )
        } )
    }
//GDX-167
