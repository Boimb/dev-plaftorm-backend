module.exports = read;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');

function read(user) {
    return db.query(request.read, [user.id])
        .then(() => {
            return {success: true};
        });
}