/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i + 1; j < matrix[i].length; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  matrix.forEach((arr) => arr.reverse());
};
