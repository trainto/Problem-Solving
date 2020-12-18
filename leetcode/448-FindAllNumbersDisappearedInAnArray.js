/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  console.log(sorted);

  const ret = [];
  let target = 1;
  let index = 0;
  while (target <= sorted.length) {
    if (target === sorted[index]) {
      target += 1;
      index += 1;
      while (index < sorted.length && sorted[index] === sorted[index - 1]) {
        index += 1;
      }
    } else {
      ret.push(target);
      target += 1;
    }
  }

  return ret;
};

// Sample run
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));