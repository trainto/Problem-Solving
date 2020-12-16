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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root || root.length === 0) {
    return [];
  }

  const trace = [];

  const visit = (node, path) => {
    path.push(node.val);

    if (!node.left && !node.right) {
      trace.push(path);
      return;
    }

    if (node.left) {
      visit(node.left, [...path]);
    }

    if (node.right) {
      visit(node.right, [...path]);
    }
  };

  visit(root, []);

  return trace.map((path) => path.join('->'));
};
