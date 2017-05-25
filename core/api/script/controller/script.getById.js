const Script = require('../model/script.js');

module.exports = function(req, res, next) {
    Script.getById(req.params.id)
        .then((script) => res.json(script))
        .catch(next);
};