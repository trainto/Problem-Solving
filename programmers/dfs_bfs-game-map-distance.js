function solution(maps) {
  let min = Number.MAX_VALUE;

  const dfs = (i, j, move, trace) => {
    if (i < 0 || j < 0 || i >= maps.length || j >= maps[i].length || move >= min || maps[i][j] === 0) {
      return Number.MAX_VALUE;
    }

    if (i === maps.length - 1 && j === maps[i].length - 1) {
      min = Math.min(min, move);
      return move;
    }

    trace.push(`${i}:${j}`);

    let subMin = Number.MAX_VALUE;
    if (!trace.includes(`${i + 1}:${j}`)) {
      subMin = Math.min(dfs(i + 1, j, move + 1, [...trace]), subMin);
    }
    if (!trace.includes(`${i}:${j + 1}`)) {
      subMin = Math.min(dfs(i, j + 1, move + 1, [...trace]), subMin);
    }
    if (!trace.includes(`${i - 1}:${j}`)) {
      subMin = Math.min(dfs(i - 1, j, move + 1, [...trace]), subMin);
    }
    if (!trace.includes(`${i}:${j - 1}`)) {
      subMin = Math.min(dfs(i, j - 1, move + 1, [...trace]), subMin);
    }
  };

  dfs(0, 0, 1, []);

  return min === Number.MAX_VALUE ? -1 : min;
}

function solution2(maps) {
  const queue = [[0, 0, 1]];
  let min = 0;

  const memo = new Set();

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length > 0) {
    const [x, y, dis] = queue.shift();
    if (memo.has(`${x}:${y}`)) {
      continue;
    }

    if (x === maps.length - 1 && y === maps[x].length - 1) {
      return dis;
    }
    memo.add(`${x}:${y}`);

    for (let i = 0; i < 4; i += 1) {
      if (maps[x + dx[i]] && maps[x + dx[i]][y + dy[i]] && !memo.has(`${x + dx[i]}:${y + dy[i]}`)) {
        queue.push([x + dx[i], y + dy[i], dis + 1]);
      }
    }
  }

  return -1;
}

console.log(
  solution2([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  solution2([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
console.log(
  solution2([
    [1, 1, 1],
    [1, 1, 0]
  ])
); // -1