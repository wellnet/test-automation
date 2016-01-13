# features/feature1.feature

Feature: Test cucumber automation
 As a wellnet front-end developer
 I want to automate e2e testing
 So that I can avoid regressions

    Scenario: Test
    	Given I go on "http://localhost:8888/test/homepage.php"
    	When I fill the input with label "Nome" with value "Ciaooooo"
    	Then The link "Pagina_1" should be present
    	Then The link "Pagfdsina_1" should not be present
    	When I click on the link "Pagina_1"
    	Then I move to "https://it.wikipedia.org/wiki/Pagina_princicdcpale"