/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  let trimmed = s.trim();
  if (!/^[0-9.+-]/.test(trimmed)) {
    return 0;
  }

  const sign = trimmed.startsWith('-') ? -1 : 1;
  if (trimmed.startsWith('+') || trimmed.startsWith('-')) {
    trimmed = trimmed.substring(1);
  }

  const matched = trimmed.match(/[^0-9.]/);
  if (matched) {
    trimmed = trimmed.substring(0, matched.index);
  }

  const splitted = trimmed.split('.');
  if (splitted.length > 2) {
    return 0;
  }

  let ret = 0;
  ret = splitted[0]
    .split('')
    .reduceRight((prev, cur, i) => prev + ((cur - '0') * 10 ** (splitted[0].length - i - 1)), ret);

  if (splitted[1]) {
    ret = splitted[1]
      .split('')
      .reduce((prev, cur, i) => prev + ((cur - '0') * (10 ** -(i + 1))), ret);
  }

  ret *= sign;

  return ret > MAX ? MAX : ret < MIN ? MIN : ret;
};

var myAtoi2 = function(s) {
  let trimmed = s.trim();
  if (!/^[0-9.+-]/.test(trimmed)) {
    return 0;
  }

  const sign = trimmed.startsWith('-') ? -1 : 1;
  if (trimmed.startsWith('+') || trimmed.startsWith('-')) {
    trimmed = trimmed.substring(1);
  }

  const matched = trimmed.match(/[^0-9.]/);
  if (matched) {
    trimmed = trimmed.substring(0, matched.index);
  }

  return trimmed * 1 ? (Math.max(Math.min(trimmed * sign, (2 ** 31 - 1)), -(2 ** 31))) : 0
}

// Sample run
console.log(myAtoi('42'));
console.log(myAtoi('    -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('1.5'));
console.log(myAtoi('.5'));
console.log(myAtoi('+-12'));
console.log(myAtoi('21474836460'));
console.log(myAtoi('0000-42'));
console.log(myAtoi('0000-42a123'));
console.log(myAtoi('42a123'));
console.log(myAtoi('-5-'));

console.log('===============================');

console.log(myAtoi2('42'));
console.log(myAtoi2('    -42'));
console.log(myAtoi2('4193 with words'));
console.log(myAtoi2('words and 987'));
console.log(myAtoi2('-91283472332'));
console.log(myAtoi2('1.5'));
console.log(myAtoi2('.5'));
console.log(myAtoi2('+-12'));
console.log(myAtoi2('21474836460'));
console.log(myAtoi2('0000-42'));
console.log(myAtoi2('0000-42a123'));
console.log(myAtoi2('42a123'));
console.log(myAtoi2('-5-'));