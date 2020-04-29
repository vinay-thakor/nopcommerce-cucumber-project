Feature: Registration Feature

  As a user I want to register an account on nop commerce website

  Scenario : User should navigate to Register page successfully
    Given   I am on Home page
    When    I click on Register Link
    Then    I should navigate to Register page successfully

  Scenario : User should Register and create an account successfully
    Given   I am on Home page
    When    I click on Register Link
    And     I enter first name "Ram"
    And     I enter last name "Raghu"
    And     I enter day "11"
    And     I enter month "May"
    And     I enter year "1980"
    And     I enter random email address
    And     I enter company name "cucumber test"
    And     I enter register password "london"
    And     I enter register confirm password "london"
    And     I click on Register button
    Then    I should be able to Register and create an account successfully

  Scenario Outline: Verify error message when user tries to register account without entering first name
    Given   I am on Home page
    When    I click on Register Link
    And     I enter last name "<last name>"
    And     I enter day "<day>"
    And     I enter month "<month>"
    And     I enter year "<year>"
    And     I enter email address "<email>"
    And     I enter company name "<company name>"
    And     I enter register password "<password>"
    And     I enter register confirm password "<confirm password>"
    And     I click on Register button
    Then    I should see the error message "<errorMessage>"

    Examples:

      | last name | day | month    | year | email               | company name | password | confirm password | errorMessage            |
      | Shah      | 12  | February | 2004 | ydhisthir@gmail.com | Agni         | tana     | tana             | First name is required. |
      | Sheth     | 18  | May      | 2005 | bhim@gmail.com      | Vayu         | timbi    | timbi            | First name is required. |
      | Shukla    | 29  | November | 2006 | arjun@gmail.com     | jal          | bajud    | bajud            | First name is required. |
      | Sharma    | 5   | February | 2007 | nakul@gmail.com     | Akash        | vartej   | vartej           | First name is required. |
      | Suchak    | 5   | February | 2007 | sahdev@gmail.com    | Dharti       | shihor   | shihor           | First name is required. |