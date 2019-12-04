class Solution {
public:
    int reverse(int x) {
      if (x < 10 && x > -10) {
        return x;
      }
      bool isNegative = false;
      if (x < 0) {
        x *= -1;
        isNegative = true;
      }
      string temp = to_string(x);
      for (int start = 0, end = temp.size() - 1; start < end; start++, end--) {
        char c = temp[start];
        temp[start] = temp[end];
        temp[end] = c;
      }
      long ret = isNegative ? -stol(temp) : stol(temp);
      if (ret > pow(2, 31) || ret < -pow(2, 31)) {
        return 0;
      }
      return ret;
    }
};
