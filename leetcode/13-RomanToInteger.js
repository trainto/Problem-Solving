/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let ret = 0;
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V' || s[i + 1] === 'X') {
          ret -= 1;
        } else {
          ret += 1;
        }
        break;
      case 'V':
        ret += 5;
        break;
      case 'X':
        if (s[i + 1] === 'L' || s[i + 1] === 'C') {
          ret -= 10;
        } else {
          ret += 10;
        }
        break;
      case 'L':
        ret += 50;
        break;
      case 'C':
        if (s[i + 1] === 'D' || s[i + 1] === 'M') {
          ret -= 100;
        } else {
          ret += 100;
        }
        break;
      case 'D':
        ret += 500;
        break;
      case 'M':
        ret += 1000;
        break;
      default:
        break;
    }
  }
  return ret;
};
