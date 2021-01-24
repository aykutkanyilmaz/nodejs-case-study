const express = require('express');
const recordsController = require('../controller/records-controller');
var recordValidator = require('../validator/record-validator');
var methodNotAllowed = require('./methodNotAllowed');

var router = express.Router();

router.route('/')
  .post(recordValidator, recordsController)
  .all(methodNotAllowed);

module.exports = router;
