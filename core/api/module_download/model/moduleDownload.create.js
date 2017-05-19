module.exports = create;

const schema = require('../const/moduleDownload.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const db = require(__base + 'core/service/db.js');
const crypto = require('crypto');

function create(ip, params) {

    return validate(params, schema, {stripUnknown: true})
        .then((moduleDownload) => {
            
            // hash the IP and save it
            // the goal is to be able to identify unique download without saving the IP
            moduleDownload.network_hash = crypto.createHash('sha256').update(ip).digest('hex');

            return db.insert('t_module_download', moduleDownload);
        });
}