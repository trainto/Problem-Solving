/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length <= 1) {
    return;
  }
  
  for (i = nums.length - 1; i >= 1; i -= 1) {
    if (nums[i] > nums[i-1]) {
      let minDiff = Number.MAX_SAFE_INTEGER;
      let j = i;
      let target = j;
      while (j < nums.length) {
        let diff = nums[j] - nums[i - 1];
        if (diff <= 0) {
          j += 1;
          continue;
        } else if (diff < minDiff) {
          minDiff = diff;
          target = j;
        }
        j += 1;
      }

      [nums[i - 1], nums[target]] = [nums[target], nums[i - 1]];
      const tailSorted = nums.slice(i).sort((a, b) => a - b);
      for (let r = 0; r < tailSorted.length; r += 1) {
        nums[r + i] = tailSorted[r];
      }
      return;
    }
  }

  nums.reverse();
};

