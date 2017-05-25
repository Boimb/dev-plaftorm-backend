const Script = require('../model/script.js');

module.exports = function(req, res, next) {
    Script.getByUser(req.user, req.query.take, req.query.skip)
        .then((scripts) => res.json(scripts))
        .catch(next);
};