const ModuleText = require('../model/moduleText.js');

module.exports = function(req, res, next) {
    ModuleText.create(req.user, req.body)
        .then((newModuleText) => res.status(201).json(newModuleText))
        .catch(next);
};