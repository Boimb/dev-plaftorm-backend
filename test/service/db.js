describe('db', function () {
    describe('.query()', function () {
        it('should query database', function () {
            const db = require(__base + 'core/service/db.js');
            return db.query('SELECT * FROM t_user');
        });
    });
});