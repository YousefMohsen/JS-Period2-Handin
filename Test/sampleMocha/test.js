var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    
    });
  });




describe(' remeber done()', function() {
    var foo = false;
    //done is a function that tells mocha to move on 
before(function(done){
    setTimeout(function(){
  foo = true;
    done(); }, 1000); });
    
   
it('should return true', function() {
    assert.equal(-1, [1,2,3].indexOf(4));
    expect(foo).to.equal(true);
    
  });
  
  });


///Chai gør det nemme at forstå testene som noob



describe('is a number()', function() {
    it('s ', function() {
      expect( [1,2,3].indexOf(2)).to.be.a('number');
    
    
    });
  });


});
