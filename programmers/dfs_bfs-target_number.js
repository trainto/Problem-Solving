function solution(numbers, target) {
    let ret = 0;

    const search = (i, op, sum) => {
        if (i >= numbers.length) {
            return;
        } else if (i === numbers.length - 1) {
            if (sum + op * numbers[i] === target) {
                ret += 1;
            }
            return;
        } else {
            search(i + 1, 1, sum + op * numbers[i]);
            search(i + 1, -1, sum + op * numbers[i]);
        }
    };

    search(0, 1, 0);
    search(0, -1, 0);

    return ret;
}

// sample
console.log(solution([1, 1, 1, 1, 1, ], 3)); // should be 5
