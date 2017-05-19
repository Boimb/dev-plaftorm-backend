module.exports = getByModule;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function getByModule(id, take, skip) {

    take = take || 20;
    skip = skip || 0;

    // max take is 50
    if(take > 50) take = 50;

    return db.query(request.getByModule, [id, take, skip]);
}