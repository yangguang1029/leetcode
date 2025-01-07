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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let last = null;
    let isvalid = true
    function traverse(node) {
        if(!node) {
            return;
        }
        if(isvalid) {
            traverse(node.left)
        }
        
        if(last !== null && node.val <= last) {
            isvalid = false
        }
        last = node.val;
        if(isvalid) {
            traverse(node.right)
        }
    }
    traverse(root)
    return isvalid
};