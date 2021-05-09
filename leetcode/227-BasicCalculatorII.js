/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const arr = s.replace(/\s/g, '').replace(/([+-])/g, ':$1:').split(':');

  const calc = (str) => {
    if (str.includes('*') || str.includes('/')) {
      const split = str.replace(/([*/])/g, ':$1:').split(':');
      let i = 1;
      let accu = calc(split[0]);
      while (i < split.length) {
        if (split[i] === '*') {
          accu *= split[i + 1];
        } else if (split[i] == '/') {
          accu = Math.trunc(accu / split[i + 1]);
        }
        i += 2;
      }

      return accu;
    } else {
      return Number(str);
    }
  };

  let i = 1;
  let accu = calc(arr[0]);
  while (i < arr.length) {
    if (arr[i] === '+') {
      accu += calc(arr[i + 1]);
      i += 2;
    } else if (arr[i] === '-') {
      accu -= calc(arr[i + 1]);
      i += 2;
    }
  }

  return accu;
};

// test
console.log(calculate('3+2 *2-3')); // 4
console.log(calculate('5/2/2')); // 1
