# features/feature1.feature

Feature: Test cucumber automation
 As a wellnet front-end developer
 I want to automate e2e testing
 So that I can avoid regressions

    Scenario: Tests the input fields of the given form
    	Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html_examples/form_example.html"
    	When I fill the input with selector "#name" with value "Emanuele"
    	When I fill the input with label "Lastname" with value "Giarlini"
    	Then I stop here
    	Then The value of input with selector "#name" should be "Emanuele"
    	Then The value of input with label "Lastname" should be "Giarlini"
    	Then The input with selector "#address" should have "required" as class
    	Then The input with label "Email" should have "error-message" as class
    	Then The input with selector "#name" shouldn't have "error" as class
    	Then The input with label "Lastname" shouldn't have "error" as class

