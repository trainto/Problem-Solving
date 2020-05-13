/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const remove = (str) =>  {
    let ret = '';
    let i = 0;
    const len = str.length;
    for (; i < len; i += 1) {
      if (str[i] !== str[i + 1]) {
        ret += str[i];
      } else {
        i += 1;
      }
    }

    return ret;
  }

  let ret = S;
  while (true) {
    const result = remove(ret);
    if (result === ret) {
      break;
    } else {
      ret = result;
    }
  }

  return ret;
};

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('aaaaabbaca'));
console.log(removeDuplicates("aaaaaaaaa"));