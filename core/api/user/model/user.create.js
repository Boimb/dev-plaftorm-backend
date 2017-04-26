module.exports = create;

const schema = require('../const/user.schema.js');
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

function create(params){

    // first, validate the JSON object according to the model
    return validate(params, schema, {stripUnknown: true})
        .then((user) => {

            // test first if user email already exist
            return [user, db.query(request.getUserByEmail, [user.email])];
        })
        .spread((user, rows) => {

            if(rows.length > 0) return Promise.reject(new Error('USER_EMAIL_ALREADY_EXIST'));

            // hash password
            return [user, bcrypt.hash(user.password, saltRounds)];
        })
        .spread((user, hash) => {

            // save hash instead of password
            user.password = hash;
            
            return db.insert('t_user', user);
        })
        .then((user) => {

            // don't return user password
            delete user.password;
            
            var refreshTokenPayload = {
                id: user.id,
                jwtid: uuid.v4()
            };

            var accessTokenPayload = {
                id: user.id,
                jwtid: uuid.v4()
            };

            user.refresh_token = jwt.sign(refreshTokenPayload, config.refreshTokenJwt.secret, config.refreshTokenJwt.options);
            user.access_token = jwt.sign(accessTokenPayload, config.accessTokenJwt.secret, config.accessTokenJwt.options);

            return user;
        });
}