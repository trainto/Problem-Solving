/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const ret = [];

  const sorted = candidates.sort((a, b) => a > b ? 1 : -1);
  console.log(sorted);

  const retrieve = (arr, i, cum) => {
    const sum = cum + sorted[i];

    if (sum > target) {
      return true;
    }

    if (sum === target) {
      ret.push([...arr, sorted[i]]);
      return true;
    }

    for (let j = i + 1; j < sorted.length; j += 1) {
      if (j > i + 1 && sorted[j] === sorted[j-1]) {
        continue;
      }

      if (retrieve([...arr, sorted[i]], j, sum)) {
        break;
      }
    }
  };

  for (let i = 0; i < sorted.length; i += 1) {
    if (i > 0 && sorted[i] === sorted[i -1]) {
      continue;
    }
    retrieve([], i, 0);
  }

  return ret;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5));
// console.log(combinationSum2([1, 1, 1, 1, 2], 2));
// console.log(combinationSum2([3, 1, 3, 5, 1, 1], 8));
// console.log(combinationSum2([1], 2));
// console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1], 20));
