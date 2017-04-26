
module.exports = function(app) {
    
    // USER
    app.post('/signup', require('./user/controller/user.signup.js'));
};