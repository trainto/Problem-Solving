/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  let boxMemo = [];

  for (let i = 0; i < 9; i+= 1) {
    const rowMemo = new Set();
    const colMemo = new Set();

    if (i === 0 || i === 3 || i === 6) {
      boxMemo[0] = new Set();
      boxMemo[1] = new Set();
      boxMemo[2] = new Set();
    }

    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] !== '.') {
        if (rowMemo.has(board[i][j])) {
          return false;
        }

        const boxNo = Math.floor(j / 3);
        if (boxMemo[boxNo].has(board[i][j])) {
          return false;
        }

        rowMemo.add(board[i][j]);
        boxMemo[boxNo].add(board[i][j]);
      }

      if (board[j][i] !== '.') {
        if (colMemo.has(board[j][i])) {
          return false;
        }
        colMemo.add(board[j][i]);
      }
    }
  }

  return true;
};
