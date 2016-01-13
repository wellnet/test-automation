// features/step_definitions/test.step.js
'use strict';

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

// Protractor won't wait for Angular
browser.ignoreSynchronization = true;

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

    browser.driver.wait(function() {
      return browser.getCurrentUrl().then(function (currentUrl) {
                return currentUrl === url;
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

    expect(selectedElement.getAttribute("value")).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if the value of input, identified by a label, is equal to a given value
  */
  this.Then(/The value of input with label "([^"]*)" should be "([^"]*)"/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    expect(selectedElement.getAttribute("value")).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if the input, identified by a CSS selector, has a given class
  */
  this.Then(/The input with selector "([^"]*)" should have "([^"]*)" as class/, function(elementSelector, className, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).and.notify(callback);
  });

  /*
  ** Check if the value of input, identified by a label, has a given class
  */
  this.Then(/The input with label "([^"]*)" should have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::input"));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).and.notify(callback);

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

    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if the text of textarea, identified by a label, is equal to a given value
  */
  this.Then(/The text of the textarea with label "([^"]*)" should be "([^"]*)"/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::textarea"));

    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if the textarea, identified by a CSS selector, has a given class
  */
  this.Then(/The textarea with selector "([^"]*)" should have "([^"]*)" as class/, function(elementSelector, className, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).and.notify(callback);
  });

  /*
  ** Check if the textarea, identified by a label, has a given class
  */
  this.Then(/The textarea with label "([^"]*)" should have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::textarea"));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).and.notify(callback);

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
    
    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);
  });

  /*
  ** Check if the value of the select, identified by a label, is equal to a given value
  */
  this.Then(/^The value of the select with label "([^"]*)" should be "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::select"));
    
    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);
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

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).and.notify(callback);
  });

  /*
  ** Check if the select, identified by a label, has a given class
  */
  this.Then(/The select with label "([^"]*)" should have "([^"]*)" as class/, function(labelName, className, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/following-sibling::select"));

    expect(selectedElement.getAttribute("class")).to.eventually.have.string(className).and.notify(callback);

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

    expect(selectedElement.getAttribute("checked")).to.eventually.equal("true").and.notify(callback);
  });

  /*
  ** Check if the radio button with a given label is NOT checked
  */
  this.Then(/^The radio button with label "([^"]*)" should not be checked$/, function(labelName, callback){
    var selectedElement = element(by.xpath("//label[. = '" + labelName + "']/preceding-sibling::input[1]"));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal(null).and.notify(callback);
  });

  /*
  ** Check if the radio button with a given CSS selector is checked
  */
  this.Then(/^The radio button with selector "([^"]*)" should be checked$/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal("true").and.notify(callback);
  });

  /*
  ** Check if the radio button with a given CSS selector is NOT checked
  */
  this.Then(/^The radio button with selector "([^"]*)" should not be checked$/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("checked")).to.eventually.equal(null).and.notify(callback);
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
    expect(browser.getCurrentUrl()).to.eventually.equal(myUrl);

    callback();
  });

  /*
  ** Check if the url of this page contains myString
  */
  this.Then(/^The url of the page contains "([^"]*)"$/, function(myString, callback){
    expect(browser.getCurrentUrl()).to.eventually.have.string(myString);

    callback();
  });

  /*
  ** Check if the title of this page contains is equal to myTitle
  */
  this.Then(/^The title of the page should be "([^"]*)"$/, function(myTitle, callback){
    expect(browser.getTitle()).to.eventually.equal(myTitle);

    callback();
  });


  /*
  ** Check if the text of the element with a given selector is equal to myText.
  */
  this.Then(/^The text of the element with selector "([^"]*)" should be "([^"]*)"$/, function(elementSelector, myText, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getText()).to.eventually.equal(myText);

    callback();

  });

  /*
  ** Check if a given text IS present in the page
  */
  this.Then(/^The text "([^"]*)" should be present$/, function(myText, callback){

    var selectedElement = element(by.xpath("//*[contains(., '" + myText + "')]"));
    
    expect(selectedElement.isPresent()).to.eventually.equal(true, "This text is not present in page");

    callback();

  });

  /*
  ** Check if a given text IS NOT present in the page
  */
  this.Then(/^The text "([^"]*)" should not be present$/, function(myText, callback){

    var selectedElement = element(by.xpath("//*[contains(., '" + myText + "')]"));
    
    expect(selectedElement.isPresent()).to.eventually.equal(false, "This text is present in page");

    callback();    

  });

  /*
  ** Check if a given link does IS present in the page
  */
  this.Then(/^The link "([^"]*)" should be present$/, function(myText, callback){

    var selectedElement = element(by.cssContainingText("a", myText));    
    
    expect(selectedElement.isPresent()).to.eventually.equal(true, "This link is not present in page");

    callback();    

  });

  /*
  ** Check if a given link does IS NOT present in the page
  */
  this.Then(/^The link "([^"]*)" should not be present$/, function(myText, callback){

    var selectedElement = element(by.cssContainingText("a", myText));    
    
    expect(selectedElement.isPresent()).to.eventually.equal(false, "This link is present in page");

    callback();

  });

  /*
  ** Check if an elementi IS present in a page. This element is identified by a CSS selector
  */
  this.Then(/The element with selector "([^"]*)" should be present/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.isPresent()).to.eventually.equal(true, "Can't find the element with selector '" + elementSelector + "' that should be present");

    callback();
  });

  /*
  ** Check if an elementi IS NOT present in a page. This element is identified by a CSS selector
  */
  this.Then(/The element with selector "([^"]*)" should not be present/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.isPresent()).to.eventually.equal(false, "The element with selector '" + elementSelector + "' should not be present but appears");

    callback();
  });

  /*
  ** Check if the number of elements identified by a CSS selector is exactly the same as numElements 
  */
  this.Then(/I should see exactly "([^"]*)" elements with selector "([^"]*)"/, function(numElements, elementSelector, callback){
    var selectedElements = element.all(by.css(elementSelector));
    var elementsFound = selectedElements.count();

    expect(elementsFound).to.eventually.equal(parseInt(numElements), "Can't find exactly" + numElements + " elements with selector '" + elementSelector + "'");

    callback();
  });

  /*
  ** Check if the number of elements identified by a CSS selector is at least the same as numElements 
  */
  this.Then(/I should see at least "([^"]*)" elements with selector "([^"]*)"/, function(numElements, elementSelector, callback){
    var selectedElements = element.all(by.css(elementSelector));
    var elementsFound = selectedElements.count();

    expect(elementsFound).to.be.at.least(parseInt(numElements));

    callback();
  });

  /*
  ** Check if an img specified by a CSS selector contains a given url 
  */
  this.Then(/^The img tag with selector "([^"]*)" contains the image "([^"]*)"$/, function(elementSelector, imageUrl, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("src")).to.eventually.equal(imageUrl);

    callback();
  });


//--------------------- TEST ---------------------//

  this.Then(/^I move to "([^"]*)"$/, function(newUrl, callback){
  //mi aspetto che l'url sia uguale
    browser.driver.wait(function() {
      return browser.getCurrentUrl().then(function (url) {
                return url === newUrl;
            }); 
    }, 10000, "ERROREEEE!!");

    callback();
  });

  
};
