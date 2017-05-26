
module.exports = function() {
    const redisClient = require(__base + 'core/service/redis.js');

    return redisClient.FLUSHALLAsync();
};