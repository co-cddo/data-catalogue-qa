Feature: View individual record
  As a data acquirer
  I want to be able to view an individual record on a web page
  So that I can view the metadata associated with that record.

  Scenario Outline: View an individual record for '<record>' for '<department>'
    Given Data Acquirer navigates is on the Find data page
    When Data Acquirer selects to view the individual record '<record>' page for '<department>'
    Then Data Acquirer is navigated to individual record page for '<record>' and '<department>'
    Then Data Acquirer is able to view the individual record page '<contact_email>', '<documentation_url>' and '<endpoint_url>' for given '<record>'
    Examples:
      | record                               | department                       | contact_email                                     | documentation_url                                                             | endpoint_url                                                                  |
      | Address Lookup                       | Department for Work and Pensions | integration.technologyplatforms@dwp.gsi.gov.uk    | https://engineering.dwp.gov.uk/apis/docs                                      | https://api.engineering.dwp.gov.uk                                            |
      | Award Details                        | Department for Work and Pensions | integration.technologyplatforms@dwp.gsi.gov.uk    | https://engineering.dwp.gov.uk/apis/docs                                      | https://api.engineering.dwp.gov.uk                                            |
      | Access Control Service HL7 V3 API    | NHS Digital                      | https://digital.nhs.uk/developer/help-and-support | https://digital.nhs.uk/developer/api-catalogue/access-control-service-hl7-v3  | https://digital.nhs.uk/developer/api-catalogue/access-control-service-hl7-v3  |
      | Ambulance Data Submission - FHIR API | NHS Digital                      | https://digital.nhs.uk/developer/help-and-support | https://digital.nhs.uk/developer/api-catalogue/ambulance-data-submission-fhir | https://digital.nhs.uk/developer/api-catalogue/ambulance-data-submission-fhir |
      | Food Alerts                          | Food Standards Agency            | data@food.gov.uk                                  | https://data.food.gov.uk/food-alerts/ui/reference                             | https://data.food.gov.uk/food-alerts                                          |
      | Food Hygiene Ratings Scheme (FHRS)   | Food Standards Agency            | data@food.gov.uk                                  | https://api.ratings.food.gov.uk/help                                          | https://api.ratings.food.gov.uk/                                              |
