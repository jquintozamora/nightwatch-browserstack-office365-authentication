nightwatch_config = {
    src_folders: ["tests/project"],

    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    common_capabilities: {
        'build': 'nightwatch-browserstack',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'YourUserName',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'YourKey',
        'browserstack.debug': true
    },

    test_settings: {
        default: {},
        chrome: {

            desiredCapabilities: {
                'os': 'Windows',
                'os_version': '8.1',
                'browser': 'Chrome',
                'browserName': 'Chrome',
                'browser_version': '46.0',
                'resolution': '1280x1024'
            }
        },
        iphone: {

            desiredCapabilities: {
                'browserName': 'iPhone',
                'platform': 'MAC',
                'device': 'iPhone 5S'
            }
        },
        safari: {

            desiredCapabilities: {
                'os': 'OS X',
                'os_version': 'Sierra',
                'browser': 'Safari',
                'browserName': 'Safari',
                'browser_version': '10.0',
                'resolution': '1024x768'
            }
        },
        ie: {
            desiredCapabilities: {
                'os': 'Windows',
                'os_version': '8.1',
                'browser': 'IE',
                'browserName': 'IE',
                'browser_version': '11.0',
                'resolution': '1280x800'
            }
        }
    }
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;