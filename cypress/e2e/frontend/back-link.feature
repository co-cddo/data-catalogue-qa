Feature: As a user of the data catalogue
  I want the ability to backtrack from the current page
  So that the user can navigate the platform

  Scenario Outline: AC1 - Verify back link exists in all the <page> for the <department> and user can navigate to the previous page
    Given the user is on the Data Catalogue Journey of "<department>" for the "<page>"
    When the user presses the back button
    Then the user should view his last activity on the previous page
    Examples:
      | page           | department                       |
      | Address Lookup | Department for Work and Pensions |
      | Bank Wizard    | Department for Work and Pensions |
      | Food Alerts    | Food Standards Agency            |


  Scenario: AC2 - Verify back link does not exists in the Home page
    Given the user is on the Data Catalogue Home Page
    Then back link should not exist
    When user enter 'DWP' and click on search button
    Then user is on the results page
    When user click on back link
    Then Start Page is displayed

  Scenario: AC3 - Navigate from Individual record (Contact details) page to Start page
    Given the user is on the Data Catalogue Home Page
    When user click on 'Food Standard Agency' image link
    Then user is on the results page
    When user click on the result link "Food Alerts"
    Then user is taken to the "Food Alerts" individual record page
    When user click on back link
    Then user is on the results page
    When user click on back link
    Then Start Page is displayed

  Scenario: AC4 - Verify pagination and Next link is displayed in the Results page
    Given the user is on the Data Catalogue Home Page
    Then back link should not exist
    When user enter 'NHS' and click on search button
    Then user is on the results page
    And the pagination text is displayed
    And the page number is displayed
    And the Next page link is displayed

  Scenario: AC5 - Verify pagination 'Previous link' is not displayed in the 1st page but is displayed from the 2nd page onwards
    Given the user is on the Data Catalogue Home Page
    Then back link should not exist
    When user enter 'NHS' and click on search button
    Then user is on the results page
    And the pagination text is displayed
    And the page number is displayed
    And no Previous link is displayed
    And the Next page link is displayed
    When user click on the link Page 2
    Then Previous Link is displayed

  Scenario: AC4 - Verify pagination Next link is NOT displayed in the Results Last page
    Given the user is on the Data Catalogue Home Page
    Then back link should not exist
    When user enter 'NHS' and click on search button
    Then user is on the results page
    And the pagination text is displayed
    And the page number is displayed
    And user click on Next page link until the link exists



