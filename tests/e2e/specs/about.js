// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const utils = require('../utils/utils')

module.exports = {
  '@tags': ['about'],
  before: (browser) => {
    utils(browser).openBrowser()
  },

  'btn should be disabled with "is-block" class': browser => {
    browser
      .expect.element('button').to.not.be.enabled
    
    browser.assert.cssClassPresent('button', 'is-block')
      .pause(1000)
      .end()
  }
}
