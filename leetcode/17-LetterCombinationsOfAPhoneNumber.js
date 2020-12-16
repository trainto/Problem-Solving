/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) {
    return [];
  }

  const map = new Map();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);

  const ret = [];

  const comb = (index, combination) => {
    const arr = map.get(digits[index]);
    for (let i = 0; i < arr.length; i += 1) {
      if (index < digits.length - 1) {
        comb(index + 1, combination + arr[i]);
      } else {
        ret.push(combination + arr[i]);
      }
    }
  };

  comb(0, '');

  return ret;
};


// Sample run
console.log(letterCombinations('23'));
console.log(letterCombinations('234'));