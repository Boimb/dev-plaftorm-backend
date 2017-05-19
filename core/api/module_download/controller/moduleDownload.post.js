const ModuleDownload = require('../model/moduleDownload.js');

module.exports = function(req, res, next) {
    ModuleDownload.create(req.ip, req.body)
        .then((newModuleDownload) => res.status(201).json(newModuleDownload))
        .catch(next);
};