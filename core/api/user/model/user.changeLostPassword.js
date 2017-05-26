module.exports = changeLostPassword;

const Promise = require('bluebird');
const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');
const redisClient = require(__base + 'core/service/redis.js');
const updateUser = require('./user.update.js');

function changeLostPassword(token, params) {

    // get user id by reset token
    return redisClient.getAsync(`user_reset_password:token:${token}`)
        .then((userId) => {

            // if userId is null, the link has expired
            if(userId === null){
                return Promise.reject(new Error('LINK_NO_LONGER_VALID'));
            }

            // update the password
            return updateUser(userId, {password: params.password});
        });
}