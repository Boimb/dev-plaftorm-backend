const Joi = require('joi');

var schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().token().min(2).required()
});

module.exports = schema;