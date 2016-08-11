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

const determineChuckCombo = (arr, next) => {
  const last = arr[0][0];
  if (!last) {
    arr[0].unshift(next);
    return arr;
  }
  if (last.trailingZeros > next.trailingZeros) {
    // end of sequence
    arr.unshift([next]);
  } else if (last.trailingZeros < next.trailingZeros) {
    // 4 or 9, end of sequence
    arr[0] = [{ value: next.value - last.value }];
    arr.unshift([]);
  } else {
    // same trails, add together
    arr[0].unshift(next);
  }
  return arr;
};

const getNumeralInfo = numeral => {
  const numeralPos = numerals.indexOf(numeral) / 2;
  const trailingZeros = Math.floor(numeralPos);
  const isHalfStep = (numeralPos - trailingZeros) === 0.5;

  let intStr = isHalfStep ? 5 : 1;

  for (let x = 0; x < trailingZeros; x++) {
    intStr += '0';
  }

  const value = parseInt(intStr, 10);

  return { value, trailingZeros };
};

const splitNumeralChunksAndAdd = numeral => {
  return numeral
    .split('')
    .map(getNumeralInfo)
    .reduce(determineChuckCombo, [[]])
    .reverse()
    .map(x => x.reduce((prev, next) => prev + next.value, 0))
    .reduce((prev, next) => prev + next);
};

module.exports = {
  arabicToNumeral(int) {
    const ints = int.toString().split('').map(x => parseInt(x)).reverse();
    return getNumeralArray(0, ...ints).reverse().join('');
  },
  numeralToArabic(numeral) {
    return splitNumeralChunksAndAdd(numeral);
  }
};
