'use strict';

const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

const getNumeralsForPlace = (int, placeIdx = 0) => {
  const numeralIdx = placeIdx * 2;
  const numeral = numerals[numeralIdx];
  const halfStep = numerals[numeralIdx + 1];
  const fullStep = numerals[numeralIdx + 2];

  let str = '';

  if (int === 9) {
    return numeral + fullStep;
  } else if (int === 4) {
    return numeral + halfStep;
  } else if (int >= 5) {
    str += halfStep;
    int -= 5;
  }

  while (int > 0) {
    str += numeral;
    int--;
  }

  return str;
};

const getNumeralArray = (idx, int, ...ints) => {
  if (int === undefined) { return []; }
  return [getNumeralsForPlace(int, idx), ...getNumeralArray(++idx, ...ints)];
};

const getNumeralValue = numeral => {
  const numeralPos = numerals.indexOf(numeral) / 2;
  let trailingZeros = Math.floor(numeralPos);
  const isHalfStep = (numeralPos - trailingZeros) === 0.5;

  let intStr = isHalfStep ? 5 : 1;

  while (trailingZeros > 0) {
    intStr += '0';
    trailingZeros--;
  }

  return parseInt(intStr, 10);
};

module.exports = {
  arabicToNumeral(int) {
    const ints = int.toString().split('').map(x => parseInt(x)).reverse();
    return getNumeralArray(0, ...ints).reverse().join('');
  },
  numeralToArabic(numeral) {
    return getNumeralValue(numeral);
  }
};
