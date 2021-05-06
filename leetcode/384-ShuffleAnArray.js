/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  // const shuffled = [];
  // const memo = new Set();
  // while (shuffled.length !== this.nums.length) {
  //   const index = Math.trunc(Math.random() * this.nums.length);
  //   if (memo.has(index)) {
  //     continue;
  //   }

  //   shuffled.push(this.nums[index]);
  //   memo.add(index);
  // }

  const shuffled = [...this.nums];
  for (let i = 0; i < shuffled.length * 2; i += 1) {
    const random = Math.trunc(Math.random() * shuffled.length);
    [shuffled[i % shuffled.length], shuffled[random]] = [shuffled[random], shuffled[i % shuffled.length]];
  }

  return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
