/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) {
    	return 0;
    }
    var re = 0;
    var left = root.left;
    var right = root.right;
    if(left) {
    	if(left.left === null && left.right === null) {
    		re += left.val;
    	} else {
    		re += sumOfLeftLeaves(left);
    	}
    }
    if(right) {
    	re += sumOfLeftLeaves(right);
    }
    return re;
};