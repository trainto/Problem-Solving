/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  const checked = new Set();

  const check = (i, j) => {
    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === '0') {
      return;
    }

    if (checked.has(`${i}:${j}`)) {
      return;
    }

    checked.add(`${i}:${j}`);

    check(i - 1, j);
    check(i + 1, j);
    check(i, j - 1);
    check(i, j + 1);

  };

  let ret = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        if (checked.has(`${i}:${j}`)) {
          continue;
        }
        ret += 1;
        check(i, j);
      }
    }
  }

  return ret;
};
