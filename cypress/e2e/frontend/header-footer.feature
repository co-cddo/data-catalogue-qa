Feature: As a CDDO Catalogue owner
         I want all pages to have Headers, Footers and an Alpha tag
         So that the pages conform to GDS standards


  Scenario: AC 1 - On the Home page if user clicks on the header link 'Find government data' then user remains on the same page
    Given the user is on the Data Catalogue Home Page
    Then the user can view the Header text and logo
    When the user clicks on the image in the header component
    Then there will be no change in the webpage and the heading 'Find government data' exists

  Scenario: AC 2 - User is in the middle of journey and if the header link 'Find government data' is selected then Home page is displayed
    Given the user is on the Data Catalogue Journey for "Address Lookup"
    Then the user can view the Header text and logo
    When the user clicks on the image in the header component
    Then the webpage will return to the homepage and the heading 'Find government data' exists

  Scenario: AC 3 - Verify if user clicks on the GOV.UK link in the header then 'Welcome to GOV.UK' page is displayed
    Given the user is on the Data Catalogue Home Page
    Then the user can view the Header text and logo
    When the user clicks on the link 'GOV.UK' in the header component
    Then 'Welcome to GOV.UK' page is displayed

  Scenario: AC 4 - Verify Footer link ‘Open Government Licence v3.0’
    Given the user is on the Data Catalogue Home Page
    When the user clicks on the footer link 'Open Government Licence v3.0'
    Then a new tab will open and go to the following URL Open Government Licence

  Scenario: AC 5 - Verify Crown copyright exists in the footer
    Given the user is on the Data Catalogue Home Page
    When the user clicks on the footer link '© Crown copyright'
    Then a new tab will open and go to the following URL Crown copyright - Re-using PSI

  Scenario: AC 6 - Verify feedback link exists in the Header
    Given the user is on the Data Catalogue Home Page
    Then feedback link is displayed in the header
   # feedback form has not been implemented yet

