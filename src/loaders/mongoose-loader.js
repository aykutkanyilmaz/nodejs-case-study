const mongoose = require('mongoose');
const { logger } = require('./winston-loader');
const config = require('../config/config');

const MONGODB_URI = config.mongodb.URI;

mongoose.connect(MONGODB_URI, config.mongodb.options);

const db = mongoose.connection;

db.on('error', (err) => {
  logger.error(`connection error - mongoose could not connect to the remote service - SERVICE ADDRESS : ${MONGODB_URI}`);
  logger.error(err);
});

db.once('open', () => {
  logger.info(`Successfull connection  - APP connected to the remote mongodb service - SERVICE ADDRESS : ${MONGODB_URI}`);
});

module.exports = mongoose;
