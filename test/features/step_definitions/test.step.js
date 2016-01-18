// features/step_definitions/test.step.js
'use strict';

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);


var expect = chai.expect;

// Protractor won't wait for Angular
browser.ignoreSynchronization = true;


var errorPage = browser.get("http://www.gwgwdvw.com");


module.exports = function() {

  
  this.World = require('../support/world').World;

  // default timeout for all step definitions
  this.setDefaultTimeout(20 * 1000);

  /*
  ** Open a page based on an absolute url
  ** Ex. https://www.google.com
  */
  this.Given(/^I go on "([^"]*)"$/, function(url, callback){

    browser.get(url);
    expect(browser.getCurrentUrl()).to.eventually.equal(url).notify(callback);

  });

  /*
  ** Check if I'm on a page with a given url
  */
  this.Then(/^I'm on "([^"]*)"$/, function(newUrl, callback){
  //mi aspetto che l'url sia uguale
    browser.driver.wait(function() {
      return browser.getCurrentUrl().then(function (url) {
                return url === newUrl;
            }); 
    }, 10000, "ERROREEEE!!");

    callback();
  });

/*---------------- FUNCTION USED TO CLICK ON ELEMENTS ELEMENTS -----------------------------*/

  /*
  ** Click on element with a given CSS selector
  ** Ex. "#menu .button", "button[name="foo"]"
  */
  this.When(/^I click on the element with selector "([^"]*)"$/, function(elementSelector, callback){

    var selectedElementExists = by.css(elementSelector);            
    browser.driver.wait(function() {
        return browser.driver.isElementPresent(selectedElementExists); 
    }, 1000);
    
    var selectedElement = element(by.css(elementSelector));
    selectedElement.click();


    callback();
  });


  /*
  ** Click on a link with a particular text
  */
  this.When(/^I click on the link "([^"]*)"$/, function(myText, callback){

    var selectedElement = element(by.cssContainingText("a", myText));    
    
    selectedElement.click();

    callback();
  });


/*---------------- FUNCTION USED TO INTERACT WITH FORM ELEMENTS -----------------------------*/

  ///INPUT-----
  /*
  ** Fill an input identified by a CSS selector
  */
  this.When(/^I fill the input with selector "([^"]*)" with value "([^"]*)"$/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Fill a input using a given label. 
  */
  this.When(/I fill the input with label "([^"]*)" with value "([^"]*)"/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    selectedElement.clear().sendKeys(value);

    callback();

  });

  /*
  ** Same as the previous but used for Scenario Outline
  */
  this.When(/^I fill the input (.*) with value (.*) using table$/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Check if the value of input, identified by a CSS selector, is equal to a given value
  */
  this.Then(/The value of input with selector "([^"]*)" should be "([^"]*)"/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("value")).to.eventually.equal(value).notify(callback);

  });

  /*
  ** Check if the value of input, identified by a label, is equal to a given value
  */
  this.Then(/The value of input with label "([^"]*)" should be "([^"]*)"/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    expect(selectedElement.getAttribute("value")).to.eventually.equal(value).notify(callback);

  });

  /*
  ** Check if the input, identified by a CSS selector, has a given class
  */
  this.Then(/The input with selector "([^"]*)" should have "([^"]*)" as class/, function(elementSelector, className, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).notify(callback);
  });

  /*
  ** Check if the input, identified by a label, has a given class
  */
  this.Then(/The input with label "([^"]*)" should have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).notify(callback);

  });

  /*
  ** Check if the input, identified by a CSS selector, hasn't a given class
  */
  this.Then(/The input with selector "([^"]*)" shouldn't have "([^"]*)" as class/, function(elementSelector, className, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("class")).to.eventually.not.have.string(className).notify(callback);
  });

  /*
  ** Check if the input, identified by a label, hasn't a given class
  */
  this.Then(/The input with label "([^"]*)" shouldn't have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    expect(selectedElement.getAttribute("class")).to.eventually.not.have.string(className).notify(callback);

  });

  


  ///TEXTAREA-----
  /*
  ** Fill a text area identified by a CSS selector
  */
  this.When(/^I fill text area with selector "([^"]*)" with value "([^"]*)"$/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Fill a text area using a given label. 
  */
  this.When(/^I fill the textarea with label "([^"]*)" with value "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::textarea"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Same as the previous but used for Scenario Outline
  */
  this.When(/^I fill the textarea (.*) with value (.*) using table$/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::textarea"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Check if the text of textarea, identified by a CSS selector, is equal to a given value
  */
  this.Then(/The text of the textarea with selector "([^"]*)" should be "([^"]*)"/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getText()).to.eventually.equal(value).notify(callback);

  });

  /*
  ** Check if the text of textarea, identified by a label, is equal to a given value
  */
  this.Then(/The text of the textarea with label "([^"]*)" should be "([^"]*)"/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::textarea"));

    expect(selectedElement.getText()).to.eventually.equal(value).notify(callback);

  });

  /*
  ** Check if the textarea, identified by a CSS selector, has a given class
  */
  this.Then(/The textarea with selector "([^"]*)" should have "([^"]*)" as class/, function(elementSelector, className, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className);

    callback();
  });

  /*
  ** Check if the textarea, identified by a label, has a given class
  */
  this.Then(/The textarea with label "([^"]*)" should have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::textarea"));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className);

    callback();

  });

  ///SELECT BOX-----
  /*
  ** Choose an option from a select box using a CSS selector
  */
  this.When(/^I check "([^"]*)" from select box with selector "([^"]*)"$/, function(chosenElement, elementSelector, callback){
    var selectedElement = element(by.cssContainingText(elementSelector + " option", chosenElement));    
    
    selectedElement.click();

    callback();
  });

  /*
  ** Choose an option from a select box using a given label
  */
  this.When(/^I check "([^"]*)" from select box with label "([^"]*)"$/, function(chosenElement, labelName, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::select/option[. = '" + chosenElement + "']"));
    
    selectedElement.click();

    callback();
  });

  /*
  ** Check if the value of the select, identified by a CSS selector, is equal to a given value
  */
  this.Then(/^The value of the select with selector "([^"]*)" should be "([^"]*)"$/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector + ' option:first-child'));
    
    expect(selectedElement.getText()).to.eventually.equal(value);

    callback();
  });

  /*
  ** Check if the value of the select, identified by a label, is equal to a given value
  */
  this.Then(/^The value of the select with label "([^"]*)" should be "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::select"));
    
    expect(selectedElement.getText()).to.eventually.equal(value);
    
    callback();
  });

  /*
  ** Check if the select, identified by a label, contains some options. Use & as separator for the option list
  */
  this.Then(/^The select with label "([^"]*)" should have these options "([^"]*)"$/, function(labelName, optionsList, callback){
    
    var selectedElement
    var elements = optionsList.split("&");

    for(var i = 0 ; i < elements.length ; i++){
      selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::select/option[text() = '" + elements[i] + "']"));
      expect(selectedElement.isPresent()).to.eventually.equal(true, "'" + elements[i] + "' is not an option.");
    }
    
  });

  /*
  ** Check if the select, identified by a CSS selector, has a given class
  */
  this.Then(/The select with selector "([^"]*)" should have "([^"]*)" as class/, function(elementSelector, className, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className);
    
    callback();
  });

  /*
  ** Check if the select, identified by a label, has a given class
  */
  this.Then(/The select with label "([^"]*)" should have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::select"));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className);
    
    callback();

  });

  ///RADIO BUTTON-----
  /*
  ** Choose an option from a radio button list using a given label
  */
  this.When(/^I check the radio button with label "([^"]*)"$/, function(labelName, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']"));
    
    selectedElement.click();

    callback();
  });

  /*
  ** Check if the radio button with a given label is checked
  */
  this.Then(/^The radio button with label "([^"]*)" should be checked$/, function(labelName, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/preceding-sibling::input[1]"));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal("true");
    
    callback();
  });

  /*
  ** Check if the radio button with a given label is NOT checked
  */
  this.Then(/^The radio button with label "([^"]*)" should not be checked$/, function(labelName, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/preceding-sibling::input[1]"));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal(null);
    
    callback();
  });

  /*
  ** Check if the radio button with a given CSS selector is checked
  */
  this.Then(/^The radio button with selector "([^"]*)" should be checked$/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal("true");
    
    callback();
  });

  /*
  ** Check if the radio button with a given CSS selector is NOT checked
  */
  this.Then(/^The radio button with selector "([^"]*)" should not be checked$/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal(null);
    
    callback();
  });

  ///CHECKBOXES-----
  /*
  ** Choose one or more options from a checkbox list. Use "&" as separator in chosenElements.
  ** Es: "element1&element2&element3"
  */
  this.When(/^I check the checkboxes "([^"]*)"$/, function(checkboxList, callback){
    var selectedElement;
    var elements = checkboxList.split("&");    

    for(var i = 0 ; i < elements.length ; i++){
      selectedElement = element(by.xpath("//label[. = '" + elements[i] + "']"));
    
      selectedElement.click();
    }

    callback();
  });



/*---------------- FUNCTION USED TO CHECK IF TEXT OR ELEMENTS ARE PRESENT -----------------------------*/

  /*
  ** Check if the url of this page is equal to myUrl
  */
  this.Then(/^The url of the page should be "([^"]*)"$/, function(myUrl, callback){
    expect(browser.getCurrentUrl()).to.eventually.equal(myUrl).notify(callback);
  });

  /*
  ** Check if the url of this page is not equal to myUrl
  */
  this.Then(/^The url of the page should not be "([^"]*)"$/, function(myUrl, callback){
    expect(browser.getCurrentUrl()).to.eventually.not.equal(myUrl).notify(callback);
  });

  /*
  ** Check if the url of this page contains myString
  */
  this.Then(/^The url of the page contains "([^"]*)"$/, function(myString, callback){
    expect(browser.getCurrentUrl()).to.eventually.have.string(myString).notify(callback);
  });

  /*
  ** Check if the url of this page does not contain myString
  */
  this.Then(/^The url of the page does not contain "([^"]*)"$/, function(myString, callback){
    expect(browser.getCurrentUrl()).to.eventually.not.have.string(myString).notify(callback);
  });

  /*
  ** Check if the title of this page contains is equal to myTitle
  */
  this.Then(/^The title of the page should be "([^"]*)"$/, function(myTitle, callback){
    expect(browser.getTitle()).to.eventually.equal(myTitle).notify(callback);
  });


  /*
  ** Check if the text of the element with a given selector is equal to myText.
  */
  this.Then(/^The text of the element with selector "([^"]*)" should be "([^"]*)"$/, function(elementSelector, myText, callback){
    
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getText()).to.eventually.equal(myText).notify(callback);
  });

  /*
  ** Check if a given text IS present in the page
  */
  this.Then(/^The text "([^"]*)" should be present$/, function(myText, callback){

    var selectedElement = element(by.xpath("//*[contains(., '" + myText + "')]"));
    
    expect(selectedElement.isPresent()).to.eventually.equal(true, "This text is not present in page").notify(callback);
  });

  /*
  ** Check if a given text IS NOT present in the page
  */
  this.Then(/^The text "([^"]*)" should not be present$/, function(myText, callback){

    var selectedElement = element(by.xpath("//*[contains(., '" + myText + "')]"));
    
    expect(selectedElement.isPresent()).to.eventually.equal(false, "This text is present in page").notify(callback);
  });

  /*
  ** Check if a link with a given name IS present in the page
  */
  this.Then(/^The link "([^"]*)" should be present$/, function(myText, callback){

    var selectedElement = element(by.cssContainingText("a", myText));    
    
    expect(selectedElement.isPresent()).to.eventually.equal(true, "This link is not present in page").notify(callback);
    

  });

  /*
  ** Check if a link with a given name IS NOT present in the page
  */
  this.Then(/^The link "([^"]*)" should not be present$/, function(myText, callback){

    var selectedElement = element(by.cssContainingText("a", myText));    
    
    expect(selectedElement.isPresent()).to.eventually.equal(false, "This link is present in page").notify(callback);

  });

  /*
  ** Check if an elementi IS present in a page. This element is identified by a CSS selector
  */
  this.Then(/The element with selector "([^"]*)" should be present/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.isPresent()).to.eventually.equal(true, "Can't find the element with selector '" + elementSelector + "' that should be present").notify(callback);
  });

  /*
  ** Check if an elementi IS NOT present in a page. This element is identified by a CSS selector
  */
  this.Then(/The element with selector "([^"]*)" should not be present/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.isPresent()).to.eventually.equal(false, "The element with selector '" + elementSelector + "' should not be present but appears").notify(callback);
  });

  /*
  ** Check if the number of elements identified by a CSS selector is exactly the same as numElements 
  */
  this.Then(/I should see exactly "([^"]*)" elements with selector "([^"]*)"/, function(numElements, elementSelector, callback){
    var selectedElements = element.all(by.css(elementSelector));
    var elementsFound = selectedElements.count();

    expect(elementsFound).to.eventually.equal(parseInt(numElements), "Can't find exactly" + numElements + " elements with selector '" + elementSelector + "'").notify(callback);
  });

  /*
  ** Check if the number of elements identified by a CSS selector is at least the same as numElements 
  */
  this.Then(/I should see at least "([^"]*)" elements with selector "([^"]*)"/, function(numElements, elementSelector, callback){
    var selectedElements = element.all(by.css(elementSelector));
    var elementsFound = selectedElements.count();

    expect(elementsFound).to.be.at.least(parseInt(numElements)).notify(callback);
  });

  /*
  ** Check if an img specified by a CSS selector contains a given url 
  */
  this.Then(/^The img tag with selector "([^"]*)" contains the image "([^"]*)"$/, function(elementSelector, imageUrl, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("src")).to.eventually.equal(imageUrl).notify(callback);
  });


//--------------------- TEST ---------------------//

//non faccio nulla e il browser si ferma a debbuggare, studiare browser.stop() per il debug
this.Then(/I stop here/, function(callback){

});  


this.Then(/I stop here for (d+) seconds/, function(seconds, callback){
  var timeToSleep = seconds * 1000;
  browser.sleep(timeToSleep);
  callback();
});  


  
};
