/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const len = nums.length;
  let ret = 0;
  for (let i = 0; i < len; i++) {
    ret ^= nums[i];
  }
  return ret;
};
