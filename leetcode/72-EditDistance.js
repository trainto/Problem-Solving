/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  row = word1.length;
  col = word2.length;
  const dp = Array.from(new Array(row + 1), () => new Array(col + 1));

  for (let r = 0; r < word1.length + 1; r += 1) {
    for (let c = 0; c < word2.length + 1; c += 1) {
      if (r === 0) {
        dp[r][c] = c;
      } else if (c === 0) {
        dp[r][c] = r;
      } else {
        if (word1[r - 1] === word2[c - 1]) {
          dp[r][c] = dp[r-1][c-1];
        } else {
          dp[r][c] = Math.min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1;
        }
      }
    }
  }

  return dp[row][col];
};

console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('intention', 'execution')); // 5
console.log(minDistance('horse', 'rse')); // 3
