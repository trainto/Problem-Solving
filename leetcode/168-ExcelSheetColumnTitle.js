/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) {
    return '';
  }

  const CodeA = 65;
  const CodeZ = 90;

  let ret = '';
  let temp = n;
  do {
    const cur = temp % 26;
    const code = CodeA + cur - 1;
    ret = String.fromCharCode(code < CodeA ? CodeZ : code) + ret;

    temp = Math.floor(temp / 26);
    if (cur === 0) {
      temp -= 1;
    }
  } while (temp > 26);

  if (temp > 0) {
    ret = String.fromCharCode(CodeA + temp - 1) + ret;
  }

  return ret;
};

// Sample run
console.log(convertToTitle(1)) // A
console.log(convertToTitle(26)) // Z
console.log(convertToTitle(52)) // AZ
console.log(convertToTitle(28)) // AB
console.log(convertToTitle(701)) // ZY
console.log(convertToTitle(7001)) // JIG