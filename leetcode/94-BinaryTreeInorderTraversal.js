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
var inorderTraversal = function(root) {
  const path = [];

  const visit = (node) => {
    if (!node) {
      return;
    }

    visit(node.left);
    path.push(node.val);
    visit(node.right);

  };

  visit(root);

  return path;
};


// Smaple run
console.log(inorderTraversal([1, null, 2, 3]));