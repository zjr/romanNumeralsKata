'use strict';

const assert = require('chai').assert;

const convert = require('../src');

suite('arabicToNumeral', () => {
  test('should return numeral I when supplied with arabic 1', () => {
    assert.equal(convert.arabicToNumeral(1), 'I');
  });
});
