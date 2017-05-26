module.exports = update;

const db = require(__base + 'core/service/db.js');
const notification = require(__base + 'core/api/notification/model/notification');

function update(id, params) {

    return db.updateOne('t_module', ['id = ?', id], params)
        .then((updatedModule) =>  {

            if (params.online === true) {
                var scope = {
                    module: updatedModule
                };
                notification.create(updatedModule.user_id, 'MODULE_ACCEPTED', scope);
            }

            return updatedModule;
        });
}