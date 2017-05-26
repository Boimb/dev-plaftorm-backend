describe('mailgun', function () {
    describe('.send()', function () {
        it('should send an email', function () {
            const mailgun = require(__base + 'core/service/mailgun.js');

            var user = {
                email: 'tony.stark@test.fr',
                language: 'en'
            };
            
            return mailgun.send(user, 'confirmation', {confirmationUrl: 'https://gladysproject.com'});
        });
    });
});