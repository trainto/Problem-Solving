
function searchInsertHelper(nums, start, end, target) {
  if (start === end) {
    if (target <= nums[start]) {
      return start;
    }
    return start + 1;
  }

  const center = Math.floor((start + end) / 2);
  if (target <= nums[center]) {
    return searchInsertHelper(nums, start, center, target);
  }
  return searchInsertHelper(nums, center + 1, end, target);
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return searchInsertHelper(nums, 0, nums.length - 1, target);
};
