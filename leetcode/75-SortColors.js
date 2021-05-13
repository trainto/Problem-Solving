/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  let end = nums.length - 1;
  let mid = nums.length - 1;

  for (let i = 0; i <= end; i += 1) {
    if (nums[i] === 2) {
      while (nums[end] === 2 && end > i) {
        end -= 1;
      }
      if (i < end) {
        [nums[i], nums[end]] = [nums[end], nums[i]];
        end -= 1;
      }
    }

    if (nums[i] === 1) {
      while ((nums[mid] === 2 || nums[mid] === 1) && mid > i) {
        mid -= 1;
      }
      if (i < mid) {
        [nums[i], nums[mid]] = [nums[mid], nums[i]];
        mid -= 1;
      }
    }
  }
};
