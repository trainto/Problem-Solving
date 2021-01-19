/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // FIXME: It should be O(log(m+n))

  // This is O((m+n)log(m+n)) solution
  const sorted = nums1.concat(nums2).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2) {
    return sorted[middle] + 0.0;
  } else {
    return (sorted[middle] + sorted[middle - 1]) / 2;
  }
};

// smaple run
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0000
