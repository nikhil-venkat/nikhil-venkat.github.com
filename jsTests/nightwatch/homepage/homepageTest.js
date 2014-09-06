var config = require('../config');
module.exports = {
    
    'Check Home Page (nikhil-venkat.github.io)': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .waitForElementVisible('#about > p', 2000)
            .assert.containsText('#about > p', 'I have a passion for Front End Engineering and I love working with HTML/Javascript/CSS . When i am not working I hang out with my wife or play console games. I have a bachelors degree in Information Technology and a Masters Degree in Computer Science from ');
    },
    'Click about section': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .click('body > div > div.masthead > div > div > div > ul > li:nth-child(2) > a')
            .waitForElementVisible('#about > p', 2000)
            .assert.containsText('#about > p', 'I have a passion for Front End Engineering and I love working with HTML/Javascript/CSS . When i am not working I hang out with my wife or play console games. I have a bachelors degree in Information Technology and a Masters Degree in Computer Science from ');
    },
    'Click resume section': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .click('body > div > div.masthead > div > div > div > ul > li:nth-child(3) > a')
            .waitForElementVisible('#resume > ul', 2000)
            .assert.containsText('#resume > ul > li:nth-child(1)', 'Web Technologies : HTML, CSS, JavaScript, jQuery ,Angular JS, Node.js, HTML5 , CSS3, SASS, JSP, JSON , XML, XSL, AJAX')
            .assert.containsText('#resume > ul > li:nth-child(2)', 'Database : MySQL, MS Access,mongolab, mongo DB')
            .assert.containsText('#resume > ul > li:nth-child(3)', 'Servers and Tools : CodeIgniter, Wordpress, Sublime Text, Git , Svn , Photoshop CS4, Apache Tomcat')
            .assert.containsText('#resume > ul > li:nth-child(4)', 'Operating System : Mac OS Windows 95 & above')
            .assert.containsText('#resume > ul > li:nth-child(5)', 'MISC / Bug Tracking : Bugzilla, JIRA, Reviewboard');
            
    },
    'Click work section': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .click('body > div > div.masthead > div > div > div > ul > li:nth-child(4) > a')
            .waitForElementVisible('#work > ul', 2000);

    },
    'Click projects section': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .click('body > div > div.masthead > div > div > div > ul > li:nth-child(5) > a')
            .waitForElementVisible('#projects > a', 2000);
    },
    'Click contact section': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .click('body > div > div.masthead > div > div > div > ul > li:nth-child(6) > a')
            .waitForElementVisible('#contact', 2000);

    },
    'Click feedback section': function(browser) {
        var launchURL = config.launchURL(browser);
        browser
            .url(launchURL)
            .waitForElementVisible('body', 1000)
            .assert.title("nikhil-venkat")
            .click('body > div > div.masthead > div > div > div > ul > li:nth-child(7) > a')
            .waitForElementVisible('#feedback h2', 2000)
            .assert.containsText('#feedback h2','Feedback');

    },
    end: function(browser){
        browser.end();
    }
};
