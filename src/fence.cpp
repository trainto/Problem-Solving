#include <iostream>

using namespace std;

int main() {
  int fence[20000];

  int c;
  cin >> c;
  while (c--) {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
      cin >> fence[i];
    }

    /* Time consumption
    int max = 0;
    int candidate = 0;
    int height = 0;
    for (int i = 0; i < n; i++) {
      height = fence[i];
      for (int j = i + 1; j < n; j++) {
        if (height > fence[j]) {
          candidate = height * (j - i);
          height = fence[j];
          max = max > candidate ? max : candidate;
        }

        if (j == n - 1) {
          candidate = height * (n - i);
          max = max > candidate ? max : candidate;
        }
      }

      if (i == n - 1) {
        candidate = height * (n - i);
        max = max > candidate ? max : candidate;
      }
    }

    cout << max << endl;
    */
  }
}