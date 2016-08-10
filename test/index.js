'use strict';

const assert = require('chai').assert;

const convert = require('../src');

suite('arabicToNumeral', () => {
  suite('handle single digits', () => {
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
    test('should return numeral IX when supplied with arabic 9', () => {
      assert.equal(convert.arabicToNumeral(9), 'IX');
    });
  });
  suite('handle double digits', () => {
    test('should return numeral XX when given arabic 20.', () => {
      assert.equal(convert.arabicToNumeral(20), 'XX')
    })
  })
});
