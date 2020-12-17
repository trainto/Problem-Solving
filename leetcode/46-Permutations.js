/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = [];

  const combine = (depth, combination) => {
    for (let i = 0; i < nums.length; i += 1) {
      if (combination.includes(nums[i])) {
        continue;
      }

      if (depth === nums.length - 1) {
        ret.push([...combination, nums[i]]);
      } else {
        combine(depth + 1, [...combination, nums[i]]);
      }
    }
  };

  combine(0, []);

  return ret;
};


// Sample run
console.log(permute([1, 2, 3]));