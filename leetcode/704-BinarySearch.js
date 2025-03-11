/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (right - left === 1) {
      return nums[right] === target ? right : nums[left] === target ? left : -1;
    }

    const center = Math.floor((left + right) / 2);
    if (nums[center] === target) {
      return center;
    }

    if (nums[center] > target) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return nums[left] === target ? left : -1;
};
