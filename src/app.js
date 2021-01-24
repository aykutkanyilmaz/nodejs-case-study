const express = require('express');
const rateLimit = require('express-rate-limit');

const MongoDBError = require('./error/MongoDBError');
const recordRouter = require('./routes/record-router');
const { fail } = require('./controller/response-message');
const { restLogger } = require('./loaders/winston-loader');
const ValidationError = require('./error/ValidationError');
const MethodNotAllowedError = require('./error/MethodNotAllowedError');

const app = express();

app.use(restLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use('/records', recordRouter);

/*
* Central error handling for errors that are generated in application flow.
* Validation Error: returns https status 422
* MongoDBError: returns http status 500
* */
app.use((error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(422).json({
      errors: error.errors.array().map((err) => ({ param: err.param, error: err.msg }))
    });
  }
  else if (error instanceof MongoDBError) {
    res.status(500).send(fail(error.message));
  }
  else if (error instanceof MethodNotAllowedError) {
    res.status(405).send();
  }
  else {
    res.status(500).send(fail('Unexpected exception'));
  }
  next(error);
});

// Limits incoming requests by ip
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

module.exports = app;
