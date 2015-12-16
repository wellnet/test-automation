# features/feature1.feature

Feature: Test cucumber automation
  As a wellnet front-end developer
  I want to automate e2e testing
  So that I can avoid regressions

  Scenario: Visiting the website
    Given I visit the home page
    When I click the register button
    Then The browser goes to the registration page