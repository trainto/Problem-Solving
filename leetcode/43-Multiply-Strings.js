/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let result = '0';

  for (let i = num1.length - 1; i >= 0; i -= 1) {
    let row = i === num1.length - 1 ? '' : result.slice(i + 1 - num1.length);
    let from = 0;
    let from2 = 0;
    for (let j = num2.length - 1; j >=0; j -= 1) {
      const cal = Number(num1[i]) * Number(num2[j]) + from;
      from = Math.floor(cal / 10);

      if (j === 0) {
        console.log('case', num1[i])
        console.log('before row', row);
        const prev = Number(result[result.length - 1 - (num1.length - i - 1)]);
        row = prev ? prev + cal + from2 + row : cal + from2 + row;
        console.log('prev', prev);
        console.log('after row', row)
      } else {
        if (j === num2.length - 1 && i !== num1.length - 1) {
          row = result.slice(i - num1.length + 1)
        }
        const prev = Number(result[j]);
        console.log('here', i, j, prev);
        const sum = prev ? prev + (cal % 10) + from2 : cal % 10 + from2;
        row = sum % 10 + row;
        if (sum > 9) {
          from2 = Math.floor(sum / 10) ;
        } else {
          from2 = 0;
        }
      }
    }
    result = row;
  }

  return result;
};

// console.log(multiply('2', '3')); // 6
console.log(multiply('123', '456')); // 56088
// console.log(multiply('2', '3') === '6')
// console.log(multiply('123', '456') === '56088')
// console.log(multiply('999', '999')); // 998001
// console.log(multiply('408', '5')); // 2040
