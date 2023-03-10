Feature: As a data acquirer
  I want to be able to use the search bar to input search criteria
  So that I can find a specific record / view a list of records that match the search parameters.

  Scenario: AC 1 - User enters a search keyword and search results corresponding to the keyword are displayed
    Given the user is on the Data Catalogue Home Page
    When the user enters keyword into the search box 'pensions'
    And the user submits by clicking the search button OR pressing enter
    Then the user is directed to a results page linked to the entered keyword
    Then Search Results including a number are displayed with full keyword match against title description or department

  Scenario: AC 2 - User does not enter a search term and click on Search button
    Given the user is on the Data Catalogue Home Page
    When the user submits by clicking the search button OR pressing enter
    Then the user is directed to a results page
    And user clicks on Search button or hits Enter
    Then there is no change in the page content

  Scenario: AC 3 - User enters a search keyword that does exist in the data catalogue
    Given the user is on the Data Catalogue Home Page
    When the user submits by clicking the search button OR pressing enter
    Then the user is directed to a results page
    When user enter a random search term 'google'
    And user clicks on Search button or hits Enter
    Then '0 results' found message is displayed

  Scenario: AC 4 - User enters a partial keyword and search results corresponding to the keyword are displayed
    Given the user is on the Data Catalogue Home Page
    When the user submits by clicking the search button OR pressing enter
    Then the user is directed to a results page
    When user enter a partial search term
    And user clicks on Search button or hits Enter
    Then Search Results including a number are displayed with partial keyword match

  Scenario: AC 5 - Search results are ranked as per title and description
    Given the user is on the Data Catalogue Home Page
    When the user submits by clicking the search button OR pressing enter
    Then the user is directed to a results page
    When user enter a random search term 'test'
    And user clicks on Search button or hits Enter
    Then the results that fully match the search term are ranked above partial matches for 'test'
    And results that match on multiple fields are ranked above those that match a smaller number of fields
