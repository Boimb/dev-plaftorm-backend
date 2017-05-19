const Module = require('../model/module.js');

module.exports = function(req, res, next) {
    Module.getById(req.params.id, req.query.lang)
        .then((module) => res.json(module))
        .catch(next);
};