/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let len = s.length;
  let half = len / 2;
  for (let i = 0; i < half; i += 1) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
