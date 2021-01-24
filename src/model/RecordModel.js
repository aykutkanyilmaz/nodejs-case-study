const mongoose = require('mongoose');
/*
* Document model of 'records'
*/
const RecordSchema = new mongoose.Schema({

  key: {
    type: String
  },
  value: {
    type: String
  },
  createdAt: {
    type: Date
  },
  counts: {
    array: { type: [Number], required: true }
  }
});
const RecordModel = mongoose.model('records', RecordSchema);
module.exports = RecordModel;
