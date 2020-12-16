/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let cur = 0;
  while (cur < nums.length - 1) {
    if (nums[cur] === 0) {
      let target = cur + 1;
      while (nums[target] === 0 && target < nums.length -1) {
        target += 1;
      }

      if (nums[target] === 0) {
        break;
      }

      const temp = nums[target];
      nums[target] = nums[cur];
      nums[cur] = temp;
    }
    cur += 1;
  }
};

// Sample run
let testCase = [0, 1, 0, 3, 12];
moveZeroes(testCase);
console.log(testCase);
