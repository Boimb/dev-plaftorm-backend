const ModuleText = require('../model/moduleText.js');

module.exports = function(req, res, next) {
    ModuleText.getByModule(req.user, req.params.id, req.query.take, req.query.skip)
        .then((texts) => res.json(texts))
        .catch(next);
};