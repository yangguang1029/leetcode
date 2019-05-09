/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) {
      return null
    }
    let value = root.val
    if(value === val) {
      return root
    }
    if(val > value) {
      return searchBST(root.right, val)
    }
    if(val < value) {
      return searchBST(root.left, val)
    }
};