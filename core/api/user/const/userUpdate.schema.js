const Joi = require('joi');

var schema = Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().min(6),
    name: Joi.string().token().min(2)
});

module.exports = schema;