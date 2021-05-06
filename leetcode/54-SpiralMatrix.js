/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  let y = 0;
  let x = 0;
  let wallL = -1;
  let wallR = matrix[0].length;
  let wallU = -1;
  let wallD = matrix.length;
  let curX = 0;
  let curY = 0;
  let direction = 'r';

  const size = matrix.length * matrix[0].length;
  let count = 0;
  const ret = [];

  while (count < size) {
    switch (direction) {
      case 'r':
        while (curX < wallR) {
          ret.push(matrix[curY][curX]);
          curX += 1;
          count += 1;
        }
        curX -= 1;
        curY += 1;
        wallU += 1;
        direction = 'd';
        break;
      case 'd':
        while (curY < wallD) {
          ret.push(matrix[curY][curX]);
          curY += 1;
          count += 1;
        }
        curY -= 1;
        curX -= 1;
        wallR -= 1;
        direction = 'l';
        break;
      case 'l':
        while (curX > wallL) {
          ret.push(matrix[curY][curX]);
          curX -= 1;
          count += 1;
        }
        curX  += 1;
        curY -= 1;
        wallD -= 1;
        direction = 'u';
        break;
      case 'u':
        while (curY > wallU) {
          ret.push(matrix[curY][curX]);
          curY -= 1;
          count += 1;
        }
        curY += 1;
        curX += 1;
        wallL += 1;
        direction = 'r';
        break;
      default:
        break;
    }
  }

  return ret;
};

// test
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,7,4,5]
