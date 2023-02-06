export const verifyIndividualRecord =
    (contact_email, documentation_url, endpoint_url, record) => {
        cy.findByText('Contact email').should('be.visible');
        cy.get('[data-cy="data-service-' + record + '-name"]').should('be.visible')
            .invoke('text').then((text) => {
            expect(text).to.equal(contact_email);
        })
        cy.get('[data-cy="data-service-' + record + '-documentation-url"]').should('be.visible')
            .invoke('text').then((text) => {
            expect(text).to.equal(documentation_url);
        })
        cy.get('[data-cy="data-service-' + record + '-endpoint-url"]').should('be.visible')
            .invoke('text').then((text) => {
            expect(text).to.equal(endpoint_url);
        })
    }