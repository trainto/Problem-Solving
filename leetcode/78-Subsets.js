/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  ret = [];
  ret.push([]);

  const search = (index, subset) => {
    for (let i = index; i < nums.length; i += 1) {
      subset.push([nums[i]]);
      ret.push([...subset]);

      search(i + 1, subset);
      subset.pop();
    }
  };

  search(0, [])

  return ret;
};

// Sample run
console.log(subsets([1, 2, 3]));
