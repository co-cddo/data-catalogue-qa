Feature: test search page

  Scenario: Search Results for Individual Record
    Given I am on the search page
    Then results are fetched from API

### Waiting for the data to execute the below commented scenarios
#  Scenario: Test for Error code - 400 Bad request
#    Given the URL has an invalid character
#    Then results should have a status code of '400'
#
#  Scenario: Test for Error code - 401 Unauthorized
#    Given the URL has an invalid character
#    Then results should have a status code of '401'
#
#  Scenario: Test for Error code - 403 Forbidden
#    Given the URL has an invalid character
#    Then results should have a status code of '403'

  Scenario: Test for Error code - 404 Not Found
    Given the URL has an invalid character
    Then results should have a status code of '404'







