/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const memo = new Map();

  for (let i = 0; i < s.length; i += 1) {
    if (memo.get(s[i]) !== undefined) {
      memo.set(s[i], false)
    } else {
      memo.set(s[i], true);
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (memo.get(s[i])) {
      return i;
    }
  }

  return -1;
};