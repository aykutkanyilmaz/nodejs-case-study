# node-case-study

A case study Node.js app using [Express 4](http://expressjs.com/). 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites


Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.


### Installing

A step by step series of examples that tell you how to get a development env running

```sh
git clone https://github.com/aykutkanyilmaz/nodejs-case-study.git # or clone your own fork
cd nodejs-case-study
npm install
npm start
```
 
Your app will now be running on [localhost:3000](http://localhost:3000/).


## Running the tests

```sh
cd nodejs-case-study
npm test 
```
### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

In the project, eslint is used to check coding style. `airbnb-base` config is used as root configuration. 
```sh
cd nodejs-case-study
npm test 
```


## Configuration

Configuration file is config.js in config folder. Default configuration file is below. 
It is possible to override some of configuration with ENV variable.  

```
{
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
      family: 4,
    }
  }
}
```

###Logger

 Application uses [winston](https://github.com/winstonjs/winston) for log management. 
 'Logs' folder will be generated under root folder of application. 
 
 application-%DATE%.log file shows logs that provided by application for application specific deatils. Log level of  can be changed by changing `config.appLogger.level` config in config.js
 
  application-rest-%DATE%.log file shows request and repsonse body of incoming requests. Log level of  can be changed by changing `config.restLogger.level` config in config.js
  
  ###### Log Levels
  ```
  silly
  debug
  verbose
  info
  warn
  error 
 ```


###MongoDB
Please refer to the documentation website on [mongoose](https://mongoosejs.com/docs/connections.html)

  ```
{ 
  mongodb: {
    URI: process.env.MONGODB_URI || 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',
    poolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
  } 
}
 ```


 
## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

## Authors

* **Aykut KANYILMAZ** - *Initial work* - [Aykut](https://github.com/aykutkanyilmaz)

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* This project was developed for testing nodejs skills.    
