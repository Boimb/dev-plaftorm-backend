const Script = require('../model/script.js');

module.exports = function(req, res, next) {
    Script.get(req.query.take, req.query.skip)
        .then((scripts) => res.json(scripts))
        .catch(next);
};