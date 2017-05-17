const User = require('../model/user.js');

module.exports = function(req, res, next){
    return User.update(req.user.id, req.body)
        .then((user) => res.json(user))
        .catch(next);
};