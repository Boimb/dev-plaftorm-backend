module.exports = login;

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

function login(params) {
    
    if(!params.email || !params.password) {
        return Promise.reject(new Error('LOGIN_EMAIL_PASSWORD_REQUIRED'));
    }

    return db.query(request.getUserByEmail, [params.email])
        .then((rows) => {

            if(rows.length === 0) return Promise.reject(new Error('LOGIN_USER_NOT_FOUND'));

            return [rows[0], bcrypt.compare(params.password, rows[0].password)];
        })
        .spread((user, validPassword) => {
            if(validPassword === false) return Promise.reject(new Error('LOGIN_INVALID_PASSWORD'));

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