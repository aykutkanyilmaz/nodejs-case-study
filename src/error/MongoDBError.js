class MongoDBError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MongoDBError';
  }
}

module.exports = MongoDBError;
