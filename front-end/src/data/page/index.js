/**
 * @fileOverview test data for veloctiy template when the template load.
 * @parameter _GET {JSON} data get from url query
 * @return {JSON}
 */
module.exports = function (req, res) {
    var url = require('url');
    var querystring = require('querystring');
    var query = querystring.parse(url.parse(req.url).query);

    return {
        pageTitle: '首页-NB88',
        header:'home'
    };
};


