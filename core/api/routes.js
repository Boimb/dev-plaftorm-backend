const passport = require('passport');

module.exports = function(app) {

    // INSTANCE
    app.post('/instance', require('./instance/controller/instance.post.js'));
    
    // USER
    app.post('/signup', require('./user/controller/user.signup.js'));
    app.post('/login', require('./user/controller/user.login.js'));

    // MODULE
    app.post('/module', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.post.js'));
};