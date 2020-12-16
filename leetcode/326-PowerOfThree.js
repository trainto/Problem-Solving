/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1 || n === 3) {
    return true;
  }

  if (n === 0) {
    return false;
  }

  let temp = n;
  while (true) {
    if (temp === 1 || temp === 3 || temp === 9 ||  temp === 27) {
      return true;
    }

    if (temp % 3 === 0) {
      temp = temp / 3;
    } else {
      return false;
    }
  }
};