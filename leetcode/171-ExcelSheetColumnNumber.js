/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let ret = 0;

  for (let i = 0; i < columnTitle.length; i += 1) {
    ret += Math.pow(26, i) * (26 - (90 - columnTitle[columnTitle.length - 1 - i].charCodeAt()));
  }

  return ret;
};
