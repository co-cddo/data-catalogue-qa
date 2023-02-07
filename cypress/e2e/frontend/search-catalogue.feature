Feature: As a data acquirer
         I want to be able to use the search bar to input search criteria
         So that I can find a specific record / view a list of records that match the search parameters.

  Scenario: AC 1 - User enters a search keyword and search results corresponding to the keyword are displayed
    Given Data Acquirer is on search results page
    When Data Acquirer enter a search term
    And Data Acquirer clicks on Search button or hits Enter
    Then Search Results including a number are displayed with full keyword match against title description or department

  Scenario: AC 2 - User does not enter a search term and click on Search button
    Given Data Acquirer is on search results page
    When Data Acquirer enters no search term
    And Data Acquirer clicks on Search button or hits Enter
    Then there is no change in the page content

  Scenario: AC 3 - User enters a search keyword that does exist in the data catalogue
    Given Data Acquirer is on search results page
    When Data Acquirer enter a random search term 'google'
    And Data Acquirer clicks on Search button or hits Enter
    Then '0 results' found message is displayed

