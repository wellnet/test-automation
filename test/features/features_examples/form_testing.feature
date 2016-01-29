# features/feature1.feature

Feature: Test cucumber automation
 As a wellnet front-end developer
 I want to automate e2e testing
 So that I can avoid regressions

    Scenario: Used to test the input fields of the form
    	Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html_examples/form_example.html"
    	When I fill the input with selector "#name" with value "Emanuele"
    	When I fill the input with label "Lastname" with value "Giarlini"
    	Then The value of input with selector "#name" should be "Emanuele"
    	Then The value of input with label "Lastname" should be "Giarlini"
    	Then The input with selector "#address" should have "required" as class
    	Then The input with label "Email" should have "error-message" as class
    	Then The input with selector "#name" should not have "error" as class
    	Then The input with label "Lastname" should not have "error" as class

    Scenario: Used to test the textareas of the form 
        Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html_examples/form_example.html"
        When I fill the textarea with selector "#description" with value "My name is Emanuele, and I'm a software developer"
        When I fill the textarea with label "Hobbies" with value "I play guitar and read a lot of books"
        Then The text of the textarea with selector "#description" should be "My name is Emanuele, and I'm a software developer"
        Then The text of the textarea with label "Hobbies" should be "I play guitar and read a lot of books"
        Then The textarea with selector "#description" should have "error-message" as class
        Then The textarea with label "Hobbies" should not have "test" as class
        Then The textarea with selector "#description" should not have "test" as class

    Scenario: Used to test the select of the form
        Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html_examples/form_example.html"
        When I check "25 - 34" from select box with selector "#age"
        When I check "Germany" from select box with label "Country"
        Then The value of the select with selector "#age" should be "25 - 34"
        Then The value of the select with selector "#age" should not be "18 - 24"
        Then The value of the select with label "Country" should be "Germany"
        Then The value of the select with label "Country" should not be "Italy"
        Then The select with label "Country" should have these options "Italy&United Kingdom&Germany&France"
        Then The select with selector "#age" should have "error" as class
        Then The select with selector "#age" should not have "test" as class
        Then The select with label "Country" should have "required" as class
        Then The select with label "Country" should not have "error" as class

    Scenario: Used to test radiobuttons and checkboxes
        Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html_examples/form_example.html"
        When I check the radio button with label "Male"
        Then The radio button with label "Male" should be checked
        Then The radio button with label "Female" should not be checked
        When I check the radio button with selector "#female"
        Then The radio button with selector "#female" should be checked
        Then The radio button with selector "#male" should not be checked
        Then I check the checkboxes with labels "December&June"
        Then I check the checkboxes with selectors "#october&#june"








