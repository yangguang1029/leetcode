/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || !p || !q) {
    	return;
    }
    var big = Math.max(p.val, q.val);
    var small = Math.min(p.val, q.val);

    var current = root;
    while(current) {
    	if(current.val > big) {
    		current = current.left;
    	}else if(current.val < small){
    		current = current.right
    	}else{
    		return current;
    	}
    }
    return null;
};