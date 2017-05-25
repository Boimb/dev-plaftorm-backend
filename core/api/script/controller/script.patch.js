const Script = require('../model/script.js');

module.exports = function(req, res, next) {
    Script.update(req.user, req.params.id, req.body)
        .then((updatedScript) => res.json(updatedScript))
        .catch(next);
};