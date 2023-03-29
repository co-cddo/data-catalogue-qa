import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import {POSTRequestForValidDataSource} from "../../../support/api/POSTRequestForValidDataSource";
import {POSTRequestForInValidDataSource} from "../../../support/api/POSTRequestForInvalidDataSource";

Given('data provider has authenticated and POST a data service resource conforming to the metadata exchange model', () => {
    POSTRequestForValidDataSource();
});
Then('the data is added to the marketplace catalogue and a 201 response is returned', () => {
    cy.get('@validResponse').then((res) => {
        expect(res.status.toString()).to.contain('201');
    })
});

Given('data provider has authenticated and POST a data service resource that does not conform to the metadata exchange model', () => {
    POSTRequestForInValidDataSource();
});

Then('the data is not added to the marketplace catalogue and a 400 error response is returned', () => {
    cy.get('@invalidResponse').then((res) => {
        expect(res.status).to.equal(404);
    })
})