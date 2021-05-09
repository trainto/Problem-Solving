/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  const willChange = (i, j) => {
    let lives = 0;
    for (y = i - 1; y < i + 2; y += 1) {
      for (let x = j - 1; x < j + 2; x += 1) {
        if ((i === y && j === x) || board[y] === undefined || board[y][x] === undefined) {
          continue;
        }

        if (board[y][x] === 1) {
          lives += 1;
        }
      }
    }

    if (board[i][j] === 1) {
      if (lives < 2) {
        return true;
      } else if (lives === 2 || lives === 3) {
        return false;
      } else if (lives > 3) {
        return true;
      }
    } else {
      if (lives === 3) {
        return true;
      }

      return false;
    }
  };

  const memo = [];

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (willChange(i, j)) {
        memo.push(`${i}:${j}`);
      }
    }
  }

  memo.forEach((code) => {
    const [y, x] = code.split(':');
    board[y][x] = board[y][x] === 0 ? 1 : 0;
  })
};

// test
test = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(test);
console.log(test); // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
