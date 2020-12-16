/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];

  const generate = (open, close, gen) => {
    if (open > n) {
      return;
    }

    if (open === n && close === n - 1) {
      ret.push(gen + ')');
      return;
    }

    if (open === close) {
      generate(open + 1, close, gen + '(');
    } else if (open > close) {
      generate(open + 1, close, gen + '(');
      generate(open, close + 1, gen + ')')
    }
  }

  generate(0, 0, '');

  return ret;
};

// Smaple run
console.log(generateParenthesis(1));
console.log(generateParenthesis(3));
console.log(generateParenthesis(5));