const ModuleReview = require('../model/moduleReview.js');

module.exports = function(req, res, next) {
    ModuleReview.create(req.user, req.body)
        .then((newModuleReview) => res.status(201).json(newModuleReview))
        .catch(next);
};