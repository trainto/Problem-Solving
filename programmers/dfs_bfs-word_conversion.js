function solution(begin, target, words) {
    let ret = Number.MAX_SAFE_INTEGER;

    const isConvertible = (candi, target) => {
        if (candi === target) {
            return false;
        }

        let diff = 0;
        for (let i = 0; i < candi.length; i += 1) {
            if (candi[i] !== target[i]) {
                diff += 1;
            }
            if (diff > 1) {
                return false;
            }
        }

        return true;
    };

    const visit = (cur, depth, visited) => {
        if (depth > ret) {
            return;
        }

        if (isConvertible(cur, target) && depth < ret) {
            ret = depth;
            return;
        }

        for (let i = 0; i < words.length; i += 1) {
            if (visited.includes(i)) {
                continue;
            }

            if (isConvertible(cur, words[i])) {
                visit(words[i], depth + 1, [...visited, i])
            }
        }
    };

    visit(begin, 1, []);

    return ret === Number.MAX_SAFE_INTEGER ? 0 : ret;
}

// Sample
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
