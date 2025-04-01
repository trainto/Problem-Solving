/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const memo = new Map();

  let max = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (memo.get(nums[i])) {
      continue;
    }

    const left = memo.get(nums[i] - 1);
    const right = memo.get(nums[i] + 1);

    const current = (left ? left : 0) + (right ? right : 0) + 1;
    memo.set(nums[i], current);
    if (left) {
      memo.set(nums[i] - left, current);
    }
    if (right) {
      memo.set(nums[i] + right, current);
    }

    max = Math.max(max, current);
  }

  return max;
};

console.log(longestConsecutive([100,4,200,1,3,2])) // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9
console.log(longestConsecutive([1,0,1,2])) //3
