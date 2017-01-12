# nightwatch-browserstack with Office 365 Authentication
[Nightwatch](http://nightwatchjs.org/) Integration with BrowserStack with Office 365 authentication based on this [BrowserStack template](https://github.com/browserstack/nightwatch-browserstack)


## Setup
* Clone the repo
* Install dependencies `npm install`
* Update `*.conf.js` files inside the `conf/` directory with your BrowserStack Username and Access Key(https://www.browserstack.com/accounts/settings)

## Running your tests
- To run a test, run `npm run alltests` or `npm run iphone` (you can add more configuration too)

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
## Additional Resources
* [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Nigthwatch samples](http://nightwatchjs.org/guide#test-settings)
* [Nightwatch API](http://nightwatchjs.org/api)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using Selenium and C#](http://www.hanselman.com/blog/DistributedAutomatedBrowserTestingWithSeleniumAndBrowserStack.aspx)
* [Build desiredCapabilities config](https://www.browserstack.com/automate/nightwatch)
