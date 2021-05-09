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
const oddEvenList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const evenHead = head.next;
  let evenCur = head.next;
  let oddCur = head;
  let cur = head;
  let index = 1;

  while (cur !== null) {
    const tempCur = cur;
    cur = cur.next;
    if (index % 2 === 0) {
      evenCur.next = tempCur;
      evenCur = tempCur;
    } else {
      oddCur.next = tempCur;
      oddCur = tempCur;
    }

    index += 1;
  }

  oddCur.next = evenHead;
  evenCur.next = null;

  return head;
};
