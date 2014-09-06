module.exports = {
    launchURL: function(browser) {
        var location = browser.globals.location;
        var launchURL;

        switch (location) {
            case 'local':
                launchURL = 'http://nikhil-venkat.github.io/';
                break;
        }

        return launchURL;
    }
};
