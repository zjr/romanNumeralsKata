'use strict';

module.exports = {
  arabicToNumeral(int) {
    let str = '';
    for (let i = 0; i < int; i++) {
      str += 'I';
    }
    return str;
  }
};
