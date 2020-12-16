/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }

  const memo = [];
  let cur = head;

  while (cur.next != null) {
    memo.push(cur.val);
    cur = cur.next;
  }
  memo.push(cur.val);

  for (let i = 0; i < memo.length / 2; i += 1) {
    if (memo[i] !== memo[memo.length - i -1]) {
      return false;
    }
  }

  return true;
};;