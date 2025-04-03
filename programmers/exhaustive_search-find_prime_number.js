function solution(numbers) {
  let ret = 0;

  const set = new Set();

  const retrieve = (indices, str) => {
    const num = Number(str);
    if (num > 1 && !set.has(num)) {
      const sqrt = Math.sqrt(num);
      ret += 1;
      for (let i = 2; i <= sqrt; i += 1) {
        if (num % i === 0) {
          ret -= 1;
          break;
        }
      }
    }

    set.add(num);

    if (indices.length === numbers.length) {
      return;
    }

    for (let i = 0; i < numbers.length; i += 1) {
      if (!indices.includes(i)) {
        retrieve([...indices, i], str + numbers[i]);
      }
      if ( i < numbers.length - 1 && !indices.includes(i + 1)) {
        retrieve([...indices, i + 1], str + numbers[i + 1]);
      }
    }
  };

  for (let i = 0; i < numbers.length; i += 1) {
    retrieve([i], numbers[i]);
  }

  return ret;
}

console.log(solution('17')); // 3
console.log(solution('011')); // 2
