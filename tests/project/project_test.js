module.exports = {
  "Home Page Screenshot" : function (browser) {
    browser
      .url("https://yourtenant.sharepoint.com/sites/yoursite/Pages/Home.aspx")
      .waitForElementVisible('input[id="cred_userid_inputtext"]', 5000)
      .setValue('input[id="cred_userid_inputtext"]', 'user@yourtenant.onmicrosoft.com')
      .setValue('input[id="cred_password_inputtext"]', 'password')
      .pause(3000)
      .click('button[id="cred_sign_in_button"]')
      .pause(50000)
      .saveScreenshot('./screenshots/' + browser.options.desiredCapabilities.browserName + '/HomePage.png')
      .assert.elementPresent('div[class="companySecondNav__mobile"]')
      .click('div[class="companySecondNav__mobile"]')
      .pause(3000)
      .saveScreenshot('./screenshots/' + browser.options.desiredCapabilities.browserName + '/HomePageExpanded.png')
      .end();
  }
};