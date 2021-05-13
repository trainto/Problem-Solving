/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  let indices = [];
  let head = null;
  let cur = null;
  lists.forEach((node) => indices.push(node));

  while (indices.length > 0) {
    let index = -1;
    let min = Number.MAX_VALUE;
    let count = 0;
    for (let i = 0; i < indices.length; i += 1) {
      if (indices[i] === null) {
        count += 1;
      } else {
        if (min > indices[i].val) {
          min = indices[i].val;
          index = i;
        }
      }
    }

    if (index === -1) {
      break;
    }

    if (head === null) {
      head = indices[index];
      cur = indices[index];
    } else {
      cur.next = indices[index];
      cur = indices[index];
    }

    indices[index] = indices[index].next;

    if (count > 0) {
      indices = indices.filter((node) => node !== null);
    }

    if (indices.length === 1) {
      if (head === null) {
        head = indices[0];
      } else {
        cur.next = indices[0];
      }

      break;
    }
  }

  return head;
};
