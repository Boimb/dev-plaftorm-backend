describe('notification', function () {
    describe('.read()', function () {
        it('should read notifications', function () {

            const Notification = require(__base + 'core/api/notification/model/notification.js');

            var user = {
                id: '08530e76-0318-4557-98a7-e570ec0a31db'
            };
            
            return Notification.read(user);
        });
    });
});