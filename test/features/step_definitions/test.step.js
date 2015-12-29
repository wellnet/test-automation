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
  this.When(/^I click the "([^"]*)" with selector "([^"]*)"$/, function(pageElement, elementSelector, callback){
    var selectedElement = element(by.css(elementSelector));

    selectedElement.click();

    callback();
  });

/*---------------- FUNCTION USED TO FILL FORM ELEMENTS -----------------------------*/

  /*
  ** Fill an input with a given name
  */
  this.Then(/^I fill input "([^"]*)" with value "([^"]*)"$/, function(inputName, value, callback){
    var selectedElement = element(by.css("input[name='" + inputName + "']"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Fill a text area with a given name
  */
  this.Then(/^I fill text area "([^"]*)" with value "([^"]*)"$/, function(textareaName, value, callback){
    var selectedElement = element(by.css("textarea[name='" + textareaName + "']"));

    selectedElement.clear().sendKeys(value);

    callback();
  });

  /*
  ** Choose an option from a select box
  */
  this.Then(/^I choose "([^"]*)" from select box "([^"]*)"$/, function(chosenElement, selectName, callback){
    var selectedElement = element(by.cssContainingText("select[name='" + selectName + "']" + ' option', chosenElement));
    
    selectedElement.click();

    callback();
  });

  /*
  ** Choose an option from a radio button list
  */
  this.Then(/^I choose "([^"]*)" from radio button list "([^"]*)"$/, function(chosenElement, containerName, callback){
    var selectedElement = element(by.css("div[name='" + containerName + "']" + " input[name='" + chosenElement + "']", chosenElement));
    
    selectedElement.click();

    callback();
  });

  /*
  ** Choose an option from a checkbox list.
  ** Use "&" as separator in chosenElements -> "element1&element2&element3"
  */
  this.Then(/^I choose "([^"]*)" from checkbox list "([^"]*)"$/, function(chosenElements, containerName, callback){
    var selectedElement;
    var elements = chosenElements.split("&");

    for(var i = 0 ; i < elements.length ; i++){
      selectedElement = element(by.css("div[name='" + containerName + "']" + " input[name='" + elements[i] + "']"));
    
      selectedElement.click();
    }
    
    callback();
  });

  /*
  ** Check if the text of the element with a given selector is equal to myText.
  */
  this.Then(/^The text of the "([^"]*)" with selector "([^"]*)" should be "([^"]*)"$/, function(pageElement, elementSelector, myText, callback){
    var selectedElement = element(by.css(elementSelector));

    //Resolve the promise
    selectedElement.getText().then(function(text){
      expect(text).to.equal(myText);
    });

    callback();
  });



  /*
  this.When(/^Test$/, function(callback){

    var button = element(by.css('#menuId .test-button'));

    //expect(button.getText()).to.equal('Bottone prova');
    //expect(browser.getCurrentUrl()).to.eventually.equal('file:///Users/Emanuele/Desktop/lavoro/test-automation/app/html/index.html');


    callback();
  });
  
  
  this.When(/^I click the register button$/, function(callback) {
    element(by.linkText('Chi siamo')).click();
    callback();
  });

  this.Then(/^The browser goes to the registration page$/, function(callback) {
    expect(browser.getCurrentUrl()).to.eventually.equal('http://www.wellnet.it/chi-siamo');
    
    callback();
  });
  */


};
