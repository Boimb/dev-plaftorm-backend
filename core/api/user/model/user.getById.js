module.exports = getById;

const request = require('../const/request.js');
const db = require(__base + 'core/service/db.js');
const redisClient = require(__base + 'core/service/redis.js');

function getById(id){

    // first try to get user from user
    return redisClient.hgetallAsync(`user:${id}`)
        .then((user) => {

            if(user) return user;

            // if not in redis, get in DB
            return db.queryUnique(request.getUserById, [id]);
        });
}