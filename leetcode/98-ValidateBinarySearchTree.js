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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  const isValid = (node, min, max) => {
    if (node === null) {
      return true;
    }

    if (node.val < min || node.val > max) {
      return false;
    }

    if (node.left) {
      if (node.left.val >= node.val) {
        return false;
      }
    }

    if (node.right) {
      if (node.right.val <= node.val) {
        return false;
      }
    }

    if (!isValid(node.left, min, node.val - 1) || !isValid(node.right, node.val + 1, max)) {
      return false;
    }

    return true;
  }

  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
