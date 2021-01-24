const ok = (records) => ({
  code: 0,
  msg: 'Success',
  records
});

const fail = (code, message) => ({
  code,
  errors: message
});

module.exports = { ok, fail };
