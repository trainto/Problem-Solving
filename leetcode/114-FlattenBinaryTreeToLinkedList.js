function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root == null) {
    return null;
  }

  const stack = [];

  const retrieve = (node) => {
    if (node.left == null && node.right == null) {
      if (stack.length > 0) {
        node.right = stack.pop();
      } else {
        return;
      }
    }

    if (node.left && node.right) {
      stack.push(node.right);
      node.right = node.left;
    } else if (node.left) {
      node.right = node.left;
    }
    node.left = null;
    retrieve(node.right);
  };

  retrieve(root);
};
