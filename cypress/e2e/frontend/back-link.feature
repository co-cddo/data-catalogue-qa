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