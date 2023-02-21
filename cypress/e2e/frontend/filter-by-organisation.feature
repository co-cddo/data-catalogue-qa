Feature: As a data acquirer
         I want to be able to use filter parameters to filter the results
         So that I can find a specific record / view a list of records that match the filter parameters.

  Scenario: AC1 - Apply Filter
    Given Data Acquirer is on search results page
    When Data Acquirer selects filter for a department and clicks Apply filters button
    Then Search Results are filtered based on the filter selected

  Scenario: AC2 - Resetting Filter
    Given Data Acquirer is on search results page and one or more filters have been applied
    When Data Acquirer resets the filters by selecting Clear filters link
    Then Search Results are no longer filtered based on the filter previously selected

  Scenario: AC3 - User unselects some Filters and click Filter again
    Given Data Acquirer is on search results page and one or more filters have been applied
    When Data Acquirer unselects one department and clicks Apply filters button
    Then Search Results are filtered based on the updated filter selection

#  Scenario: AC4 - User selects a Topic and Organisation that does not have any match
#    Given Data Acquirer is on search results page and one or more filters have been applied
#    When Data Acquirer selects Topic as Health and Company House as Organisation and clicks Apply Filters button
#    Then '0 results' text is displayed

  Scenario: AC5 - User enters a search term from one organisation and selects the other filters
    Given Data Acquirer is on search results page and one or more filters have been applied
    When Data Acquirer enters a search term 'NHS Digital'
    And selects Organisations 'Department for Work and Pensions'
    And click Search button instead of Apply filters button
    Then '0 results' text is displayed
    And 'There are no matching results.' text is displayed
    And 'Improve your search results by:' text is displayed

  Scenario: AC6 - User enters a search term that does not exist in the data catalogue
    Given Data Acquirer is on search results page
    When Data Acquirer enters a search term 'google'
    And click on Search button
    Then '0 results' text is displayed
    And 'There are no matching results.' text is displayed
    And 'Improve your search results by:' text is displayed

