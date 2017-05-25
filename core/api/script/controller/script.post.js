const Script = require('../model/script.js');

module.exports = function(req, res, next) {
    Script.create(req.user, req.body)
        .then((newScript) => res.status(201).json(newScript))
        .catch(next);
};