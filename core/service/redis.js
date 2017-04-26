var redis = require('redis');
const Promise = require('bluebird');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);
const config = require(__base + 'config.js');

var client = redis.createClient(config.redis);

module.exports = client;