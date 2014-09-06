var config = require('../config');
var checkforCompletelyLogout = function(browser) {
    return browser.isVisible('a[name="Button1"]');
};


module.exports = {
    login: function(browser) {
        var launchURL = config.launchURL(browser);

        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            //Making sure there are not cached values while logging in
            .clearValue('#UserName')
            .clearValue('#Password')
            .setValue('#UserName', 'hr@oracle.xxx')
            .setValue('#Password', 'test')
            .waitForElementVisible('#LoginButton', 1000)
            .click('#LoginButton')
            .pause(1000)
            .assert.title('Jobvite - Dashboard');
    },

    logout: function(browser) {
        browser
            .moveToElement('#hr-accountNav', 10, 10, function() {
                browser
                    .pause(1000)
                    .waitForElementVisible('#hr-profileToggleNext', 1000)
                    .click('#hr-userLogout a')
                    .pause(1000)
                    .assert.title('Jobvite - Login');
            });

        // Completely logout if link is available
        if (checkforCompletelyLogout(browser)) {
            browser.click('a[name="Button1"]');
        }
    }
};
