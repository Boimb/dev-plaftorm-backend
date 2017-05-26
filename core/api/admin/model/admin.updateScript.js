module.exports = update;

const db = require(__base + 'core/service/db.js');
const notification = require(__base + 'core/api/notification/model/notification');

function update(id, params) {

    return db.updateOne('t_script', ['id = ?', id], params)
        .then((updatedScript) =>  {

            if (params.online === true) {
                var scope = {
                    script: updatedScript
                };
                notification.create(updatedScript.user_id, 'SCRIPT_ACCEPTED', scope);
            }

            return updatedScript;
        });
}