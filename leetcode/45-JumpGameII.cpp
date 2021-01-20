class Solution {
public:
  int jump(vector<int>& nums) {
    int len = nums.size();
    if (len <= 1) {
      return 0;
    }

    int lastReach = 0;
    int curReach = 0;
    int jumps = 0;

    for (int i = 0; i <= curReach && i < len; i++) {
      if (i > lastReach) {
        jumps++;
        lastReach = curReach;
      }
      curReach = max(curReach, nums[i] + i);
    }

    if (curReach < len - 1) {
      return 0;
    }
    return jumps;
  }
};
