const Joi = require('joi');

var schema = Joi.object().keys({
    user_id: Joi.string().uuid().required(),
    text: Joi.string().required()
});

module.exports = schema;