/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let ret = -1;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[Math.abs(nums[i])] < 0) {
      ret = Math.abs(nums[i]);
      break;
    }
    nums[Math.abs(nums[i])] *= -1;
  }

  for (let  i = 0; i < nums.length; i += 1) {
    if (nums[i] < 0) {
      nums[i] *= -1;
    }
  }

  return ret;
};

// test
console.log(findDuplicate([1,3,4,2,2])); // 2
