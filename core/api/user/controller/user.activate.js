const User = require('../model/user.js');

module.exports = function(req, res, next){
    return User.activate(req.params.token)
        .then((result) => res.json(result))
        .catch(next);    
};