var assert = require('assert');
var Record = require('../Record');

describe('Record', function(){
  var record = new Record('Sultans of Swing: The Very Best', 'Dire Straits', 12.99);

  it('should have a title', function(){
    assert.equal('Sultans of Swing: The Very Best', record.title);
  });

  it('should have an artist', function(){
    assert.equal('Dire Straits', record.artist);
  });

  it('should have a price', function(){
    assert.equal(12.99, record.price);
  });

});
