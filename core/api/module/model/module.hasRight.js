module.exports = hasRight;

const Promise = require('bluebird');
const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function hasRight(userId, moduleId) {
    return db.query(request.hasRight, [userId, moduleId])
        .then((rows) => {
            if(rows.length == 0) return Promise.reject(new Error('FORBIDDEN'));
            else return rows[0];
        });
}