module.exports = assignToUser;

const db = require(__base + 'core/service/db.js');

function assignToUser(user, instanceId) {
    return db.updateOne('t_instance', ['id = ?', instanceId], {user_id: user.id});
}