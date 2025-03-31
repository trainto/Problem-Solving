/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const find = (row, start, end) => {
    if (start > end) {
      return false;
    }

    const mid = Math.floor((start + end) / 2);
    if (matrix[row][mid] === target) {
      return true;
    } else if (target < matrix[row][mid]) {
      return find(row, start, mid - 1);
    } else {
      return find(row, mid +1, end);
    }
  };

  const findRow = (start, end) => {
    if (start > end) {
      return false;
    }

    const mid = Math.floor((start + end) / 2);

    if (target < matrix[mid][0]) {
      return findRow(start, mid - 1);
    } else {
      if (target <= matrix[mid][matrix[mid].length - 1]) {
        return find(mid, 0, matrix[mid].length - 1);
      } else {
        return findRow(mid + 1, end)
      }
    }
  };

  return findRow(0, matrix.length - 1)
};

console.log(
  searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ], 3)
); // true
