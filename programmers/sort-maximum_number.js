function solution(numbers) {
    const answer = [...numbers]
        .sort((a, b) => `${b}${a}` * 1 - `${a}${b}` * 1)
        .join('');

    return answer[0] === '0' ? '0' : answer;
}

// sample
console.log(solution([6, 10, 2])); // 6210