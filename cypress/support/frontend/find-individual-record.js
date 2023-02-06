export const findIndividualRecord = (record, department) => {
    let department_po = `organisation-${department}-name`;
    cy.get('[data-cy="'+department_po+'"]').should('be.visible').invoke('text').then((text)=>{
        expect(text).to.equal(department);
    })
    cy.findByRole('link', {name: record}).should('be.visible').click();
}