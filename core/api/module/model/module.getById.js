module.exports = get;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function get(id, language) {

    language = language || 'en';

    return db.queryUnique(request.getById, [id, language]);
}
