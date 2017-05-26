
module.exports = function() {
    const redisClient = require(__base + 'core/service/redis.js');

    return redisClient.multi()
        .set(`user_reset_password:token:023e7f31-7598-4458-a29c-105e35dfed11`, '08530e76-0318-4557-98a7-e570ec0a31db')
        .execAsync();
};