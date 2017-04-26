const User = require('../model/user.js');

module.exports = function(req, res, next){
    return User.create(req.body)
        .then((user) => res.status(201).json(user))
        .catch(next);    
};