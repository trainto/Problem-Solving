function solution(info, n, m) {
  var answer = Number.MAX_VALUE;

  const memo = new Set();

  const retrieve = (i, a, b) => {
    if (a >= answer || a >= n || b >= m) {
      return;
    }

    if (i > info.length - 1) {
      answer = Math.min(a, answer);
      return;
    }

    if (memo.has(`${i}:${a}:${b}`)) {
      return;
    }

    memo.add(`${i}:${a}:${b}`);

    retrieve(i + 1, a + info[i][0], b);
    retrieve(i + 1, a, b + info[i][1]);
  };

  retrieve(0, 0, 0);

  return answer === Number.MAX_VALUE ? -1 : answer;
}

console.log(solution([[1,2], [2,3], [2,1]], 4, 4)); // 2
console.log(solution([[1,2], [2,3], [2,1]], 1, 7)); // 0
console.log(solution([[3,3], [3,3]], 7, 1)); // 6
console.log(solution([[3,3], [3,3]], 6, 1)); // -1
