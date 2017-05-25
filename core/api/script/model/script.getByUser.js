module.exports = getByUser;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function getByUser(user, take, skip) {

    return db.query(request.getByUser, [user.id, take, skip]);
}