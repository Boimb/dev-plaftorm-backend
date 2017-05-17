const passport = require('passport');

module.exports = function(app) {

    // INSTANCE
    app.post('/instance', require('./instance/controller/instance.post.js'));
    app.patch('/instance/:id', require('./instance/controller/instance.patch.js'));
    
    // USER
    app.post('/signup', require('./user/controller/user.signup.js'));
    app.post('/login', require('./user/controller/user.login.js'));

    // MODULE
    app.post('/module', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.post.js'));
    app.patch('/module/:id', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.patch.js'));

    // MODULE_TEXT
    app.post('/module_text', passport.authenticate('authenticated', { session: false}), require('./module_text/controller/moduleText.post.js'));
};