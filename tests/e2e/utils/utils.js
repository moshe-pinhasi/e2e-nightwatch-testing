// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = (browser) => {
  return {
    openBrowser:() => {
      browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible('.login', 5000)
  
      return browser
    }
  }
}
  