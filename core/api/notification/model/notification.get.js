module.exports = get;

const db = require(__base + 'core/service/db.js');
const request = require('../const/request.js');
const template = require('es6-template-strings');
const notificationsData = require(__base + 'core/const/notifications');

function get(user, take, skip) {

    take = take || 20;
    skip = skip || 0;

    // max take is 50
    if(take > 50) take = 50;

    return db.query(request.get, [user.id, take, skip])
        .then((notifications) => {

            // foreach notification, return the notification text in the right language
            for(var i = 0; i < notifications.length; i++){
                if(notificationsData[notifications[i].type] && notificationsData[notifications[i].type][user.language]) {
                    notifications[i].text = template(notificationsData[notifications[i].type][user.language], notifications[i].params);
                }
                
                delete notifications[i].params;
            }

            return notifications;
        });
}