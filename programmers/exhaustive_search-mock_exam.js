function solution(answers) {
  const ret = [];
  const students = [0, 0, 0];
  const patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];


  for (let i = 0; i < answers.length; i += 1) {
    for (let j = 0; j < patterns.length; j += 1) {
      if (patterns[j][i % patterns[j].length] === answers[i]) {
        students[j] = students[j] + 1;
      }
    }
  }

  if (students[0] >= students[1] && students[0] >= students[2]) {
    ret.push(1);
  }
  if (students[1] >= students[0] && students[1] >= students[2]) {
    ret.push(2);
  }
  if (students[2] >= students[0] && students[2] >= students[1]) {
    ret.push(3);
  }

  return ret;
}

console.log(solution([1,2,3,4,5])); // [1]
console.log(solution([1,3,2,4,2])); // [1,2,3]