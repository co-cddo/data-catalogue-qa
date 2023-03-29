Feature: POST API method to create a data source
  As a data catalogue owner
  I want a POST API method
  so that I can programmatically add a data service to the marketplace catalogue

  Scenario: AC-01 valid data resource
    Given data provider has authenticated and POST a data service resource conforming to the metadata exchange model
    Then the data is added to the marketplace catalogue and a 201 response is returned

  Scenario: AC-02 Invalid data resource
    Given data provider has authenticated and POST a data service resource that does not conform to the metadata exchange model
    Then the data is not added to the marketplace catalogue and a 400 error response is returned