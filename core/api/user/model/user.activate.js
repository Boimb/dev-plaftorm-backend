module.exports = activate;

const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const Promise = require('bluebird');
const request = require('../const/request.js');
const redisClient = require(__base + 'core/service/redis.js');

function activate(token){
    
     return redisClient.getAsync(`user:confirmation-token:${token}`)
        .then((userId) => {

            if(userId === null) return Promise.reject(new Error('NOT_FOUND'));

            return db.updateOne('t_user', ['id = ?', userId], {active: true});           
        })
        .then(() => {
            
            return {success: true};
        });
}