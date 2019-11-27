/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s === t) {
    return true;
  }

  const memo = new Map();
  const taken = new Set();

  const len = s.length;
  for (let i = 0; i < len; i += 1) {
    if (memo.has(s[i])) {
      if (memo.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (taken.has(t[i])) {
        return false;
      }
      memo.set(s[i], t[i]);
      taken.add(t[i]);
    }
  }

  return true;
}
