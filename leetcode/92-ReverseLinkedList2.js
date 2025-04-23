/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }

  let beforeStart;
  let start = head;
  let end = head;
  let afterEnd = head;
  for (let i = 1; i < right; i += 1) {
    if (i < left) {
      beforeStart = start;
      start = start.next;
    }
    end = end.next;
    afterEnd = end.next;
  }

  let temp = start.next;
  let current = start;
  while (current !== end) {
    const temp2 = temp.next;
    temp.next = current;
    current = temp;
    temp = temp2;
  }

  start.next = afterEnd;

  if (beforeStart) {
    beforeStart.next = end;
  } else {
    return end;
  }

  return head;
};
