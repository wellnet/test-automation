# features/feature1.feature

Feature: Test cucumber automation
  As a wellnet front-end developer
  I want to automate e2e testing
  So that I can avoid regressions

  
  Scenario: Altro test
    Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html/index.html"
    
  Scenario Outline: Fill complex form
  	Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html/index.html"
  	Then I should see exactly "1" elements with selector "form"
  	Then I fill the input <label> with value <value> using table
  	Then I fill the input "Indirizzo" with value "Indirizzo"

  	Examples:
	    |  label   |  value    |
	    |  Nome    |  Emanuele |
	    |  Cognome |  Giarlini |
	    |  Citta   |  Roma     |


	Scenario Outline: Fill complex form
  	Given I go on "file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html/index.html"
  	Then I should see at least "0" elements with selector "form"
  	Then I fill the textarea <label> with value <value> using table
  	Then I fill the textarea "Description tre" with value "Descrizione tre"

  	Examples:
	    |  label              |  value           |
	    |  Description uno    |  Descrizione uno |
	    |  Description due    |  Descrizione due |

	    



	  



    
	    