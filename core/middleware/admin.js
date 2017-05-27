
module.exports = function(req, res, next){
    if(req.user.is_admin === true) return next();
    else return next(new Error('UNAUTHORIZED'));
};