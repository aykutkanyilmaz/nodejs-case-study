const RecordService = require('../service/RecordService');
const { logger } = require('../loaders/winston-loader');
const { ok, fail } = require('./response-message');
const MongoDBError = require('../error/MongoDBError');

const recordsController = async (req, res, next) => {
  logger.debug(`request was recieved:`);

  RecordService.findRecordsByStartDateAndEndDateAndCount(req.body).then((result) => {
    logger.debug(`request was processed result: ${result}`);
    res.send(ok(result));
    next();
  }).catch((err) => {
    logger.error(`request could not be processed error: ${err}`);
    next(new MongoDBError('request could not be processed'));
  });
};

module.exports = recordsController;
