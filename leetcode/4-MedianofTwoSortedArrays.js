/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // This is O((m+n)log(m+n)) solution
  /*
  const sorted = nums1.concat(nums2).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2) {
    return sorted[middle] + 0.0;
  } else {
    return (sorted[middle] + sorted[middle - 1]) / 2;
  }
  */

  let prevNum;
  let curNum;
  let cur1 = -1;
  let cur2 = -1;
  let i = -1;
  const middle = Math.floor((nums1.length + nums2.length) / 2);

  while (i < middle) {
    if (nums1[cur1 + 1] === undefined) {
      cur2 += 1;
      prevNum = curNum;
      curNum = nums2[cur2];
    } else if (nums2[cur2 + 1] === undefined) {
      cur1 += 1;
      prevNum = curNum;
      curNum = nums1[cur1];
    } else if (nums1[cur1 + 1] <= nums2[cur2 + 1]) {
      cur1 += 1;
      prevNum = curNum;
      curNum = nums1[cur1];
    } else {
      cur2 += 1;
      prevNum = curNum;
      curNum = nums2[cur2];
    }
    i += 1;
  }

  return (nums1.length + nums2.length) % 2 === 0 ? (curNum + prevNum) / 2 : curNum + 0.0;
};

// smaple run
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0000
console.log(findMedianSortedArrays([1, 5, 10], [3, 9])); // 5.0000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5000
