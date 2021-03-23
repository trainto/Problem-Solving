function solution(array, commands) {
    const answer = [];

    commands.forEach((command) => {
       answer.push(
           array.slice(command[0] - 1, command[1])
               .sort((a, b) => a- b)[command[2] - 1]
       );
    });

    return answer;
}

// sample
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2,5,3], [4,4,1], [1,7,3]])); // [5, 6, 3]
