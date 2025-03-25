/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const ret = Object.cl;
  let dups = 1;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) {
      dups += 1;
      if (dups >= 3) {
        continue;
      }
    } else {
      dups = 1;
    }
    ret.push(nums[i]);
  }

  ret.forEach((v, i) => nums[i] = v);

  return ret.length;
};

var removeDuplicates2 = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let l = 1;
  let r = 2;

  while (r < nums.length) {
    if (nums[r] === nums[l] && nums[l] === nums[l - 1]) {
      while (nums[r] === nums[l] && r < nums.length) {
        r += 1;
      }

      if (nums[r] === undefined) {
        break;
      }
    }

    l += 1;
    nums[l] = nums[r];
    r += 1;
  }

  return l + 1;
};

console.log(removeDuplicates2([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates2([1, 1, 1, 1, 1, 1]));
console.log(removeDuplicates2([1, 2, 2]));
