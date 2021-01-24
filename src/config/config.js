/*
log level example values:
   silly
   debug
   verbose
   info
   warn
   error
for mongodb config:(https://mongoosejs.com/docs/connections.html)
*/

const config = {
  port: process.env.PORT || '3000',
  restLogger: {
    level: process.env.REST_LOGGER_LEVEL || 'info'
  },
  appLogger: {
    level: process.env.APP_LOGGER_LEVEL || 'info'
  },
  mongodb: {
    URI: process.env.MONGODB_URI || 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',
    options: {
      poolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
      family: 4
    }
  }
};

module.exports = config;
