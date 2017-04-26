const Module = require('../model/module.js');

module.exports = function(req, res, next) {
    Module.create(req.user, req.body)
        .then((newModule) => res.status(201).json(newModule))
        .catch(next);
};