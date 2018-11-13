#include <iostream>
#include <vector>

using namespace std;

bool is_subset_sum_n(vector<int> &pd, int n, int sum, int depth) {
  if (sum == n) {
    return true;
  }
  if (sum > n || depth < 0) {
    return false;
  }
  return is_subset_sum_n(pd, n, sum + pd[depth], depth - 1) || is_subset_sum_n(pd, n, sum, depth - 1);
}

int main() {
  int tc;
  int n;
  vector<int> pd; // Proper dividers
  int div_sum = 0;
  cin >> tc;
  while (tc--) {
    cin >> n;
    for (int i = 1; i < n / 2 + 1; i++) {
      if (n % i == 0) {
        pd.push_back(i);
        div_sum += i;
      }
    }

    cout << ((div_sum > n && !is_subset_sum_n(pd, n, 0, pd.size() - 1)) ? "weird" : "not weird") << endl;
    pd.clear();
    div_sum = 0;
  }
}