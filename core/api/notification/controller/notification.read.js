const Notification = require('../model/notification.js');

module.exports = function(req, res, next) {
    Notification.read(req.user)
        .then((result) => res.json(result))
        .catch(next);
};