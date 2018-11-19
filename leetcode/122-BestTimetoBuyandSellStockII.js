/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  let ret = 0;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] > prices[i + 1]) {
      continue;
    }
    ret += (prices[i+1] - prices[i]);
  }
  return ret;
};