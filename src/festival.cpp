#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

int main() {
  cout.precision(10);
  cout << fixed;
  int c;
  cin >> c;
  int available_days, default_days;
  vector<int> costs;
  while (c--) {
    cin >> available_days >> default_days;
    while (available_days--) {
      int cost;
      cin >> cost;
      costs.push_back(cost);
    }

    double average = INFINITY;
    for (int i = 0; i + default_days <= costs.size(); i++) {
      int total = 0;
      for (int j = i; j < i + default_days; j++) {
        total += costs[j];
      }
      average = total / (double) default_days < average ?
          total / (double) default_days : average;
      
      for (int j = i + default_days, k = 1; j < costs.size(); j++, k++) {
        total += costs[j];
        int divider = default_days + k;
        average = total / (double) divider < average ? total / (double) divider : average;
      }
    }

    cout << average << endl;
    costs.clear();
  }

  return 0;
}