const Module = require('../model/module.js');

module.exports = function(req, res, next) {
    Module.update(req.user, req.params.id, req.body)
        .then((updatedModule) => res.json(updatedModule))
        .catch(next);
};