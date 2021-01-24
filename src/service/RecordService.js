const RecordModel = require('../model/RecordModel'); // Database Model

/*
* I assumed all filter fields are mandatory.
* I saw documents that has same key in db, I coded to sum all counts that have same key,
* than changed my mind and counts every row's counts .
* Aggregate function to filter records in mongodb. It consists of four steps
*   1. filters all records by startDate and endDate
*   2. sums counts array in every document
*   3. deletes _id field
*   4. filters all records by minCount and maxCount
* */

const findRecordsByStartDateAndEndDateAndCount = (filter) => RecordModel.aggregate([{
  $match: {
    createdAt: {
      $gte: filter.startDate,
      $lt: filter.endDate
    }
  }
}, {
  $project: {
    createdAt: '$createdAt',
    key: '$key',
    totalCount: { $sum: '$counts' }
  }
},
{
  $unset: ['_id']
}, {
  $match: {
    totalCount: {
      $gte: filter.minCount,
      $lt: filter.maxCount
    }
  }
}
]).exec();

module.exports = { findRecordsByStartDateAndEndDateAndCount };
