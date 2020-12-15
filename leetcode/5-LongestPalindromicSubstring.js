/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || s.length === 0) {
    return '';
  }

  const memo = new Array(s.length);

  for (let i = 0; i < s.length; i += 1) {
    memo[i] = new Array(s.length);
    memo[i][i] = true;
  }

  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length - 1; i += 1) {
    memo[i][i + 1] = s[i] === s[i + 1];
    if (memo[i][i + 1]) {
      left = i;
      right = i + 1;
    }
  }

  for (let window = 3; window <= s.length; window += 1) {
    let winLeft = 0;
    let winRight = winLeft + window - 1;
    while (winRight < s.length) {
      if (s[winLeft] === s[winRight] && memo[winLeft + 1][winRight - 1]) {
        left = winLeft;
        right = winRight;
        memo[left][right] = true;
      }
      winLeft += 1;
      winRight += 1;
    }
  }

  return s.substring(left, right + 1);
};

var longestPalindromeBF = function(s) {
  if (!s || s.length === 0) {
    return '';
  }

  let longest = s[0];
  for (let i = s.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      const sub = s.substring(j, i + 1);
      let isPal = true;
      for (let r = 0; r < Math.floor(sub.length / 2); r += 1) {
        if (sub[r] !== sub[sub.length - r - 1]) {
          isPal = false;
          break;
        }
      }
      if (isPal && sub.length > longest.length) {
        longest = sub;
      }
    }
  }

  return longest;
};

// Sample run
console.log(longestPalindrome('babad')); // bab or aba
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('a')); // a
console.log(longestPalindrome('ab')); // a
console.log(longestPalindrome('aacabdkacaa')); // aca
console.log(longestPalindrome(
  'kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv'
)); // qahaq
console.log(longestPalindrome('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'));
