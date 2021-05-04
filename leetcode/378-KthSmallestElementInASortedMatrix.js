/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
  const indices = new Array(matrix.length).fill(0);
  let cur = undefined;
  let count = 0;

  while (count < k) {
    let row = -1;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < matrix.length; i += 1) {
      if (matrix[i][indices[i]] < min) {
        min = matrix[i][indices[i]];
        row = i;
      }
    }

    cur = min;
    indices[row] += 1;

    count += 1;
  }

  return cur;
};

// test
console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8)); // 13

// TODO: binary search
