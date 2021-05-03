/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) | 0) + 1);
  }

  const memo = [];
  for (const [num, freq] of freqMap) {
    if (memo[freq] === undefined) {
      memo[freq] = [];
    }
    memo[freq].push(num);
  }

  const ret = [];
  for (let i = memo.length - 1; i >= 0; i -= 1) {
    if (memo[i]) {
      ret.push(...memo[i]);

      if (ret.length === k) {
        return ret;
      }
    }

  }

  return ret;
};

// test
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1, 2]
