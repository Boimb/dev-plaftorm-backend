module.exports = get;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function get(user, language, take, skip) {

    language = language || 'en';
    take = take || 20;
    skip = skip || 0;

    // max take is 50
    if(take > 50) take = 50;

    return db.query(request.getByUser, [user.id, language, take, skip]);
}