global.__base = __dirname + '/';
require('dotenv').config();

/**
 * Require dependencies
 */
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('./config.js');
const logger = require('tracer').colorConsole({level: process.env.LOG_LEVEL || 'debug' });

/**
 * Create express APP
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./core/middleware/authenticated.js')(passport);

// load API routes
require('./core/api/routes.js')(app);

// add error middleware
app.use(require('./core/middleware/error.js'));

app.listen(config.server.port);

logger.info(`Server listening on port : ${config.server.port}`);

module.exports = app;