/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(!root) {
    	return root;
    }
    var left = root.left;
    var right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);
    return root;
};