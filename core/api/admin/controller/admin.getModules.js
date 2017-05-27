const Admin = require('../model/admin.js');

module.exports = function(req, res, next) {
    Admin.getModules(req.query.take, req.query.skip)
        .then((modules) => res.json(modules))
        .catch(next);
};