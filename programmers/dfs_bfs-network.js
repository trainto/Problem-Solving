function solution(n, computers) {
    let ret = 0;
    const memo = new Array(n).fill(0);

    while (memo.includes(0)) {
        const node = memo.indexOf(0);
        const stack = [node];
        memo[node] = 1;

        while (stack.length > 0) {
            const cur = stack.pop();
            for (let i = 0; i < computers[cur].length; i += 1) {
                if (memo[i] === 1) {
                    continue;
                }

                if (computers[cur][i] === 1) {
                    stack.push(i);
                    memo[i] = 1;
                }
            }
        }
        ret += 1;
    }

    return ret;
}

// Sample
console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])); // 1
