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

    callback();
  });

  /*
  ** Click on element with a given selector
  ** Ex. "#menu .button", "button[name="foo"]"
  */
  this.When(/^I click on the element with selector "([^"]*)"$/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    selectedElement.click();

    callback();
  });

/*---------------- FUNCTION USED TO FILL FORM ELEMENTS -----------------------------*/

  /*
  ** Fill an input identified by a CSS selector
  */
  this.When(/^I fill input with selector "([^"]*)" with value "([^"]*)"$/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Fill a text area identified by a CSS selector
  */
  this.When(/^I fill text area with selector "([^"]*)" with value "([^"]*)"$/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Fill a input using a given label. 
  ** IMPORTANT: the label must be equal to the field data-test-label of the input element.
  ** Es.
  ** <label>User Name</label>
  ** <input data-test-label="User Name">
  */
  this.When(/^I fill the input "([^"]*)" with value "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.css("input[data-test-label='" + labelName + "']"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Same as the previous but used for Scenario Outline
  */
  this.When(/^I fill the input (.*) with value (.*) using table$/, function(labelName, value, callback){
    var selectedElement = element(by.css("input[data-test-label='" + labelName + "']"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Fill a text area using a given label. 
  ** IMPORTANT: the label must be equal to the field data-test-label of the text area.
  ** Es.
  ** <label>User Description</label>
  ** <textarea data-test-label="User Description"></textarea>
  */
  this.When(/^I fill the textarea "([^"]*)" with value "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.css("textarea[data-test-label='" + labelName + "']"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Same as the previous but used for Scenario Outline
  */
  this.When(/^I fill the textarea (.*) with value (.*) using table$/, function(labelName, value, callback){
    var selectedElement = element(by.css("textarea[data-test-label='" + labelName + "']"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Choose an option from a select box using a given label
  ** IMPORTANT: the label must be equal to the field data-test-label of the select.
  ** Es.
  ** <label>Chose one</label>
  ** <select data-test-label="Chose one"></select>
  */
  this.When(/^I check "([^"]*)" from select box "([^"]*)"$/, function(chosenElement, selectName, callback){
    var selectedElement = element(by.cssContainingText("select[data-test-label='" + selectName + "']" + ' option', chosenElement));
    
    selectedElement.click();

    callback();
  });

  /*
  ** Choose an option from a radio button list
  */
  this.When(/^I check "([^"]*)" from radio button list "([^"]*)"$/, function(chosenElement, containerName, callback){
    var selectedElement = element(by.css("div[name='" + containerName + "']" + " input[name='" + chosenElement + "']", chosenElement));
    
    selectedElement.click();

    callback();
  });

  /*
  ** Choose an option from a checkbox list.
  ** Use "&" as separator in chosenElements -> "element1&element2&element3"
  */
  this.When(/^I check "([^"]*)" from checkbox list "([^"]*)"$/, function(chosenElements, containerName, callback){
    var selectedElement;
    var elements = chosenElements.split("&");

    for(var i = 0 ; i < elements.length ; i++){
      selectedElement = element(by.css("div[name='" + containerName + "']" + " input[name='" + elements[i] + "']"));
    
      selectedElement.click();
    }
    
    callback();
  });


  this.When(/I fill the form with selector "([^"]*)" using these data$/, function(elementSelector, table, callback){
    var data = table.hashes();

    for(let i = 0 ; i < data.length ; i++){

    }

    calback();
  });

/*---------------- FUNCTION USED TO CHECK IF TEXT OR ELEMENTS ARE PRESENT -----------------------------*/

  /*
  ** Check if the url of this page is equal to myUrl
  */
  this.Then(/^The url of the page should be "([^"]*)"$/, function(myUrl, callback){
    expect(browser.getCurrentUrl()).to.eventually.equal(myUrl).and.notify(callback);
  });

  /*
  ** Check if the url of this page contains myString
  */
  this.Then(/^The url of the page contains "([^"]*)"$/, function(myString, callback){
    expect(browser.getCurrentUrl()).to.eventually.have.string(myString).and.notify(callback);
  })


  /*
  ** Check if the text of the element with a given selector is equal to myText.
  */
  this.Then(/^The text of the element with selector "([^"]*)" should be "([^"]*)"$/, function(elementSelector, myText, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getText()).to.eventually.equal(myText).and.notify(callback);    

  });

  /*
  ** Check if the value of input identified by a CSS selector is equal to a given value
  */
  this.Then(/The value of input with selector "([^"]*)" should be "([^"]*)"/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getAttribute("value")).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if the text of textarea identified by a CSS selector is equal to a given value
  */
  this.Then(/The text of the textarea with selector "([^"]*)" should be "([^"]*)"/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if the value of the select identified by a CSS selector is equal to a given value
  */
  this.Then(/^The value of the select with selector "([^"]*)" should be "([^"]*)"$/, function(elementSelector, value, callback){
    var selectedElement = element(by.css(elementSelector + ' option:first-child'));
    
    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);
  });

  /*
  ** Check if an input, identified by a label, contains a given value. 
  ** IMPORTANT: the label must be equal to the field data-test-label of the input element.
  ** Es.
  ** <label>User Name</label>
  ** <input data-test-label="User Name">
  */
  this.Then(/^The input "([^"]*)" has value "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.css("input[data-test-label='" + labelName + "']"));

    expect(selectedElement.getAttribute("value")).to.eventually.equal(value).and.notify(callback);
  });

  /*
  ** Check if a textarea, identified by a label, contains a given value.
  ** IMPORTANT: the label must be equal to the field data-test-label of the text area.
  ** Es.
  ** <label>User Description</label>
  ** <textarea data-test-label="User Description"></textarea>
  */
  this.Then(/^The textarea "([^"]*)" has value "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.css("textarea[data-test-label='" + labelName + "']"));

    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);

  });

  /*
  ** Check if an option from a select box is checked. The select box is selected using the label
  ** IMPORTANT: the label must be equal to the field data-test-label of the select.
  ** Es.
  ** <label>Chose one</label>
  ** <select data-test-label="Chose one"></select>
  */
  this.Then(/^The select "([^"]*)" has value "([^"]*)"$/, function(labelName, value, callback){
    var selectedElement = element(by.css("select[data-test-label='" + labelName + "']" + ' option:first-child'));
    
    expect(selectedElement.getText()).to.eventually.equal(value).and.notify(callback);
  });


  /*
  ** Check if an elementi IS present in a page. This element is identified by a CSS selector
  */
  this.Then(/The element with selector "([^"]*)" should be present/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.isPresent()).to.eventually.equal(true, "Can't find the element with selector '" + elementSelector + "' that should be present").and.notify(callback);
  });

  /*
  ** Check if an elementi IS NOT present in a page. This element is identified by a CSS selector
  */
  this.Then(/The element with selector "([^"]*)" should not be present/, function(elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    expect(selectedElement.isPresent()).to.eventually.equal(false, "The element with selector '" + elementSelector + "' should not be present but appears").and.notify(callback);
  });

  /*
  ** Check if the number of elements identified by a CSS selector is exactly the same as numElements 
  */
  this.Then(/I should see exactly "([^"]*)" elements with selector "([^"]*)"/, function(numElements, elementSelector, callback){
    var selectedElements = element.all(by.css(elementSelector));
    var elementsFound = selectedElements.count();

    expect(elementsFound).to.eventually.equal(parseInt(numElements), "Can't find exactly" + numElements + " elements with selector '" + elementSelector + "'").and.notify(callback);
  });

  /*
  ** Check if the number of elements identified by a CSS selector is at least the same as numElements 
  */
  this.Then(/I should see at least "([^"]*)" elements with selector "([^"]*)"/, function(numElements, elementSelector, callback){
    var selectedElements = element.all(by.css(elementSelector));
    var elementsFound = selectedElements.count();

    expect(elementsFound).to.be.at.least(parseInt(numElements)).and.notify(callback);
  });


  
};
