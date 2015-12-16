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

  this.Given(/^I visit the home page$/, function(callback) {
    browser.get('http://www.wellnet.it/');

    // TODO replace sleep!
    browser.sleep(7 * 1000).then(callback);
    // expect(element(by.linkText('REGISTRATI')).isDisplayed()).to.become(true).and.notify(callback);
  });

  this.When(/^I click the register button$/, function(callback) {
    element(by.linkText('Chi siamo')).click();
    callback();
  });

  this.Then(/^The browser goes to the registration page$/, function(callback) {
    expect(browser.getCurrentUrl()).to.eventually.equal('http://www.wellnet.it/chi-siamo');
    expect(browser.getTitle()).to.eventually.equal('Azienda | Chi siamo | Sviluppo Software Web | Wellnet Milano')
      .and.notify(callback);
  });

};