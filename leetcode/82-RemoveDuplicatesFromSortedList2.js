/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null) {
    return head;
  }

  let start = head;
  let current = head;
  let left = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      let next = current.next.next;
      while (next != null && next.val === current.val) {
        next = next.next;
      }
      if (next) {
        if (current === start) {
          start = next;
          left = next;
        } else {
          left.next = next;
        }
        current = next;
      } else {
        if (current === start) {
          return null;
        } else {
          left.next = null;
          break;
        }
      }
    } else {
      left = current;
      current = current.next;
    }
  }

  return start;
};
