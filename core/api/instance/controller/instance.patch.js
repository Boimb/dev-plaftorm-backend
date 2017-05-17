const Instance = require('../model/instance.js');

module.exports = function(req, res, next) {
    Instance.update(req.params.id, req.ip, req.body)
        .then((updatedInstance) => res.json(updatedInstance))
        .catch(next);
};