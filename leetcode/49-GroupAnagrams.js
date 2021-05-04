/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const ret = [];
  const memo = new Map();

  for (let i = 0; i < strs.length; i += 1) {
    const sorted = strs[i].split('').sort().join('');
    const memoized = memo.get(sorted);
    if (memoized !== undefined) {
      ret[memoized].push(strs[i]);
    } else {
      ret.push([strs[i]]);
      memo.set(sorted, ret.length - 1);
    }
  }

  return ret;
};

// test
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
