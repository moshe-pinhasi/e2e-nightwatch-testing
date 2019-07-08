// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const utils = require('../utils/utils')

module.exports = {
  '@tags': ['login'],
  before: (browser) => {
    utils(browser).openBrowser()
  },

  'Loging btn should be disabled when no inputs': browser => {
    browser
      .assert.elementPresent('button')
      .assert.containsText('button', 'Login')
      .assert.attributeEquals('button', 'disabled', "true")
      .expect.element('button').to.not.be.enabled

      // browser.end() // if we want to run the broswer again we need to call end
  },

  'Should loging with admin user': browser => {
    browser
      .setValue('input[name=Username]', 'admin')
      .setValue('input[name=Password]', 'pass')
      .expect.element('button').to.be.enabled

    browser.click('button')
      .assert.cssClassPresent('button', 'is-loading')
      .pause(1000)
      .end()
  }
}
