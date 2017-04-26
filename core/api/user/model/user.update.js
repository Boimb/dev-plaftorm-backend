module.exports = update;

const schema = require('../const/userUpdate.schema.js');
const Joi = require('joi');
const Promise = require('bluebird');
const validate = Promise.promisify(Joi.validate);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const db = require(__base + 'core/service/db.js');
const config = require(__base + 'config.js');
const request = require('../const/request.js');
const saltRounds = 10;

function update(id, params){
    
     // first, validate the JSON object according to the model
    return validate(params, schema, {stripUnknown: true})
        .then((user) => {

            var promises = [user];

            // if password needs to be updated, hash it
            if(user.password) promises.push(bcrypt.hash(user.password, saltRounds));

            return promises;
        })
        .spread((user, hash) => {

            if(hash) user.password = hash;

            return db.updateOne('t_user', ['id = ?', id], user);
        })
        .then((user) => {

            delete user.password;
            
            return user;
        });
}