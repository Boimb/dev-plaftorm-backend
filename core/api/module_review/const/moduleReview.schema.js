const Joi = require('joi');

var schema = Joi.object().keys({
    module_id: Joi.string().uuid().required(),
    user_id: Joi.string().uuid().required(),
    note: Joi.number().min(0).max(5).required(),
    text: Joi.string().max(500).required(),
});

module.exports = schema;