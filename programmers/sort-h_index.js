function solution(citations) {
    const sorted = [...citations].sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < sorted.length; i += 1) {
        const h = Math.min(i + 1, sorted[i]);
        if (sorted[i + 1] === undefined || h >= sorted[i + 1]) {
            answer = Math.max(answer, h);
            return answer;
        }
    }

    return answer;
}

// Sample
console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([2, 2])); // 2
