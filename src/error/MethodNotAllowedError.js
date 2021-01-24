class MethodNotAllowedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MethodNotAllowedError';
  }
}

module.exports = MethodNotAllowedError;
