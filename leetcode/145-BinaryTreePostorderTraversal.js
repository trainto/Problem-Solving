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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root == null) {
    return [];
  }

  const ret = [];

  const visit = (node) => {
    if (node.left) {
      visit(node.left);
    }

    if (node.right) {
      visit(node.right);
    }

    ret.push(node.val);
  };

  visit(root);

  return ret;
};
