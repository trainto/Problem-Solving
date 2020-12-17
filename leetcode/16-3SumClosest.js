/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestBF = function(nums, target) {
  let ret = Number.POSITIVE_INFINITY;

  const find = (depth, index, sum) => {
    if (depth >= 3) {
      return;
    }

    if (ret === target) {
      return;
    }

    const len = depth === 0 ? pool.length - 2 : depth === 1 ? pool.length - 1 : pool.length;

    for (let i = index; i < len; i += 1) {
      if (depth === 2) {
        const tempSum = sum + pool[i];
        if (Math.abs(ret - target) > Math.abs(tempSum - target)) {
          ret = tempSum;
        }
      } else {
        find(depth + 1, i + 1, sum + pool[i]);
      }
    }
  };

  find(0, 0, 0);

  return ret;
};


var threeSumClosest = function(nums, target) {
  let diff = Number.MAX_SAFE_INTEGER;

  const pool = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < pool.length - 2; i += 1) {
    let left = i + 1;
    let right = pool.length - 1;

    while (left < right) {
      const sum = pool[i] + pool[left] + pool[right];
      if (sum === target) {
        return sum;
      }

      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }

      if (sum > target) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  return target - diff;
}

// Smaple run
console.log(threeSumClosest([-1, 2, 1, -4], 1) === 2);
console.log(threeSumClosest([1, 2, 3, 5], 6) === 6);
console.log(threeSumClosest([1, 1, 1, 0], 100) === 3);