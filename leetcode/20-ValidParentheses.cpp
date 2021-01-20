class Solution {
public:
  bool isValid(string s) {
    int len = s.size();
    vector<char> stack;
    char start;
    for (int i = 0; i < len; i++) {
      if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
        stack.push_back(s[i]);
        continue;
      } else {
        if (stack.size() == 0) {
          return false;
        }
        start = stack[stack.size() - 1];
        stack.pop_back();
        // if (!isPair(start, s[i])) {
        if (start + 1 != s[i] && start + 2 != s[i]) {
          return false;
        }
      }
    }
    if (stack.size() != 0) {
      return false;
    }
    return true;
  }

  bool isPair(char start, char end) {
    switch (start) {
      case '(':
        if (end == ')') {
          return true;
        }
        break;
      case '{':
        if (end == '}') {
          return true;
        }
        break;
      case '[':
        if (end == ']') {
          return true;
        }
        break;
      default:
        break;
    }
    return false;
  }
};