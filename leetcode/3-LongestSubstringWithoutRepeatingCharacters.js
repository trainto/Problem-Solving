/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  const set = new Set();
  const len = s.length;
  let ret = 0, i = 0, j = 0;
  while (i < len && j < len) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ret = Math.max(ret, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  return ret;
};
