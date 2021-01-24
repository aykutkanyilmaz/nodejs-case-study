var winston = require('winston'),
  expressWinston = require('express-winston');
require('winston-daily-rotate-file');

const config = require('../config/config');

const restTransport = new winston.transports.DailyRotateFile({
  filename: './logs/application-rest-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  level: config.appLogger.level,
  format: winston.format.json(),
  timestamp: true,
  transports: [
    new winston.transports.DailyRotateFile({
      filename: './logs/application-%DATE%.log',
      level: 'info',
      handleExceptions: true,
      colorize: true,
      json: false,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});

const restLogger = expressWinston.logger({
  level: config.restLogger.level,
  transports: [
    restTransport
  ],
  timestamp: true,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false
});

module.exports = {
  logger,
  restLogger
};
