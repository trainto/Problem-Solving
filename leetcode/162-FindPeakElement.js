/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) {
    return 0;
  }

  if (nums.length === 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }

  for (let  i = 0; i < nums.length; i += 1) {
    if (i === nums.length - 1 || nums[i + 1] < nums[i]) {
      if (i === 0 || nums[i - 1] < nums[i]) {
        return i;
      }

      i += 1;
    }
  }
};

// test
console.log(findPeakElement([1,2,3,1])); // 2
