var Customer = function(name){
  this.name = name;
  this.cash = 0.00;
  this.records = [];
}

Customer.prototype = {
  recordCount: function(){
    return this.records.length;
  },

  buyRecord: function(recordStore, record){
    if(this.cash >= record.price){
      recordStore.sellRecord(record);
      this.records.push(record);
      this.cash -= record.price;
    } else {
      return "Not enough cash to buy record.";
    }
  },

  sellRecord: function(recordStore, record){
    if(recordStore.balance >= record.price){
      var soldRecord = record;
      var index = this.records.indexOf(soldRecord);
      this.records.splice(index, 1);
      this.cash += soldRecord.price;

      recordStore.addRecord(soldRecord);
      recordStore.balance -= record.price;
    } else {
      return "Not enough cash in store to sell record";
    }
  }
}

module.exports = Customer;
