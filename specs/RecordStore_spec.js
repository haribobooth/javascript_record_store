var assert = require('assert');
var RecordStore = require('../RecordStore');
var Record = require('../Record');

describe('Record Store', function(){
  var recordStore = new RecordStore('Trevies Tunes', 'Inverurie');
  var record = new Record('Sultans of Swing: The Very Best', 'Dire Straits', 12.99);

  describe('Properties', function(){
    it('should have a name', function(){
      assert.equal('Trevies Tunes', recordStore.name);
    });

    it('should have a city', function(){
      assert.equal('Inverurie', recordStore.city);
    });

    it('should have a balance', function(){
      assert.equal(0, recordStore.balance);
    });
  });

  describe('Inventory', function(){
    beforeEach('Setup', function(){
      recordStore = new RecordStore('Trevies Tunes', 'Inverurie');
    });

    it('should start empty', function(){
      assert.equal(0, recordStore.recordCount());
    });

    it('should be able to add records', function(){
      recordStore.addRecord(record);
      assert.equal(1, recordStore.recordCount());
    });

    it('should be able to list records', function(){
      recordStore.addRecord(record);
      assert.deepEqual(
        [{title: 'Sultans of Swing: The Very Best', artist: 'Dire Straits', price: 12.99}],
        recordStore.listRecords());
    });

    it('should be able to list records', function(){
      recordStore.addRecord(record);
      recordStore.sellRecord(record);

      assert.equal(0, recordStore.recordCount());
      assert.equal(12.99, recordStore.balance);
    });

    it('should be able to report finances', function(){
      recordStore.addRecord(record);
      recordStore.addRecord(record);
      recordStore.sellRecord(record);

      var report = recordStore.financialReport();
      assert.deepEqual({
        balance: 12.99,
        inventoryValue: 12.99,
        totalValue: 25.98
      }, report);
    });

    
  });

});
