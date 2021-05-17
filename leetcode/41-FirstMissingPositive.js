/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    const num = Number.isInteger(nums[i]) ? nums[i] : Number(nums[i].split(':')[0]);
    if (num > 0 && num <= nums.length) {
      nums[num - 1] = `${nums[num - 1]}:*`;
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if ((nums[i] + '').includes('*') === false) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

// test
console.log(firstMissingPositive([1,2,0])); // 3
