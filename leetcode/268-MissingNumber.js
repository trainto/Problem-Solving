/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberSort = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let i = 0;
  for (; i < sorted.length; i += 1) {
    if (i !== sorted[i]) {
      return i;
    }
  }

  return i;
};

var missingNumber = function(nums) {
  let temp = nums.length;
  temp = nums.reduce((prev, num, i) => prev ^ i ^ num, temp)
  return temp;
};

// Sample run
console.log(missingNumber([3, 0, 1]) === 2);  // 2
console.log(missingNumber([0, 1]) === 2);  // 2