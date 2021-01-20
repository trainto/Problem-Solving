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
  ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    if (l1 == NULL && l2 == NULL) {
      return NULL;
    }
    ListNode* ret = new ListNode(0);
    ListNode* current = ret;
    ListNode* prev;
    int current_number;
    while (l1 != NULL || l2 != NULL) {
      if (l1 != NULL && l2 != NULL) {
        if (l1->val <= l2->val) {
          current_number = l1->val;
          l1 = l1->next;
        } else {
          current_number = l2->val;
          l2 = l2->next;
        }
      } else if (l1 != NULL) {
        current_number = l1->val;
        l1 = l1->next;
      } else {
        current_number = l2->val;
        l2 = l2->next;
      }
      current->val = current_number;
      current->next = new ListNode(0);
      prev = current;
      current = current->next;
    }
    prev->next = NULL;
    delete current;
    return ret;
  }
};
