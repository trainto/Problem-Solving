/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
  if (n < 0) {
    return false;
  }

  const str = n.toString(2);
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '1') {
      count += 1;
    }
  }

  return count === 1 ? true : false;
};

// test
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(128)); // true
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(-128)); // false
