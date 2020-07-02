/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const ret = [];
  const memo = [];

  let i = 0;
  const len = groupSizes.length;
  for (; i < len; i += 1) {
    if (groupSizes[i] === 1) {
      ret.push([i]);
      continue;
    }

    const memoIndex = memo[groupSizes[i]];
    if (memoIndex !== undefined) {
      const length = ret[memoIndex].push(i);
      if (length === groupSizes[i]) {
        delete memo[groupSizes[i]]
      }
    } else {
      const length = ret.push([i]);
      memo[groupSizes[i]] = length - 1;
    }
  }

  return ret;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));