module.exports = create;

const Promise = require('bluebird');
const db = require(__base + 'core/service/db.js');
const template = require('es6-template-strings');
const mailgun = require(__base + 'core/service/mailgun.js');
const notifications = require(__base + 'core/const/notifications');
const User = require(__base + 'core/api/user/model/user');
const config = require(__base + 'config.js');

function create(userId, type, params){
    
    var notification = {
        user_id: userId,
        type: type,
        params: JSON.stringify(params)
    };

    return Promise.all([db.insert('t_notification', notification), User.getById(userId)])
        .spread((createdNotification, user) => {

            // replace variables with data
            var scope = {
                notificationText: template(notifications[type][user.language], params),
                accountUrl: config.server.frontEndDomain + '/dashboard'
            };

            mailgun.send(user, 'notification', scope);

            return createdNotification;
        });
}