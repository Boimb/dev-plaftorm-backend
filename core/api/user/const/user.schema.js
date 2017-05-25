const Joi = require('joi');

var schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    language: Joi.string().required().valid(['en', 'fr']),
    name: Joi.string().token().min(2).required()
});

module.exports = schema;