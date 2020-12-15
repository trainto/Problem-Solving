/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumN3 = function(nums) {
  if (!nums || nums.length < 3) {
    return [];
  }

  const pool = [...nums].sort((a, b) => a - b);

  const memo = new Map();

  const ret = [];
  for (let i = 0; i < pool.length - 2; i += 1) {
    if (pool[i] === pool[i - 1]) {
      continue;
    }

    if (pool[i] > 0) {
      break;
    }

    for (let j = i + 1; j < pool.length - 1; j += 1) {
      if (j - 1 !== i && pool[j] === pool[j - 1]) {
        continue;
      }

      const twoSum = pool[i] + pool[j];
      if (twoSum > 0) {
        break;
      }

      for (let k = j + 1; k < pool.length; k += 1) {
        if (k - 1 !== j && pool[k] === pool[k - 1]) {
          continue;
        }

        const threeSum = twoSum + pool[k];
        if (threeSum === 0) {
          const key = pool[i] + ',' + pool[j] + ',' + pool[k];
          if (memo.get(key)) {
            continue;
          }
          ret.push([pool[i], pool[j], pool[k]]);
          memo.set(key, true);
        } else if (threeSum > 0) {
          break;
        }
      }
    }
  }

  return ret;
};

var threeSum = function(nums) {
  if (!nums || nums.length < 3) {
    return [];
  }

  const pool = [...nums].sort((a, b) => a - b);

  const ret = [];

  for (let i = 0; i < pool.length - 2; i += 1) {
    if (pool[i] === pool[i - 1]) {
      continue;
    }

    if (pool[i] > 0) {
      break;
    }

    let left = i + 1;
    let right = pool.length - 1;

    while (left < right) {
      const val = pool[i] + pool[left] + pool[right];
      if (val === 0) {
        ret.push([pool[i], pool[left], pool[right]]);

        right -= 1;
        while (pool[right] === pool[right + 1]) {
          right -= 1;
        }

        left += 1;
        while (pool[left] === pool[left - 1]) {
          left += 1;
        }
      } else if (val > 0) {
        right -= 1;
        while (pool[right] === pool[right + 1]) {
          right -= 1;
        }
      } else {
        left += 1;
        while (pool[left] === pool[left - 1]) {
          left += 1;
        }
      }
    }
  }

  return ret;
};

// Sample run
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
console.log(threeSum([-2,0,1,1,2]));
console.log(threeSum([]));
