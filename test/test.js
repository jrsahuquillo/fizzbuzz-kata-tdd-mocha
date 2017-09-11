var assert = require("assert");
var fizzbuzz = require('../src/fizzbuzz.js')

describe('Fizzbuzz kata', function(){

  it('returns 1 when number is 1', function(){
    assert.equal(getFizzBuzzResult(1), 1);
  })

  it('returns 2 when number is 2', function(){
    assert.equal(getFizzBuzzResult(2), 2);
  })

  it('returns Fizz when number is multiple of 3', function(){
    assert.equal(getFizzBuzzResult(3), "Fizz");
    assert.equal(getFizzBuzzResult(9), "Fizz");
    assert.equal(getFizzBuzzResult(12), "Fizz");
  })

  it('returns Buzz when number is multiple of 5', function(){
    assert.equal(getFizzBuzzResult(5), "Buzz");
    assert.equal(getFizzBuzzResult(10), "Buzz");
    assert.equal(getFizzBuzzResult(20), "Buzz");
  })

  it('returns FizzBuzz when number is multiple of 3 and 5', function(){
    assert.equal(getFizzBuzzResult(15), "FizzBuzz");
    assert.equal(getFizzBuzzResult(30), "FizzBuzz");
    assert.equal(getFizzBuzzResult(90), "FizzBuzz");
  })
});

function getFizzBuzzResult(num) {
  return fizzbuzz[num-1]
}
