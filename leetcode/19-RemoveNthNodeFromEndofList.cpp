/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
  ListNode* removeNthFromEnd(ListNode* head, int n) {
    int order = 0;
    ListNode* linker = head;
    ListNode* cur = head;
    while (cur->next != NULL) {
      cur = cur->next;
      order++;
      if (order > n) {
        linker = linker->next;
      }
    }
    if (order == n - 1) {
      head = head->next;
    } else {
      linker->next = linker->next->next;
    }
    return head;
  }
};
