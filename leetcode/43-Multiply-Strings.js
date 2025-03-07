/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let ret = '';

  for (let i = num1.length - 1; i >= 0; i -= 1) {
    let ceiled = 0;
    const rowN = num1.length - i - 1;
    let row = ret.slice(ret.length - rowN);
    for (let j = num2.length - 1; j >=0; j -= 1) {
      const prev = Number(ret[ret.length - 1 - rowN - (num2.length - j - 1)]);
      const cal = Number(num1[i]) * Number(num2[j]) + ceiled + (isNaN(prev) ? 0 : prev);
      row = cal % 10 + row;
      ceiled = Math.floor(cal / 10)

      if (j === 0 && ceiled > 0) {
        row = ceiled + row;
      }
    }

    ret = row;
  }

  return ret;
}

console.log(multiply('123', '456')); // 56088
console.log(multiply('999', '999')); // 998001
console.log(multiply('408', '5')); // 2040
