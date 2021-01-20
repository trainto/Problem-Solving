class Solution {
public:
  string countAndSay(int n) {
    if (n <= 1) {
      return "1";
    }
    string ret;
    string temp = countAndSay(n - 1);
    int count;
    for (int i = 0; i < temp.size(); i++) {
      count = 1;
      for (int j = i + 1; j < temp.size(); j++) {
        if (temp[i] == temp[j]) {
          count++;
          i = j;
          continue;
        }
        i = j - 1;
        break;
      }
      ret.append(to_string(count));
      ret += temp[i];
    }
    return ret;
  }
};
