/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
  // DP
  const memo = new Map();
  ret = Number.MAX_VALUE;

  const probe = (index, jumps) => {
    if (jumps >= ret) {
      return -1;
    }

    if (memo.has(index)) {
      ret = Math.min(ret, memo.get(index) + jumps);
      return memo.get(index);
    }

    if (index >= nums.length - 1) {
      ret = Math.min(ret, jumps);
      return 0;
    }

    let localMin = Number.MAX_VALUE;
    for (let i = nums[index]; i > 0; i -= 1) {
      const result = probe(index + i, jumps + 1);
      if (result === 0) {
        localMin = 1;
        break;
      }
      if (result >= 0) {
        localMin = Math.min(localMin, result + 1);
      }
    }

    if (localMin !== Number.MAX_VALUE) {
      memo.set(index, localMin);
    }

    return localMin === Number.MAX_VALUE ? -1 : localMin;
  };

  probe(0, 0);

  return ret === Number.MAX_VALUE ? 0 : ret;
};

// test
console.log(jump([2,3,1,1,4])); // 2;
console.log(jump([6,2,6,1,7,9,3,5,3,7,2,8,9,4,7,7,2,2,8,4,6,6,1,3])); // 4;
