export const POSTRequestForInValidDataSource = () => {
    cy.request({
        method: 'POST',
        url: '/api/v1/data_services',
        failOnStatusCode: false,
        auth: {
            username: 'cddo',
            password: 'NzAfCGA8L$3z'
        },
        body: {
            "data_service": {
                "endpoint_url": "https://engineering.dwp.gov.uk/apis/docs",
                "endpoint_description": "https://engineering.dwp.gov.uk/apis/docs",
                "serves_data": [
                    "https://www.data.gov.uk/dataset/2dfb82b4-741a-4b93-807e-11abb4bb0875/"
                ],
                "service_type": "REST",
                "service_status": "DISCOVERY",
                "identifier": "retirement-bereavement-care-address-lookup-location-service-v2.0.0",
                "title": "API Test",
                "description": "Valid API Test",
                "keywords": [
                    "Address",
                    "Search",
                    "UPRN"
                ],
                "themes": [
                    "http://example.com/cv/addressLookup"
                ],
                "licence": "https://opensource.org/license/isc-license-txt/",
                "version": "2.0.0",
                "contact_name": "John Doe",
                "contact_email": "john@example.com",
                "alternative_titles": [
                    "Test"
                ],
                "access_rights": "INTERNAL",
                "security_classification": "OFFICIAL",
                "issued": "2023-03-27",
                "modified": "2023-03-30",
                "creators": [
                    "DWP"
                ],
                "publisher": "DWP",
                "related_data_resources": [
                    ""
                ],
                "summary": "API Test",
                "created": "2023-03-27"
            }
        }
    }).then(res => {
        cy.wrap(res).as('invalidResponse');
    });

}