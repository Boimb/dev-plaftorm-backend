module.exports = create;

const db = require(__base + 'core/service/db.js');
const template = require('es6-template-strings');
const mailgun = require(__base + 'core/service/mailgun.js');
const notifications = require(__base + 'core/const/notifications');
const config = require(__base + 'config.js');

function create(user, type, params){
    
    var notification = {
        user_id: user.id,
        type: type,
        params: JSON.stringify(params)
    };

    return db.insert('t_notification', notification)
        .then((createdNotification) => {

            // replace variables with data
            var scope = {
                notificationText: template(notifications[type][user.language], params),
                accountUrl: config.server.frontEndDomain + '/dashboard'
            };

            mailgun.send(user, 'notification', scope);

            return createdNotification;
        });
}