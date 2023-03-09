Feature: As a data acquirer
         I want to be able to view a landing page for when I access the catalogue
         So that I can view information about the service and how to use it

  Scenario: AC1 - View landing page
    Given a user is on the catalogue landing page
    Then I will be able to view the catalogue landing page

  Scenario: AC2 - Enter a search term on the start page and click on search button will direct to the results page
    Given a user is on the catalogue landing page
    When the user enters keyword into the search box 'NHS'
    And the user submits by clicking the search button OR pressing enter
    Then the user is directed to a results page linked to the entered keyword
    And no other filters will be applied