#include <iostream>
#include <string>

using namespace std;

int main() {
  string sequence;
  getline(cin, sequence);

  int memo[1000000];
  memo[0] = sequence[0] == '0' ? 0 : 1;
  for (int i = 1; i < sequence.size(); i++) {
    if (sequence[i] != sequence[i - 1]) {
      memo[i] = memo[i - 1] + 1;
    } else {
      memo[i] = memo[i - 1];
    }
  }

  int n = 0;
  int i, j;
  cin >> n;
  while (n--) {
    cin >> i >> j;
    if (memo[i] == memo[j]) {
      cout << "Yes" << endl;
    } else {
      cout << "No" << endl;
    }
  }

  return 0;
}