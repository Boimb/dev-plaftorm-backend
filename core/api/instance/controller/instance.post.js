const Instance = require('../model/instance.js');

module.exports = function(req, res, next) {
    Instance.create(req.body)
        .then((newInstance) => res.status(201).json(newInstance))
        .catch(next);
};