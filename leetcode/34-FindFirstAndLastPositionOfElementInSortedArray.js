/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      let l = middle;
      let r = middle;
      while (nums[l] === target) {
        l -= 1;
      }
      while (nums[r] === target) {
        r += 1;
      }

      return [l + 1, r - 1];
    }

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return [-1, -1];
};

  // test
  console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
