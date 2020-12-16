/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // s.reverse();

  for (let i = 0; i < s.length / 2; i += 1) {
    const temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
};

// Sample run
let testCase = ['h', 'e', 'l', 'l', 'o'];
reverseString(testCase);
console.log(testCase);