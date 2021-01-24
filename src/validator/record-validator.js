const { validationResult, check } = require('express-validator');

const ValidationError = require('../error/ValidationError');

/*
* recordValidator is used to validate incoming request body.
* Documentation do not define this validation rules. I assumed they are all mandatory.
* Relation startDate and endDate is checked on custom validation function.
* Relation minCount and maxCount is checked on custom validation function.
* if any validation error occurs, returns ValidationError to express.
* */

const recordValidator = [
  check('startDate').trim().notEmpty().withMessage('startDate is required')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('startDate must be date (YYYY-MM-DD)'),
  check('endDate').trim().notEmpty().withMessage('endDate is required')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('endDate must be date (YYYY-MM-DD)'),
  check('endDate').toDate(),
  check('startDate').toDate().custom((startDate, { req }) => {
    if (startDate.getTime() >= req.body.endDate.getTime()) {
      throw new Error('startDate must be before endDate');
    }
    return true;
  }),
  check('minCount').notEmpty().withMessage('minCount is required').isNumeric()
    .withMessage('minCount must be numeric'),
  check('maxCount').notEmpty().isNumeric().withMessage('maxCount is required')
    .isNumeric()
    .withMessage('minCount must be numeric'),
  check('maxCount').toInt(),
  check('minCount').toInt().custom((minCount, { req }) => {
    if (minCount >= req.body.maxCount) {
      throw new Error('minCount must be less than maxCount');
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(new ValidationError(errors));
    }
    next();
  }
];

module.exports = recordValidator;
