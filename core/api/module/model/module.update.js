module.exports = update;

const schema = require('../const/moduleUpdate.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const hasRight = require('./module.hasRight');

function update(user, id, params) {

    return hasRight(user.id, id)
        .then(() => validate(params, schema, {stripUnknown: true}))
        .then((module) => db.updateOne('t_module', ['id = ?', id], module));
}