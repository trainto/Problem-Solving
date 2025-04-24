/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  const memo = new Map();

  const retrieve = (i) => {
    if (i === nums.length - 1) {
      max = Math.max(max, nums[i]);
      return [nums[i], nums[i]];
    }

    const cache = memo.get(i);
    if (cache != null) {
      return cache;
    }

    const [subMax, subMin] = retrieve(i + 1);
    const curMax = Math.max(nums[i] * subMax, nums[i] * subMin, nums[i]);
    const curMin = Math.min(nums[i] * subMax, nums[i] * subMin, nums[i]);
    memo.set(i, [curMax, curMin]);

    max = Math.max(max, curMax, subMax);

    return [curMax, curMin];
  };

  retrieve(0);

  return max;
};
