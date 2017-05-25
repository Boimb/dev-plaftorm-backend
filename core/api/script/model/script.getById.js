module.exports = getById;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function getById(id) {

    return db.queryUnique(request.getById, [id]);
}