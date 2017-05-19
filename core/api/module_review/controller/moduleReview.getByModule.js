const ModuleReview = require('../model/moduleReview.js');

module.exports = function(req, res, next) {
    ModuleReview.getByModule(req.params.id, req.query.take, req.query.skip)
        .then((reviews) => res.json(reviews))
        .catch(next);
};