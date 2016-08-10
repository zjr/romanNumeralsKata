'use strict';

module.exports = {
  arabicToNumeral(int) {
    let str = '';
    if (int / 5 >= 1) {
      str += 'V';
      int -= 5;
    }
    if (int === 4) {
      str += 'IV';
    }
    if (int <= 3) {
      for (let i = 0; i < int; i++) {
        str += 'I';
      }
    }
    return str;
  }
};
