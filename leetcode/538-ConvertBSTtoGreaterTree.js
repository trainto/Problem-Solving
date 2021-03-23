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
 * @return {TreeNode}
 */
 var convertBST = function(root) {
  if (root === null) {
    return root;
  }

  const stack = [];
  stack.push(root);

  let sum = 0;
  const visit = (node) => {
    if (node.left === null && node.right === null) {
      const originNodeVal = node.val;
      node.val += sum;
      sum += originNodeVal;
      return;
    }

    if (node.right) {
      visit(node.right);
    }

    const originNodeVal = node.val;
    node.val += sum;
    sum += originNodeVal;

    if (node.left) {
      visit(node.left);
    }
  };

  visit(root);

  return root;
};
