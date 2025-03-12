/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ret = [];

  const retrieve = (i, cum, arr) => {
    const sum = cum + candidates[i];
    if (sum === target) {
      ret.push([...arr, candidates[i]]);
      return;
    } else if (sum > target) {
      return;
    }

    for (let j = i; j < candidates.length; j += 1) {
      retrieve(j, sum, [...arr, candidates[i]]);
    }
  };

  for (let i = 0; i < candidates.length; i += 1) {
    retrieve(i, 0, []);
  }

  return ret;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([3, 5, 8], 11)); // [3, 3, 5], [3, 8]]
console.log(combinationSum([3, 5, 8, 10], 13)); // [3, 3, 5], [3, 10], [5, 8]]