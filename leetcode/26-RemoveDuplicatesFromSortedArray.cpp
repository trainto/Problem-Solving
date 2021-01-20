class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    int len = nums.size();
    if (len <= 1) {
      return len;
    }
    int i = 1;
    for (int j = i; j < len; i++) {
      while (nums[j] <= nums[i - 1]) {
        j++;
      }
      nums[i] = nums[j];
    }
    return i - 1;
  }
};
