#include <iostream>

using namespace std;

int fence[20000];

int find_max_block(const int left, const int right) {
  if (left == right) {
    return fence[left];
  }
  int mid = (left + right) / 2;
  int ret = max(find_max_block(left, mid), find_max_block(mid + 1, right));
  int search_left = mid;
  int search_right = mid + 1;
  int min_height = min(fence[search_left], fence[search_right]);
  ret = max(ret, min_height * 2);

  while (search_left > left || search_right < right) {
    if (search_left > left && (search_right == right || fence[search_left - 1] > fence[search_right + 1])) {
      search_left--;
      min_height = min(min_height, fence[search_left]);
    } else {
      search_right++;
      min_height = min(min_height, fence[search_right]);
    }
    ret = max(ret, min_height * (search_right - search_left + 1));
  }

  return ret;
}

int main() {
  int c;
  cin >> c;
  while (c--) {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
      cin >> fence[i];
    }
    cout << find_max_block(0, n - 1) << endl;
  }
}