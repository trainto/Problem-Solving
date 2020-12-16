/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const n1 = [...nums1].sort((a, b) => a - b);
  const n2 = [...nums2].sort((a, b) => a - b);

  const target = n1.length > n2.length ? n1 : n2;
  const loop = n1.length > n2.length ? n2 : n1;

  const ret = [];

  let index = 0;
  for (let i = 0; i < loop.length; i += 1) {
    while (target[index] < loop[i] && index < target.length - 1) {
      index += 1;
    }

    if (target[index] === loop[i]) {
      ret.push(loop[i]);
      index += 1;
    }

    if (index > target.length - 1) {
      break;
    }
  }

  return ret;
};

// Sample run
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 3, 3, 4, 5], [5, 4, 2, 3, 3, 1]));