/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const arr = [];
  for (let i = 0; i < numRows; i += 1) {
    arr[i] = [];
  }

  let curX = 0;
  let curY = 0;
  let full = true;

  s.split('').forEach(ch => {
    if (full) {
      arr[curY][curX] = ch;
      if (curY < numRows - 1) {
        curY += 1;
      } else {
        curY -= 1;
        if (curY !== 0) {
          full = false;
        }
        curX += 1;
      }
    } else {
      arr[curY][curX] = ch;
      curX += 1;
      curY -= 1;
      if (curY === 0) {
        full = true;
      }
    }
  });

  return arr.reduce((prev, line) => prev + line.join(''), '');
};

// Sample run
console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR')
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI')