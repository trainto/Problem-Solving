function solution(s) {
  if (s.length === 0) {
    return 0;
  }

  let ret = 1;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (i - j + 1 <= ret) {
          break;
      }

      let isPal = true;
      const mid = (i + j) / 2;

      for (let r = j; r < mid; r += 1) {
        if (s[r] !== s[i - (r - j)]) {
          isPal = false;
          break;
        }
      }

      if (isPal) {
        ret = Math.max(i - j + 1, ret);
        break;
      }
    }
  }

  return ret;
}

console.log(solution('abcdcba')); // 7
console.log(solution('abacde')); // 3
console.log(solution('cdabae')); // 3
console.log(solution('abcdgfg')); // 3
console.log(solution('')); // 0
console.log(solution('a')); // 1
console.log(solution('ab')); // 1
console.log(solution('111111111111111111111111111111111111111111111111111111111111111111111111')); // 72
console.log(solution(
  'kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv'
)); // 5 qahaq
console.log(solution('abcdefghijklmn4312134qrxtu')); // 3
console.log(solution('abcdefg123321hijklmn5665xyzq')); // 6