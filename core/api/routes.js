const passport = require('passport');

module.exports = function(app) {
    
    // USER
    app.post('/signup', require('./user/controller/user.signup.js'));

    // MODULE
    app.post('/module', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.post.js'));
};