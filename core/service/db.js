const pg = require('pg').native;
const config = require(__base + 'config.js');
const logger = require('tracer').colorConsole({level: process.env.LOG_LEVEL || 'debug' });
const squel = require('squel');
const Promise = require('bluebird');
const squelPostgres = squel.useFlavour('postgres');

module.exports.query = query;
module.exports.queryUnique = queryUnique;
module.exports.insert = insert;
module.exports.update = update;
module.exports.updateOne = updateOne;


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
 * Execute a query and returns a bluebird Promise
 * @param {*} text 
 * @param {*} values 
 */
function query(text, values){
    return new Promise(function(resolve, reject){
        return pool.query(text, values)
            .then((result) => resolve(result.rows))
            .catch((err) => reject(err));
    });
};

/**
 * Execute a query and return first elements
 * @param {*} text 
 * @param {*} values 
 */
function queryUnique(text, values){
    return query(text, values)
        .then((rows) => {
            if(rows.length === 0) return Promise.reject(new Error('NOT_FOUND'));
            return rows[0];
        });
};


/**
 * Helper function to insert one or many elements
 */
function insert(tableName, values) {
    var request;

    if(values instanceof Array){

        // if array is empty, don't go to DB
        if(values.length === 0) return Promise.resolve(values);

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

    return query(request.text, request.values)
        .then((rows) => {
            if(values instanceof Array) return rows;
            else return rows[0];
        });
};

/**
 * Update rows in DB
 * @param {*} tableName 
 * @param {*} condition 
 * @param {*} values 
 */
function update(tableName, condition, values) {
    var request = squelPostgres.update()
        .table(tableName)
        .setFields(values)
        .where(condition[0], condition[1])
        .returning('*')
        .toParam();

    return query(request.text, request.values);
};

/**
 * Update one row, and return NOT FOUND if no row
 * was updated
 */
function updateOne(tableName, condition, values) {
    return update(tableName, condition, values)
        .then((rows) => {
            if(rows.length === 0) return Promise.reject(new Error('NOT_FOUND'));
            else return rows[0];
        })
};
