/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const memo = new Set();

  while (!memo.has(n)) {
    memo.add(n);
    n = (n + '').split('').reduceRight((prev, num) => prev + num ** 2, 0);
  }

  return n === 1;
};


// Sample run
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(125));
console.log(isHappy(7));