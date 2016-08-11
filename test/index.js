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
    test('should return numeral XX when given arabic 20', () => {
      assert.equal(convert.arabicToNumeral(20), 'XX')
    });
    test('should return numeral XXI when given arabic 21', () => {
      assert.equal(convert.arabicToNumeral(21), 'XXI')
    });
    test('should return numeral XXIV when given arabic 24', () => {
      assert.equal(convert.arabicToNumeral(24), 'XXIV')
    });
    test('should return numeral XXXV when given arabic 35', () => {
      assert.equal(convert.arabicToNumeral(35), 'XXXV')
    });
    test('should return numeral XLVIII when given arabic 48', () => {
      assert.equal(convert.arabicToNumeral(48), 'XLVIII')
    });
    test('should return numeral LIX when given arabic 59', () => {
      assert.equal(convert.arabicToNumeral(59), 'LIX')
    });
  });
  suite('handle some quad digit cases', () => {
    test('should return numeral MLXVI for arabic 1066', () => {
      assert.equal(convert.arabicToNumeral(1066), 'MLXVI');
    });
    test('should return numeral MCMLXXXIX for arabic 1989', () => {
      assert.equal(convert.arabicToNumeral(1989), 'MCMLXXXIX');
    });
  });
});

suite('numeralToArabic', () => {
  test('should return arabic 1 when given numeral I', () => {
    assert.equal(convert.numeralToArabic('I'), 1);
  })
});
