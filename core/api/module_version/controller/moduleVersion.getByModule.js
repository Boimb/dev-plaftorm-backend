const ModuleVersion = require('../model/moduleVersion.js');

module.exports = function(req, res, next) {
    ModuleVersion.getByModule(req.params.id, req.query.take, req.query.skip)
        .then((versions) => res.json(versions))
        .catch(next);
};