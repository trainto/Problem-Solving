/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows < 1) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const ret = [[1], [1, 1]];
  for (let i = 2; i < numRows; i += 1) {
    ret[i] = [];
    const row = ret[i];
    const prevRow = ret[i - 1];
    for (let j = 0; j < i + 1; j += 1) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = prevRow[j - 1] + prevRow[j]
      }
    }
  }

  return ret;
};
