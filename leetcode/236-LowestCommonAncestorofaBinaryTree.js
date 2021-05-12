/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 const lowestCommonAncestor = function(root, p, q) {
  let parent = null;

  const search = (cur, count) => {
    if (parent !== null) {
      return 0;
    }

    if (cur === null) {
      return 0;
    }

    let curCount = 0;
    if (cur.val === p.val) {
      curCount += 1;
    } else if (cur.val === q.val) {
      curCount += 1;
    }

    if (count + curCount === 2) {
      return 1;
    }

    let [leftCount, rightCount] = [0, 0];
    leftCount = search(cur.left);
    rightCount = search(cur.right);

    if ((curCount === 1 && (leftCount === 1 || rightCount === 1)) ||
        (leftCount === 1 && rightCount === 1)) {
      parent = cur;
    }

    return curCount + leftCount + rightCount;
  };

  search(root, 0);

  return parent ? parent : root;
};
