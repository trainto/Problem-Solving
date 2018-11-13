/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let bin = n.toString(2);
  while (bin.length < 32) {
    bin = `0${bin}`;
  }

  let ret = 0;
  const len = bin.length;
  for (let i = 0; i < len; i += 1) {
    ret += bin[i] * (2 ** (len - (len - i)));
  }

  return ret;
};
