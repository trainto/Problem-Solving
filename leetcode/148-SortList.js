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
var sortList = function(head) {
  if (!head) {
    return [];
  }

  // selection sort
  let target = head;
  while (target) {
    let cur = target.next;
    while (cur) {
      if (target.val > cur.val) {
        const temp = cur.val;
        cur.val = target.val;
        target.val =temp;
      }
      cur = cur.next;
    }
    target = target.next;
  }

  return head;
}