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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const root = new TreeNode(preorder[0]);

  const memo = {};
  inorder.forEach((v, i) => memo[v] = i);

  for (let i = 1; i < preorder.length; i += 1) {
    cur = root;
    const targetIdx = memo[preorder[i]];
    while (true) {
      const currentIdx = memo[cur.val];
      const dir = targetIdx > currentIdx ? 'right' : 'left';
      if (cur[dir] == null) {
        cur[dir] = new TreeNode(preorder[i]);
        break;
      }
      cur = cur[dir];
    }
  }

  return root;
};

var buildTree2 = function (preorder, inorder) {
  const memo = {};
  inorder.forEach((v, i) => memo[v] = i);

  pi = 0;
  const dfs = (s, e) => {
    if (s > e) {
      return null;
    }

    const val = preorder[pi];
    pi += 1;
    const mid = memo[val];

    const l = dfs(s, mid - 1);
    const r = dfs(mid + 1, e);

    return new TreeNode(val, l, r);
  };

  return dfs(0, inorder.length - 1);
}

const preorder = (root) => {
  const ret = [];
  const stack = [root];

  while (stack.length) {
    const cur = stack.pop();
    ret.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return ret;
};

console.log(preorder(buildTree2([3,9,20,15,7], [9,3,15,20,7])));
console.log(preorder(buildTree2([1,2,3], [3,2,1])));
