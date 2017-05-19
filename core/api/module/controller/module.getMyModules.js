const Module = require('../model/module.js');

module.exports = function(req, res, next) {
    Module.getByUser(req.user, req.query.lang, req.query.take, req.query.skip)
        .then((modules) => res.json(modules))
        .catch(next);
};