export const findIndividualRecord = (record, department) => {
    let department_po = `data-service-${department}organisation-name`;
    cy.get('[data-cy="'+department_po+'"]').should('be.visible').invoke('text').then((text)=>{
        expect(text).to.contain(department);
    })
    cy.findByRole('link', {name: record}).should('be.visible').click();
}