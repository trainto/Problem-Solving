#include <iostream>
#include <vector>
#include <numeric>
#include <cstring>

using namespace std;

bool bitmask[1000001];

bool isWeird(int n) {
  vector<int> canMake;
  vector<int> divisors;
  divisors.push_back(1);
  for (int i =2; i < n / 2 + 1; ++i) {
    if (n % i == 0) {
      divisors.push_back(i);
    }
  }

  if (accumulate(divisors.begin(), divisors.end(), 0) <= n) return false;

  memset(bitmask, 0, sizeof(bitmask));
  canMake.clear();
  canMake.reserve(n+10);
  bitmask[0] = true;
  canMake.push_back(0);
  for (int i = 0; i < divisors.size(); ++i)
    for (int j = canMake.size()-1; j >= 0; --j) {
      int k = canMake[j] + divisors[i];
      if(!bitmask[k] && k <= n) {
        if(k == n) return false;
        bitmask[k] = true;
        canMake.push_back(k);
      }
    }
  return true;
}

int main() {
  int tc;
  cin >> tc;
  for (int i = 0; i < tc; i++) {
    int num;
    cin >> num;
    if (isWeird(num)) {
      cout << "weird" << endl;
    } else {
      cout << "not weird" << endl;
    }
  }
}
