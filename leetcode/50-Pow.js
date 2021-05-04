/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }

  const pow = Math.abs(n);
  let ret = 1;
  if (pow % 2 === 0) {
    ret *= myPow(x * x, Math.floor(pow / 2));
  } else {
      ret = ret * myPow(x * x, Math.floor(pow / 2)) * x;
  }

  return n < 0 ? 1/ret : ret;
};

// test
console.log(myPow(2.00000, 10)); // 1024.00000
