const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require(__base + 'config.js');
const User = require(__base + 'core/api/user/model/user.js');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.accessTokenJwt.secret
};

module.exports = function(passport) {

    // implement passport-jwt strategy
    passport.use('authenticated', new JwtStrategy(opts, function(jwt_payload, done) {

        // See if user exist in Redis/DB
        User.getById(jwt_payload.id)
            .then((user) => done(null, user))
            .catch((err) => done(err, false));
    }));
};