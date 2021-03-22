/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  let ret = dividend / divisor;

  ret = Number((ret + '').split('.')[0]);
  if (ret < (-2)**31 || ret > 2**31 - 1) {
    return 2**31 - 1;
  } else {
    return ret;
  }
};
