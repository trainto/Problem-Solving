/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const retrieve = (node, depth) => {
    if (node == null) {
      return depth - 1;
    }

    const leftResult = retrieve(node.left, depth + 1) - depth;
    const rightResult = retrieve(node.right, depth + 1) - depth;

    max = Math.max(max, leftResult + rightResult);

    return depth + Math.max(leftResult, rightResult);
  };

  retrieve(root, 0);
  return max;
};
