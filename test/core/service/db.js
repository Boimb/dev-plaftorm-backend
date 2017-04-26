describe('db', function () {
    describe('.query()', function () {
        it('should query database', function () {
            const db = require(__base + 'core/service/db.js');
            return db.query('SELECT * FROM t_user');
        });
    });

    describe('.insert()', function () {
        it('should insert a row in DB', function () {
            const db = require(__base + 'core/service/db.js');
            return db.insert('t_user', {name: 'test', email: 'tes@test.fr', password: 'eeee'});
        });
    });

    describe('.update()', function () {
        it('should update a row in DB', function () {
            const db = require(__base + 'core/service/db.js');
            return db.update('t_user', ['', ''], {name: 'test', email: 'tes@test.fr', password: 'eeee'});
        });
    });
});