/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const min = (arg1, arg2) => {
    if (arg1 === Number.MAX_VALUE && arg2 === Number.MAX_VALUE) {
      return 0;
    }

    if (arg1 > arg2) {
      return arg2;
    } else {
      return arg1;
    }
  };

  const memo = {
    get: function(key) { return this[key] === undefined ? Number.MAX_VALUE : this[key] }
  };

  for (let i = grid.length - 1; i >= 0; i -= 1) {
    for (let j = grid[i].length - 1; j >= 0; j -= 1) {
      memo[`${i}:${j}`] =  grid[i][j] + min(memo.get(`${i}:${j + 1}`), memo.get(`${i + 1}:${j}`));
    }
  }

  return memo[`0:0`];
};

var minPathSum2 = function (grid) {
  const dp = Array.from(new Array(grid.length), () => Array(grid[0].length).fill(0));

  for (let i = grid.length - 1; i >= 0; i -= 1) {
    for (let j = grid[i].length - 1; j >= 0; j -= 1) {
      let right = dp[i][j + 1] === undefined ? Number.MAX_VALUE : dp[i][j + 1];
      let down = dp[i + 1] ? dp[i + 1][j] === undefined ? Number.MAX_VALUE : dp[i + 1][j] : Number.MAX_VALUE;
      if (right === Number.MAX_VALUE && down === Number.MAX_VALUE) {
        right = 0;
        down = 0;
      }

      dp[i][j] = grid[i][j] + Math.min(right, down);
    }
  }

  return dp[0][0];
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7
console.log(
  minPathSum([
    [9, 9, 0, 8, 9, 0, 5, 7, 2, 2, 7, 0, 8, 0, 2, 4, 8],
    [4, 4, 2, 7, 6, 0, 9, 7, 3, 2, 5, 4, 6, 5, 4, 8, 7],
    [4, 9, 7, 0, 7, 9, 2, 4, 0, 2, 4, 4, 6, 2, 8, 0, 7],
    [7, 7, 9, 6, 6, 4, 8, 4, 8, 7, 9, 4, 7, 6, 9, 6, 5],
    [2, 0, 8, 7, 1, 7, 4, 3, 5, 6, 1, 9, 4, 0, 0, 2, 7],
    [0, 4, 9, 7, 1, 0, 7, 7, 3, 2, 1, 4, 7, 6, 0, 0, 0],
  ])
); // 71
console.log(
  minPathSum2([
    [3, 3, 7, 3, 2, 5, 0, 0, 3, 5],
    [7, 9, 2, 7, 8, 5, 6, 7, 7, 5],
    [9, 8, 6, 3, 0, 3, 5, 2, 7, 1],
    [2, 3, 5, 1, 6, 9, 8, 6, 9, 2],
    [3, 6, 3, 7, 3, 3, 3, 9, 3, 0],
    [6, 4, 0, 5, 8, 2, 8, 3, 4, 6],
    [5, 9, 9, 2, 0, 7, 1, 9, 5, 1],
    [3, 8, 9, 8, 6, 5, 3, 1, 6, 6],
    [3, 3, 1, 3, 0, 1, 6, 8, 6, 2],
    [6, 3, 1, 5, 5, 4, 4, 7, 5, 9],
    [0, 0, 0, 1, 0, 8, 6, 3, 9, 3],
    [2, 2, 8, 5, 7, 8, 6, 5, 8, 2],
    [8, 5, 6, 1, 2, 3, 7, 7, 0, 4],
    [8, 2, 4, 0, 4, 4, 8, 2, 0, 9],
    [7, 2, 3, 5, 7, 3, 5, 3, 8, 4],
    [7, 8, 9, 5, 2, 1, 9, 9, 0, 1],
  ])
); // 80