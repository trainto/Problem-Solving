/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

#include <iostream>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode* ret = new ListNode(0);
    ListNode* current = ret;
    int temp = 0;
    bool passed = false;
    while (true) {
      temp = 0;
      if (l1 != NULL) {
        temp += l1 -> val;
        l1 = l1 -> next;
      }
      if (l2 != NULL) {
        temp += l2 -> val;
        l2 = l2 -> next;
      }
      if (passed) {
        temp++;
      }
      if (temp > 9) {
        passed = true;
        current -> val = temp % 10;
      } else {
        passed = false;
        current -> val = temp;
      }
      if (passed || l1 != NULL || l2 != NULL) {
        current -> next = new ListNode(0);
        current = current -> next;
      } else {
        return ret;
      }
    }
  }
};