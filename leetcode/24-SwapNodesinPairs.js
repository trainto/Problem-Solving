/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!!!head) {
    return null;
  }

  let current = head;
  let prev = null;
  let temp = null;
  if (!!head.next) {
    head = head.next;
  }
  while (!!current && !!current.next) {
    temp = current.next;
    if (!!current.next.next) {
      current.next = current.next.next;
    } else {
      current.next = null;
    }
    temp.next = current;
    if (!!prev) {
      prev.next = temp;
    }

    prev = current;
    current = current.next;
  }
  return head;
};