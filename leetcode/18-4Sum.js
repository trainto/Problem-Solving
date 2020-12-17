/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }

  const pool = [...nums].sort((a, b) => a - b);

  const memo = new Map();
  const ret = [];

  for (let i = 0; i < pool.length - 3; i += 1) {
    for (let j = i + 1; j < pool.length - 2; j += 1) {
      let left = j + 1;
      let right = pool.length - 1;
      while (left < right) {
        const sum = pool[i] + pool[j] + pool[left] + pool[right];
        if (sum === target) {
          const key = pool[i] + ',' + pool[j] + ',' + pool[left] + ',' + pool[right];
          const memoized = memo.get(key);
          if (!memoized) {
            ret.push([pool[i], pool[j], pool[left], pool[right]]);
            memo.set(key, true);
          }

          right -= 1;
          left += 1;
        } else if (sum > target) {
          right -= 1;
        } else {
          left += 1;
        }
      }
    }
  }

  return ret;
};

// Sample run
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));