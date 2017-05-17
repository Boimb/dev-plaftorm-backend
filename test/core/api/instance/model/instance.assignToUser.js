describe('instance', function () {
    describe('assignToUser.()', function () {
        it('should assign an instance to a specific user', function () {

            const Instance = require(__base + 'core/api/instance/model/instance.js');

            var user = {
                id: '08530e76-0318-4557-98a7-e570ec0a31db'
            };

            return Instance.assignToUser(user, '5b87a6fb-0e3d-4220-aaef-35351073d094')
                .then((updatedInstance) => {
                    updatedInstance.should.have.property('user_id', user.id);
                });
        });
    });
});