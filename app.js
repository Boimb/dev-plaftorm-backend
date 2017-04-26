global.__base = __dirname + '/';
require('dotenv').config();

/**
 * Require dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const logger = require('tracer').colorConsole({level: process.env.LOG_LEVEL || 'debug' });

/**
 * Create express APP
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load API routes
require('./core/api/routes.js')(app);

app.listen(config.server.port);

logger.info(`Server listening on port : ${config.server.port}`);

module.exports = app;