/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if( (!p && q) || (!q && p) ) {
    	return false;
    }
    if(!p && !q) {
    	return true;
    }
    if(p.val !== q.val) {
    	return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};