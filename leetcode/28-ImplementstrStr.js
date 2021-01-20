/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const len1 = haystack.length;
  const len2 = needle.length;
  if (len2 <= 0) {
    return 0;
  }
  if (len1 <= 0) {
    return -1;
  }
  for (let i = 0; i <= len1 - len2; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1;
      for (; j < len2; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      if (j === len2) {
        return i;
      }
    }
  }
  return -1;
};
