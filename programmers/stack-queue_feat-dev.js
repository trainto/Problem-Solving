function solution(progresses, speeds) {
  const ret = [];

  let cycles = 0;

  for (let i = 0; i < progresses.length; i += 1) {
    cycles = Math.ceil((100 - progresses[i]) / speeds[i]);
    ret.push(1);

    for (let j = i + 1; j < progresses.length; j += 1) {
      if (progresses[j] + speeds[j] * cycles >= 100) {
        ret[ret.length - 1] += 1;
        i += 1;
      } else {
        break;
      }
    }
  }

  return ret;
}

console.log(solution([93,30,55], [1, 30, 5])) // [2, 1];
console.log(solution([95,90,99,99,80,99], [1,1,1,1,1,1])) // [1,3,2];