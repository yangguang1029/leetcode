/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    var getDepth = function(node) {
        if(!node) {
            return 0;
        }
        let ld = getDepth(node.left);
        let rd = getDepth(node.right);
        if(ld < 0 || rd < 0 || Math.abs(ld-rd) > 1) {
            return -1;
        }

        return 1 + Math.max(ld, rd);
    }

    return getDepth(root) >= 0; 
};