Feature: Computer feature

  As a user I want to navigate to computer Page and select a product successfully

  Scenario:As a user I want to navigate to computer page successfully
    Given   I am on Home page
    When    I click on Computer link
    Then    I navigate to computer page successfully

  Scenario: As a user I want to select Build my own Computer product successfully
    Given   I am on Home page
    When    I click on Computer link
    Then    I navigate to computer page successfully
    And     I click on desktop link
    And     I select build your own computer
    And     I select HDD
    And     I click on add to cart
    Then    The product is added successfully
