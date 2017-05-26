module.exports = resetPassword;

const Promise = require('bluebird');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const request = require('../const/request.js');
const redisClient = require(__base + 'core/service/redis.js');
const mailgun = require(__base + 'core/service/mailgun.js');

function resetPassword(params) {

    var user;

    return db.query(request.getUserByEmail, [params.email])
        .then((rows) => {

            // if user does not exist, we just return success
            if(rows.length === 0) return Promise.resolve({success: true});

            user = rows[0];

            return redisClient.getAsync(`user_reset_password:email:${params.email}`)
        })
        .then((currentToken) => {

            // if user already resetted his password, return success
            if(currentToken !== null) return Promise.resolve({success: true});

            var resetToken = uuid.v4();

            return redisClient.multi()
                .set(`user_reset_password:email:${params.email}`, resetToken, 'EX', config.cache.resetPasswordExpiration)
                .set(`user_reset_password:token:${resetToken}`, user.id, 'EX', config.cache.resetPasswordExpiration)
                .execAsync()
                .then(() => resetToken);
        })
        .then((resetToken) => {

            var scope = {
                confirmationUrl: config.server.frontEndDomain + '/reset-password/' + resetToken
            };

            // send confirmation email
            mailgun.send(user, 'confirmation', scope);

            return {success: true};
        });
}