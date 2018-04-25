#include <iostream>

using namespace std;

int couple(bool friends[10][10], bool taken[10], int taken_kids, int n) {
  if (taken_kids == n) {
    return 1;
  }

  int ret = 0;
  for (int i = 0; i < n; i++) {
    if (i > 0 && !taken[i - 1]) {
      return ret;
    }
    if (taken[i]) {
      continue;
    }

    for (int j = 0; j < n; j++) {
      if (j <= i || taken[j]) {
        continue;
      }

      if (friends[i][j]) {
        taken[i] = true;
        taken[j] = true;
        ret += couple(friends, taken, taken_kids + 2, n);
        taken[i] = false;
        taken[j] = false;
      }
    }
  }

  return ret;
}

int main() {
  int c;
  int n, m;
  bool friends[10][10] = {0,};
  bool taken[10] = {0,};
  int k1, k2;
  cin >> c;
  while (c--) {
    cin >> n >> m;
    while (m--) {
      cin >> k1 >> k2;
      friends[k1][k2] = true;
      friends[k2][k1] = true;
    }

    cout << couple(friends, taken, 0, n) << endl;

    fill_n(&friends[0][0], 100, 0);
    fill_n(&taken[0], 10, 0);
  }
}