describe('notification', function () {
    describe('.get()', function () {
        it('should get notifications', function () {

            const Notification = require(__base + 'core/api/notification/model/notification.js');

            var user = {
                id: '08530e76-0318-4557-98a7-e570ec0a31db',
                email: 'test@test.fr',
                language: 'en'
            };
            
            return Notification.get(user, 10, 0)
                .then((notifications) => {
                    notifications.should.be.instanceOf(Array);

                    // it should return more than 0 notifications
                    var greaterThan0 = ( notifications.length > 0);
                    greaterThan0.should.equal(true);
                    notifications.forEach(function(notification){
                        notification.should.have.property('type');
                        notification.should.have.property('text');
                    });
                });
        });
    });
});