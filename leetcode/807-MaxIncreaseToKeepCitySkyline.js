/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let increased = 0;

  const xMemo = [];
  const yMemo = [];

  for (let x = 0; x < grid.length; x += 1) {
    for (let y = 0; y < grid[x].length; y += 1) {
      if (xMemo[y] === undefined) {
        xMemo[y] = grid.reduce((prev, list) => Math.max(prev, list[y]) , 0);
      }

      if (yMemo[x] === undefined) {
        yMemo[x] = grid[x].reduce((prev, val) => Math.max(prev, val), 0);
      }

      const targetHeight = Math.min(xMemo[y], yMemo[x]);
      if (targetHeight > grid[x][y]) {
        increased += (targetHeight - grid[x][y]);
      }
    }
  }

  return increased;
};

// Sample run
console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));
