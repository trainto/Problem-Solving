class Solution {
public:
    bool isPalindrome(int x) {
      if (x < 0 || (x != 0 && x % 10 == 0)) {
        return false;
      }

      int temp_number = 0;
      while (x > temp_number) {
        temp_number = temp_number * 10 + x % 10;
        x /= 10;
      }

      return x == temp_number || x == temp_number / 10;
    }
};
