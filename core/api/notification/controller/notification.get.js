const Notification = require('../model/notification.js');

module.exports = function(req, res, next) {
    Notification.get(req.user, req.query.take, req.query.skip)
        .then((notifications) => res.json(notifications))
        .catch(next);
};