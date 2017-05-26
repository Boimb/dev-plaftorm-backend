const passport = require('passport');

module.exports = function(app) {

    // INSTANCE
    app.post('/instance', require('./instance/controller/instance.post.js'));
    app.patch('/instance/:id', require('./instance/controller/instance.patch.js'));
    
    // USER
    app.post('/signup', require('./user/controller/user.signup.js'));
    app.post('/login', require('./user/controller/user.login.js'));
    app.patch('/user', passport.authenticate('authenticated', { session: false}), require('./user/controller/user.patch.js'));

    // MODULE
    app.get('/module', require('./module/controller/module.get.js'));
    app.post('/module', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.post.js'));
    app.get('/module/:id', require('./module/controller/module.getById.js'));
    app.patch('/module/:id', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.patch.js'));
    app.get('/account/module', passport.authenticate('authenticated', { session: false}), require('./module/controller/module.getMyModules.js'));

    // MODULE_TEXT
    app.post('/module_text', passport.authenticate('authenticated', { session: false}), require('./module_text/controller/moduleText.post.js'));
    app.get('/account/module/:id/text', passport.authenticate('authenticated', { session: false}), require('./module_text/controller/moduleText.getByModule.js'));

    // MODULE_REVIEW
    app.post('/module_review', passport.authenticate('authenticated', { session: false}), require('./module_review/controller/moduleReview.post.js'));
    app.post('/module/:id/review', require('./module_review/controller/moduleReview.getByModule.js'));

    // MODULE_VERSION
    app.post('/module_version', passport.authenticate('authenticated', { session: false}), require('./module_version/controller/moduleVersion.post.js'));
    app.get('/module/:id/version', require('./module_version/controller/moduleVersion.getByModule.js'));

    // MODULE_DOWNLOAD
    app.post('/module_download', passport.authenticate('authenticated', { session: false}), require('./module_download/controller/moduleDownload.post.js'));

    // SCRIPT
    app.get('/script', require('./script/controller/script.get.js'));
    app.post('/script', passport.authenticate('authenticated', { session: false}), require('./script/controller/script.post.js'));
    app.get('/script/:id', require('./script/controller/script.getById.js'));
    app.patch('/script/:id', passport.authenticate('authenticated', { session: false}), require('./script/controller/script.patch.js'));
    app.get('/account/script', passport.authenticate('authenticated', { session: false}), require('./script/controller/script.getMyScripts.js'));

     // SENTENCE
     app.post('/sentence', passport.authenticate('authenticated', { session: false}), require('./sentence/controller/sentence.post.js'));
     app.post('/sentence/:id/vote', passport.authenticate('authenticated', { session: false}), require('./sentence/controller/sentence.vote.js'));
     app.get('/sentence', require('./sentence/controller/sentence.get.js'));

     // NOTIFICATION
     app.get('/notification', passport.authenticate('authenticated', { session: false}), require('./notification/controller/notification.get.js'));
};