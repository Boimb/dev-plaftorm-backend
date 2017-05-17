const ModuleVersion = require('../model/moduleVersion.js');

module.exports = function(req, res, next) {
    ModuleVersion.create(req.user, req.body)
        .then((newModuleVersion) => res.status(201).json(newModuleVersion))
        .catch(next);
};