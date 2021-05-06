/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  const memo = new Set();

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        memo.add(`i${i}`);
        memo.add(`j${j}`);
      }
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (memo.has(`i${i}`) || memo.has(`j${j}`)) {
        matrix[i][j] = 0;
      }
    }
  }
};

const setZeroes2 = function (matrix) {
  const x = new Set();
  for (let i = 0; i < matrix.length; i += 1) {
    let zeroes = false;
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        zeroes = true;
        x.add(j);
      }
    }

    if (zeroes) {
      matrix[i].fill(0);
    }
  }

  for (const col of x) {
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i][col] = 0;
    }
  }
}
