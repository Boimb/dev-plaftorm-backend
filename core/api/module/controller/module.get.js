const Module = require('../model/module.js');

module.exports = function(req, res, next) {
    Module.get(req.query.lang, req.query.take, req.query.skip)
        .then((modules) => res.json(modules))
        .catch(next);
};