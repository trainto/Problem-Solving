/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // for (let i = 0; i < nums.length; i += 1) {
  //   if (i > 0 && nums[i] < nums[i - 1]) {
  //     if (target > nums[i - 1] || nums[i] > target)
  //     return -1;
  //   }
  //   if (nums[i] === target) {
  //     return i;
  //   }
  // }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right) {
      return nums[left] === target ? left : -1;
    }

    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] > nums[left]) {
      if (nums[left] === target) {
        return left;
      } else if (target > nums[left] && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (nums[right] === target) {
        return right;
      } else if (target > nums[middle] && target < nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

// test
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
