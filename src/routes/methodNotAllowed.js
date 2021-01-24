const MethodNotAllowedError = require('../error/MethodNotAllowedError');

const methodNotAllowed = (req, res, next) => next(new MethodNotAllowedError('Method not allowed'));

module.exports = methodNotAllowed;
