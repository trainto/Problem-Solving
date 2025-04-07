function solution(n, times) {
  let min = 0;
  const maxTime = Math.max(...times);
  let max = maxTime * n;

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    const total = times.reduce((acc, t) => acc + Math.floor(mid / t), 0);

    if (total >= n) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
}

console.log(solution(6, [7,10])); // 28
