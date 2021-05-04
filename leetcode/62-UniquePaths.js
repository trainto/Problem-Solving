/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  if (m === 1 && n === 1) {
    return 1;
  }

  const dp = new Map();

  const move = (y, x) => {
    const memoized = dp.get(`${y}:${x}`);
    if (memoized) {
      return memoized;
    }

    if (y > m || x > n) {
      return 0;
    }

    paths = 0;
    if (y === m && x + 1 === n) {
      paths += 1;
    } else {
      paths += move(y, x + 1);
    }

    if (x === n && y + 1 === m) {
      paths += 1;
    } else {
      paths += move(y + 1, x);
    }

    dp.set(`${y}:${x}`, paths);
    return paths;
  };

  return move(1, 1);
};

// test
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(1, 1)); // 1
