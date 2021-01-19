/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let countOfZero = 0;
  let total = 1;
  let zeroIndex;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      if (countOfZero < 2) {
        countOfZero += 1;
        zeroIndex = i;

        if (countOfZero >= 2) {
          return new Array(nums.length).fill(0);
        }

        continue;
      }
    }
    total *= nums[i];
  }

  const output = new Array(nums.length);

  if (countOfZero === 1) {
    output.fill(0);
    output[zeroIndex] = total;
    return output;
  }

  nums.forEach((num, i) => {
    output[i] = Math.floor(total / num);
  });

  return output;
};

// Sample run
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([0, 0])); // [0, 0];
console.log(productExceptSelf([0, 1])); // [1, 0];
