/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const len = nums.length;
  let i = 0 , j = 0;
  for (; i < len; i++) {
    if (nums[i] === val) {
      j = i + 1;
      while (nums[j] === val && j < len) {
        j++;
      }
      nums[i] = nums[j];
      nums[j] = val;
    }
    if (j >= len) {
      break;
    }
  }
  return i;
};
