require('bootstrap-loader');
require('./main.scss');
require('./images/mypic.jpg');

const blogsite = require('./Blogsite');

function init (options) {
    blogsite.render(options);
}

module.exports = {
    init: init
};
