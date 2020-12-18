/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }

  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};

var mergeTress2 = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  const root = new TreeNode();
  const trace = root;

  const stack = [];
  stack.push([trace, t1, t2]);

  while(stack.length !== 0) {
    const cur = stack.pop();

    if (!cur[1] && !cur[2]) {
      continue;
    }

    cur[0].val = (cur[1] ? cur[1].val : 0 ) + (cur[2] ? cur[2].val : 0);

    if ((cur[1] && cur[1].left) || (cur[2] && cur[2].left)) {
      cur[0].left = new TreeNode();
      stack.push([cur[0].left,  cur[1] ? cur[1].left : null,  cur[2] ? cur[2].left : null]);
    }

    if ((cur[1] && cur[1].right) || (cur[2] && cur[2].right)) {
      cur[0].right = new TreeNode();
      stack.push([cur[0].right, cur[1] ? cur[1].right : null, cur[2] ? cur[2].right : null]);
    }
  }

  return root;
}

