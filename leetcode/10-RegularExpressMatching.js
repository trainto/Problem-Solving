/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let i = 0;
  let j = 0;
  while (i < s.length || j < p.length) {
    if (s[i] === undefined || p[j] === undefined) {
      return false;
    }

    if (p[j] === '.') {
      i += 1;
      j += 1;
    } else if (p[j] === '*') {
      if (p[j - 1]);
    } else {
      if (s[i] !== p[j]) {
        return false;
      }
      i += 1;
      j += 1;
    }
  }

  return true;
};

// Sample run
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('abcde', '.bc.e')); // true
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('mississippi', 'mis*is*p*.')); // false
console.log(isMatch('aaa', 'a*a')); // true
console.log(isMatch('b', 'a*b')); // true
