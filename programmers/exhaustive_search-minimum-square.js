function solution(sizes) {
  let xMax = 0;
  let yMax = 0;

  for (let i = 0; i < sizes.length; i += 1) {
    xMax = Math.max(sizes[i][0], sizes[i][1], xMax);
    yMax = Math.max(yMax, Math.min(sizes[i][0], sizes[i][1]));
  }

  return xMax * yMax;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
console.log(solution([[10, 10]])); // 10