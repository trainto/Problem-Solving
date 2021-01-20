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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const memo = [];
  
  function traverse(node) {
    if (memo.length >= k) {
      return;
    }
    
    if (node.left) {
      traverse(node.left);
    }
    
    memo.push(node.val);
    if (memo.length >= k) {
      return;
    }
    
    if (node.right) {
      traverse(node.right);
    }
  }
  
  traverse(root);
  
  return memo[k - 1];
};

