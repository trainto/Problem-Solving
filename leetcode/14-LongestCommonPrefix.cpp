class Solution {
public:
  string longestCommonPrefix(vector<string>& strs) {
    if (strs.size() == 0) {
      return "";
    }
    sort(strs.begin(), strs.end(), cmp);
    int len = strs.size();
    string prefix = strs[0];
    for (int i = 1; i < len; i++) {
      if (strs[i].find(prefix) != 0) {
        while (prefix.size() > 0) {
          prefix = prefix.substr(0, prefix.size() - 1);
          if (strs[i].find(prefix) == 0) {
            break;
          }
        }
        if (prefix.size() == 0) {
          return prefix;
        }
      }
    }
    return prefix;
  }

  static bool cmp(string &a, string &b) {
    return a.size() < b.size();
  }
};
