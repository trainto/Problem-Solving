#include <vector>
#include <map>

using namespace std;

class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> ret;
    map<int, int> map;
    int len = nums.size();
    for (int i = 0; i < len; i++) {
      int complement = target - nums[i];
      if (map.find(complement) != map.end() && map.find(complement) -> second != i) {
        ret.push_back(i);
        ret.push_back(map.find(complement) -> second);
        return ret;
      }
      map.insert(pair<int, int>(nums[i], i));
    }

    return ret;
  }
};