/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const probe = (i, j, index) => {
    if (board[i] === undefined || word[index] === undefined || board[i][j] !== word[index] ) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    const ch = board[i][j];
    board[i][j] = '_';

    if (
      probe(i - 1, j, index + 1) ||
      probe(i + 1, j, index + 1) ||
      probe(i, j - 1, index + 1) ||
      probe(i, j + 1, index + 1)
    ) {
      board[i][j] = ch;
      return true;
    }

    board[i][j] = ch;

    return false;
  };

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (probe(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

// test
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')); // true
