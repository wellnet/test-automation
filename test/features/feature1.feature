# features/feature1.feature

Feature: Test cucumber automation
  As a wellnet front-end developer
  I want to automate e2e testing
  So that I can avoid regressions

  
  Scenario: Altro test
    Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html/index.html"
    Then I fill input "name" with value "Name value"
    Then I fill text area "description" with value "Description value"
    Then I choose "tre" from select box "mySelect"
    Then I choose "due" from radio button list "myRadio"
    Then I choose "uno&tre" from checkbox list "myCheck"
    
	    