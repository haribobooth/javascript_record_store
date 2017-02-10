var assert = require('assert');
var Customer = require('../Customer');
var RecordStore = require('../RecordStore');
var Record = require('../Record');

describe('Customer', function(){
  describe('Properties', function(){
    var customer = new Customer('Harrison');

    it('should have a name', function(){
      assert.equal('Harrison', customer.name);
    });
  });

  describe('Buying records', function(){
    var customer = new Customer('Harrison');
    var record = new Record('Sultans of Swing: The Very Best', 'Dire Straits', 12.99);
    var recordStore = new RecordStore('Trevies Tunes', 'Inverurie');

    it('should be able to buy records', function(){
      customer.cash = 15.00;
      recordStore.addRecord(record);
      customer.buyRecord(recordStore, record);

      assert.equal(0, recordStore.recordCount());
      assert.equal(1, customer.recordCount());
      assert.equal(2.01, customer.cash);
      assert.equal(12.99, recordStore.balance);
    });

    it('should not be able to buy a records when doesn\'t have cash', function(){
      customer.cash = 0.00;
      recordStore.balance = 0;
      recordStore.inventory = [];
      customer.records = [];
      recordStore.addRecord(record);

      assert.equal('Not enough cash to buy record.', customer.buyRecord(recordStore, record));
      assert.equal(1, recordStore.recordCount());
      assert.equal(0, customer.recordCount());
      assert.equal(0.00, customer.cash);
      assert.equal(0.00, recordStore.balance);
    });

    it('should be able to sell records', function(){
      customer.cash = 0;
      recordStore.balance = 100.00;
      recordStore.inventory = [];
      recordStore.inventory = [];
      customer.records.push(record);

      customer.sellRecord(recordStore, record);

      assert.equal(0, customer.recordCount());
      assert.equal(1, recordStore.recordCount());
      assert.equal(12.99, customer.cash);
      assert.equal(87.01, recordStore.balance);
    });

    it('should not be able to sell records if the store doesn\'t have enough money to buy the record', function(){
      customer.cash = 0;
      recordStore.balance = 0.00;
      recordStore.inventory = [];
      customer.records.push(record);

      assert.equal('Not enough cash in store to sell record', customer.sellRecord(recordStore, record));
      assert.equal(1, customer.recordCount());
      assert.equal(0, recordStore.recordCount());
      assert.equal(0.00, customer.cash);
      assert.equal(0.00, recordStore.balance);
    });

  });

});
