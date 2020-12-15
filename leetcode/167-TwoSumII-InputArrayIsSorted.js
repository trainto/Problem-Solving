/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] >= target ) {
  //     break;
  //   }

  //   for (let j = i + 1; j < numbers.length; j += 1) {
  //     const sum = numbers[i] + numbers[j];
  //     if (sum === target) {
  //       return [i + 1, j + 1];
  //     } else if (sum > target) {
  //       break;
  //     }
  //   }
  // }

  // return [];

  //---------------------------------------------------------

  const memo = new Map();
  for (let i = 0; i < numbers.length; i += 1) {
    if (memo.has(target - numbers[i])) {
      return [memo.get(target - numbers[i]), i + 1];
    }

    memo.set(numbers[i], i + 1);
  }

  return [];
};

// Sample run
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));