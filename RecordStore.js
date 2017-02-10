var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  recordCount: function(){
    return this.inventory.length;
  },

  addRecord: function(record){
    this.inventory.push(record);
  },

  listRecords: function(){
    return this.inventory;
  },

  sellRecord: function(record){
    var soldRecord = record;
    var index = this.inventory.indexOf(soldRecord);
    this.inventory.splice(index, 1);
    this.balance += soldRecord.price;
  },

  financialReport: function(){
    var totalValue = 0;
    var inventoryValue = 0;

    this.inventory.forEach(function(record){
      inventoryValue += record.price;
    });
    totalValue += this.balance;
    totalValue += inventoryValue;


    var report = {};
    report['balance'] = this.balance;
    report['inventoryValue'] = inventoryValue;
    report['totalValue'] = totalValue;
    return report;
  },

};

module.exports = RecordStore;
