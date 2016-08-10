'use strict';

const assert = require('chai').assert;

const convert = require('../src');

suite('arabicToNumeral', () => {
  test('should return numeral I when supplied with arabic 1', () => {
    assert.equal(convert.arabicToNumeral(1), 'I');
  });
  test('should return numeral III when supplied with arabic 3', () => {
    assert.equal(convert.arabicToNumeral(3), 'III');
  });
  test('should return numeral IV when supplied with arabic 4', () => {
    assert.equal(convert.arabicToNumeral(4), 'IV');
  });
  test('should return numeral V when supplied with arabic 5', () => {
    assert.equal(convert.arabicToNumeral(5), 'V');
  });
  test('should return numeral VIII when supplied with arabic 8', () => {
    assert.equal(convert.arabicToNumeral(8), 'VIII');
  });
});
