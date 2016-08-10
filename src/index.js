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

module.exports = {
  arabicToNumeral(int) {
    return getNumeralsForPlace(int)
  }
};
