const formatError = require(__base + 'core/service/formatError.js');
const logger = require('tracer').colorConsole({level: process.env.LOG_LEVEL || 'debug' });

module.exports = function(err, req, res, next) {

    logger.warn(err);

    err = formatError(err);

    res.status(err.code).json(err);
};