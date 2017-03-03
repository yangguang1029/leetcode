/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) {
    	return false;
    }
    var value = root.val;
    var left = root.left;
    var right = root.right;
    if(!left && !right && sum === value) {
    	return true;
    }
    var bleft = false;
    if(left) {
    	bleft = hasPathSum(left, sum - value);
    }
    var bright = false;
    if(right) {
    	bright = hasPathSum(right, sum - value);
    }
    return bleft || bright;
};