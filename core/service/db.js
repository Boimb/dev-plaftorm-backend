const pg = require('pg').native;
const config = require(__base + 'config.js');
const logger = require('tracer').colorConsole({level: process.env.LOG_LEVEL || 'debug' });
const squel = require('squel');
const squelPostgres = squel.useFlavour('postgres');

//this initializes a connection pool
const pool = new pg.Pool(config.db);

pool.on('error', function (err, client) {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  logger.error('PostgreSQL pool: idle client error', err.message, err.stack);
});

/**
 * Helper function to insert one or many elements
 */
module.exports.insert = function(tableName, values) {
    var request;

    if(values instanceof Array){
        request = squelPostgres.insert()
                        .into(tableName)
                        .setFieldsRows(values)
                        .returning('*')
                        .toParam();
    } else {
        request = squelPostgres.insert()
                        .into(tableName)
                        .setFields(values)
                        .returning('*')
                        .toParam();
    }

    return pool.query(request.text, request.values)
        .then((result) => {
            if(values instanceof Array) return result.rows;
            else return result.rows[0];
        });
};

// update
module.exports.update = function(tableName, condition, values) {
    var request = squelPostgres.update()
        .table(tableName)
        .setFields(values)
        .where(condition[0], condition[1])
        .returning('*')
        .toParam();

    return pool.query(request.text, request.values)
        .then((result) => {
            if(result.rows.length === 0) return Promise.reject(new Error('NOT_FOUND'));
            else return result.rows[0];
        });
};

// query and return rows
module.exports.query = function(text, values) {
    return pool.query(text, values)
        .then((result) => result.rows);
};
