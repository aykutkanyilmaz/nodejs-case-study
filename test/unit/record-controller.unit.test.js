
const recordsController = require('../../src/controller/records-controller');
const RecordService = require('../../src/service/RecordService');



describe('recordsController test ', () => {
 
    it('RecordsController  findRecordsByStartDateAndEndDateAndCount', () => {
        const findRecord = jest.spyOn(RecordService, 'findRecordsByStartDateAndEndDateAndCount'); 
        expect(findRecord).toHaveBeenCalledTimes(1); 
    })

});

 
