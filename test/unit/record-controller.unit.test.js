const recordsController = require('../../src/controller/records-controller');
const RecordService = require('../../src/service/RecordService');

describe('recordsController test ', () => {
  it('RecordsController  findRecordsByStartDateAndEndDateAndCount', () => {
    const findRecord = jest.spyOn(RecordService, 'findRecordsByStartDateAndEndDateAndCount');
    recordsController({
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 1000,
      maxCount: 2222
    });
    expect(findRecord).toHaveBeenCalledTimes(1);
  });
});
