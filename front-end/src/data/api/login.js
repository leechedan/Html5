module.exports = function (req, res, next) {
    res.end(JSON.stringify({
        success:true
    }));
};