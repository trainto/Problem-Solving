/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = function(nums1, nums2, nums3, nums4) {
  let ret = 0;

  const memo = new Map();
  for (let i = 0; i < nums1.length; i += 1) {
    for (let j = 0; j < nums2.length; j += 1) {
      const temp = nums1[i] + nums2[j];
      memo.set(temp, (memo.get(temp) || 0) + 1);
    }
  }

  for (let i = 0; i < nums3.length; i += 1) {
    for (let j = 0; j < nums4.length; j += 1) {
      const temp = (nums3[i] + nums4[j]) * -1;
      ret += (memo.get(temp) || 0)
    }
  }

  return ret;
};

// test
console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2])); // 2
